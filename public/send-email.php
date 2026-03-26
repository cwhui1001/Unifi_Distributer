<?php
/**
 * PHP Script to handle form submissions for Hostinger (Static Export)
 * This script should be placed in the public/ folder of your Next.js project.
 * It will be exported to the out/ folder automatically during npm run build.
 */

// Allow cross-origin requests (for local testing and different domains)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["message" => "Method not allowed"]);
    exit;
}

// Read JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['formType']) || !isset($data['formData'])) {
    echo json_encode(["message" => "Invalid data received"]);
    exit;
}

$formType = $data['formType'];
$formData = $data['formData'];
$attachments = $data['attachments'] ?? [];

// CONFIGURATION
$companyEmail = "sales@unifi-online.my";
$fromEmail = "noreply@unifi-online.my"; // Hostinger usually requires this to be a real domain email
$customerEmail = $formData["user-email"] ?? $formData["email"] ?? "";

// Prepare Email Body Text
$emailContent = "New $formType Submission Received:\n\n";
foreach ($formData as $key => $value) {
    if ($key !== "accept1" && $key !== "user-email") {
        // Humanize keys (e.g., user-name -> User Name)
        $label = ucwords(str_replace(['-', '_'], ' ', $key));
        $emailContent .= "$label: $value\n";
    }
}

// EMAIL 1: SEND TO COMPANY
$subject = "[New $formType] - " . ($formData["user-name"] ?? "Customer Request");
$boundary = md5(time());

$headers = "From: $fromEmail\r\n";
if ($customerEmail) {
    $headers .= "Reply-To: $customerEmail\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Multipart body
$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $emailContent . "\r\n";

// Add Attachments (Base64)
foreach ($attachments as $att) {
    $filename = $att['filename'];
    $content = $att['content']; // This is the Base64 string from the frontend
    
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";
    $body .= "Content-Description: $filename\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$filename\"; size=" . strlen($content) . ";\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split($content) . "\r\n";
}
$body .= "--$boundary--";

// Execute send to company
$mailToCompany = mail($companyEmail, $subject, $body, $headers);

// EMAIL 2: SEND TO CUSTOMER (Confirmation)
if ($customerEmail && $mailToCompany) {
    $custSubject = "Receipt: Your Unifi $formType request has been received";
    $custHeaders = "From: $fromEmail\r\n";
    $custHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $custBody = "Hello " . ($formData["user-name"] ?? "Customer") . ",\n\n";
    $custBody .= "Thank you for reaching out to us. Your $formType request has been successfully received and is being processed.\n\n";
    $custBody .= "Summary of your submission:\n--------------------------\n";
    $custBody .= $emailContent;
    $custBody .= "\n--------------------------\n";
    $custBody .= "Our team will contact you within 24 hours.\n\nBest regards,\nUnifi Online Sales Team";
    
    mail($customerEmail, $custSubject, $custBody, $custHeaders);
}

if ($mailToCompany) {
    echo json_encode(["message" => "Success: Application sent to $companyEmail"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: Server failed to send email. Check Hostinger mail settings."]);
}
?>
