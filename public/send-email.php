<?php
/**
 * PHP Script to handle form submissions for Hostinger (Static Export)
 * This script handles both Broadband Applications and Coverage Check Requests.
 */

// Allow cross-origin requests
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

$formType = $data['formType']; // e.g. "Broadband Application", "Coverage Check Request", "Mobile Postpaid Application"
$formData = $data['formData'];
$attachments = $data['attachments'] ?? [];

// Configuration
$companyEmail = "sales@unifi-online.my";
$fromEmail = "sales@unifi-online.my"; 
$customerEmail = $formData["user-email"] ?? $formData["email"] ?? "";
$customerName = $formData["user-name"] ?? "Customer";

// Validate user-supplied email before using it in headers.
$validatedCustomerEmail = filter_var($customerEmail, FILTER_VALIDATE_EMAIL) ? $customerEmail : "";
 
/**
 * Helper to format data as HTML table rows
 */
function formatDataRows($data) {
    $rows = "";
    $skipKeys = ['accept1', 'user-email', 'attachments', 'formType'];
    
    foreach ($data as $key => $value) {
        if (in_array($key, $skipKeys) || is_array($value) || is_bool($value)) continue;
        
        $label = ucwords(str_replace(['-', '_'], ' ', $key));
        $displayValue = htmlspecialchars((string)$value);
        
        $rows .= "
        <tr>
            <td style='padding: 12px 10px; border-bottom: 1px solid #f0f0f0; width: 40%; font-weight: 700; color: #1800E7; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;'>$label</td>
            <td style='padding: 12px 10px; border-bottom: 1px solid #f0f0f0; color: #333; font-weight: 600; font-size: 14px;'>$displayValue</td>
        </tr>";
    }
    return $rows;
}

/**
 * Main Template Wrapper
 */
function getEmailTemplate($title, $greeting, $introText, $rows, $isCustomer, $accentColor = "#FF7A00") {
    $headerColor = "#1800E7";
    $footerText = $isCustomer ? "Our registration team will verify your details and contact you within 24 business hours." : "Please process this request as soon as possible.";
    
    $whatNext = $isCustomer ? "
    <div style='margin-top: 40px; padding: 20px; background-color: #fff8f0; border-radius: 16px; border: 1px solid #ffeeda;'>
        <p style='font-size: 14px; color: #9a6e3a; margin: 0; font-weight: 600; line-height: 1.5;'>
            <strong>What's Next?</strong><br>
            $footerText
        </p>
    </div>" : "<p style='font-size: 14px; color: #64748b; margin-top: 20px; text-align: center;'>$footerText</p>";

    return "
    <!DOCTYPE html>
    <html lang='en'>
    <head><meta charset='UTF-8'></head>
    <body style='font-family: Arial, sans-serif; background-color: #f4f7f9; margin: 0; padding: 0;'>
        <div style='max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #eef2f5;'>
            <div style='background: $headerColor; padding: 30px; text-align: center;'>
                <div style='display: inline-block; background: white; padding: 8px 16px; border-radius: 8px; margin-bottom: 15px;'>
                    <span style='color: $accentColor; font-weight: 900; font-style: italic; font-size: 18px;'>unifi</span>
                </div>
                <h1 style='color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; text-transform: uppercase;'>$title</h1>
            </div>
            <div style='padding: 30px;'>
                <div style='margin-bottom: 30px;'>
                    <h2 style='font-size: 18px; color: #111; margin: 0 0 10px 0;'>$greeting</h2>
                    <p style='font-size: 14px; color: #444; margin: 0; line-height: 1.6;'>$introText</p>
                </div>
                <div style='background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #f1f5f9;'>
                    <table style='width: 100%; border-collapse: collapse;'>
                        $rows
                    </table>
                </div>
                $whatNext
                <div style='margin-top: 40px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;'>
                    <p style='font-size: 11px; color: #999;'>Sent from Unifi Authorized Distributor Portal</p>
                </div>
            </div>
            <div style='background-color: #f8fafc; padding: 20px; text-align: center;'>
                <p style='font-size: 10px; color: #999; margin: 0;'>&copy; " . date('Y') . " Unifi Online Sales Team</p>
            </div>
        </div>
    </body>
    </html>";
}

// Generate Email Content based on form type
$isCoverage = (strpos($formType, 'Coverage') !== false);
$rows = formatDataRows($formData);

if ($isCoverage) {
    $subjectLabel = "Coverage Check Request"; // Changed from 'New Coverage Verification Request'
    $companyGreeting = "New Coverage Verification Requested";
    $companyIntro = "A potential customer wants to verify unifi availability at their location.";
    $customerGreeting = "Hello " . htmlspecialchars($customerName) . ",";
    $customerIntro = "We've received your request to check unifi coverage at your address. Our team is looking into it now!";
    $accentColor = "#9D50E5";
} else {
    $subjectLabel = "New Application"; // Changed from 'New Application'
    $companyGreeting = "New Application Received";
    $companyIntro = "A new broadband application has been submitted. Please review the details below.";
    $customerGreeting = "Hello " . htmlspecialchars($customerName) . ",";
    $customerIntro = "Thank you for applying for Unifi. We have received your application and documents for processing.";
    $accentColor = "#FF7A00";
}

// Improved Subject
$subject = "[$subjectLabel] $customerName"; 
$htmlToCompany = getEmailTemplate($formType, $companyGreeting, $companyIntro, $rows, false, $accentColor);
$htmlToCustomer = getEmailTemplate($formType, $customerGreeting, $customerIntro, $rows, true, $accentColor);

// Prepare Clean Headers
$boundary = "PHP-mixed-" . md5(time());
$headers = "From: Unifi Distributor <$fromEmail>\r\n";
$headers .= "Reply-To: " . ($validatedCustomerEmail ?: $fromEmail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: " . date('r') . "\r\n";
$headers .= "Message-ID: <" . uniqid() . "@unifi-online.my>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

if (empty($attachments)) {
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body = $htmlToCompany;
} else {
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $htmlToCompany . "\r\n\r\n";

    foreach ($attachments as $att) {
        $filename = $att['filename'];
        $content = $att['content'];
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$filename\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split($content) . "\r\n";
    }
    $body .= "--$boundary--";
}

// Send to company
$mailToCompany = mail($companyEmail, $subject, $body, $headers, "-f $fromEmail");

// Send to customer
if ($validatedCustomerEmail) {
    $custHeaders = "From: Unifi Distributor <$fromEmail>\r\n";
    $custHeaders .= "Reply-To: $fromEmail\r\n";
    $custHeaders .= "MIME-Version: 1.0\r\n";
    $custHeaders .= "Date: " . date('r') . "\r\n";
    $custHeaders .= "Message-ID: <" . uniqid() . "@unifi-online.my>\r\n";
    $custHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $custHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $custSubject = "Confirmation: We've received your $formType";
    mail($validatedCustomerEmail, $custSubject, $htmlToCustomer, $custHeaders, "-f $fromEmail");
}

if ($mailToCompany) {
    echo json_encode(["message" => "Success: Details sent to $companyEmail"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: System failed to send email. Ensure the server is configured correctly."]);
}
?>
