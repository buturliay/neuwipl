import { google } from 'googleapis';

export interface CalendarEvent {
  date: string;
  title: string;
}

export async function fetchEventsFromSheet(): Promise<CalendarEvent[]> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: 'Events!A2:B',
  });

  const rows = res.data.values || [];
  return rows.map(([date, title]) => ({ date, title }));
}
