import Head from "next/head";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-24">
      <Head>
        <title>Thank You | Submission Received</title>
        <meta
          name="description"
          content="Thank you page for form submissions."
        />
      </Head>

      <main className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-12">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-11 w-11 text-green-600" />
        </div>

        <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">
          Submission Received
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-gray-600">
          Thank you for choosing Unifi. Your form was submitted successfully, and our team will contact you within 24 hours.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#1800E7] px-7 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#0C00B3]"
          >
            Back To Home
          </Link>
          <Link
            href="/check-coverage"
            className="rounded-full border-2 border-[#1800E7] px-7 py-3 text-sm font-black uppercase tracking-widest text-[#1800E7] transition hover:bg-gray-50"
          >
            Check Coverage
          </Link>
        </div>
      </main>
    </div>
  );
}
