import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, message } = req.body
    try {
      const data = await resend.emails.send({
        from: 'Weifeng <wuweifeng0217@gmail.com>',
        to: ['wilfred2wu@gmail.com'],
        subject: 'New message from your portfolio',
        text: `From: ${email}\n\nMessage: ${message}`,
      })

      res.status(200).json({ success: true, data })
    } catch (error) {
      res.status(400).json({ success: false, error })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

