import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const hasGoogleCreds = () =>
  !!(process.env.GOOGLE_SHEETS_SHEET_ID &&
     process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
     process.env.GOOGLE_PRIVATE_KEY)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const body = await request.json()

    const name       = typeof body.name       === 'string' ? body.name.trim().slice(0, 200)       : ''
    const email      = typeof body.email      === 'string' ? body.email.trim().slice(0, 320)      : ''
    const university = typeof body.university === 'string' ? body.university.trim().slice(0, 300) : ''

    if (!name || !email || !university) {
      return NextResponse.json({ error: 'all fields are required' }, { status: 400 })
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'invalid email address' }, { status: 400 })
    }

    if (!hasGoogleCreds()) {
      console.log('[study-abroad] Google Sheets not configured — submission received')
      return NextResponse.json({ success: true })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: 'StudyAbroad!A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[new Date().toISOString(), name, email, university]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Study abroad request error:', error.message)
    return NextResponse.json({ error: 'failed to submit request' }, { status: 500 })
  }
}
