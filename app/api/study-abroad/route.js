import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const hasGoogleCreds = () =>
  !!(process.env.GOOGLE_SHEETS_SHEET_ID &&
     process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
     process.env.GOOGLE_PRIVATE_KEY)

export async function POST(request) {
  try {
    const { name, email, university } = await request.json()

    if (!name || !email || !university) {
      return NextResponse.json({ error: 'all fields are required' }, { status: 400 })
    }

    if (!hasGoogleCreds()) {
      console.log('[study-abroad] Google Sheets not configured — submission received:', { name, email, university, timestamp: new Date().toISOString() })
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
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), name, email, university]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Study abroad request error:', error)
    return NextResponse.json({ error: 'failed to submit request' }, { status: 500 })
  }
}
