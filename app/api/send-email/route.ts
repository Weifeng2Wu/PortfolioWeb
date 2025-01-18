import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Weifeng <wuweifeng0217@gmail.com>',
      to: ['wilfred2wu@gmail.com'],
      subject: 'New message from your portfolio',
      text: `From: ${email}\n\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || error }),
      { status: 400 }
    );
  }
}
