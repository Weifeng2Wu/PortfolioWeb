import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add CORS headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'POST') {
    try {
      // Validate request body
      const { email, message } = req.body

      if (!email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Email and message are required' 
        })
      }

      const data = await resend.emails.send({
        from: 'Weifeng <wuweifeng0217@gmail.com>',
        to: ['wilfred2wu@gmail.com'],
        subject: 'New message from your portfolio',
        text: `From: ${email}\n\nMessage: ${message}`,
      })

      res.status(200).json({ success: true, data })
    } catch (error) {
      console.error('Email sending error:', error)
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
