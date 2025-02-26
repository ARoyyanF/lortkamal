import { google } from "googleapis";
import { NextResponse } from "next/server";

function parseServiceAccountKey() {
  try {
    return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}");
  } catch (error) {
    console.error("Error parsing GOOGLE_SERVICE_ACCOUNT_KEY:", error);
    return {};
  }
}

const auth = new google.auth.GoogleAuth({
  credentials: parseServiceAccountKey(),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received form data:", body);

    const {
      nama,
      nim,
      q1a,
      q1b,
      q1c,
      q1d, 
      q1e,
      q1f,
      q1g,
      q1h,
      q1i,
      q1j,
      q1k,
      q1l,
      q1m,
      q1n,
      q2a, 
      q2b,
      q2c,
      q2d,
      q2e,
      q2f,
      q2g,
      q2h,
      q2i,
      q2j,
      q2k,
      q3a,
      q3b,
      q3c,
      q3d,
      q3e,
      q3f,
      q4a,
      q4b,
      q4c,
      q4d,
      q4e,
      q5a,
      q5b,
      q5c,
      q5d,
      q5e,
      q5f,
      q5g,
      q5h,
      q5i,
      q6a,
      q6b,
      q6c,
      q6d,
      q6e,
      q6f,
    } = body;

    function sanitisePreference(preference) {
      return preference.map((item) => item.id).toString();
    }

    const values = [
      [
        new Date().toISOString(),
        nama,
        nim,
        q1a,
        q1b,
        q1c,
        q1d,
        q1e,
        q1f,
        q1g,
        q1h,
        q1i,
        q1j.join(", "),
        q1k,
        q1l,
        sanitisePreference(q1m),
        q1n,
        q2a,
        q2b,
        q2c,
        q2d,
        q2e,
        q2f.join(", "),
        sanitisePreference(q2g),
        q2h,
        sanitisePreference(q2i),
        q2j.join(", "),
        q2k,
        q3a,
        q3b,
        q3c,
        q3d,
        sanitisePreference(q3e),
        q3f,
        q4a,
        q4b.join(", "),
        q4c,
        sanitisePreference(q4d),
        q4e,
        q5a,
        q5b,
        q5c,
        q5d,
        q5e,
        q5f,
        q5g,
        sanitisePreference(q5h),
        q5i,
        q6a,
        q6b.join(", "),
        q6c,
        sanitisePreference(q6d),
        q6e.join(", "),
        q6f
      ],
    ];
    console.log("Sending form data: ", values);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log("Google Sheets API response:", response);

    if (response.status !== 200) {
      throw new Error(
        `Failed to append to Google Sheet: ${response.statusText}`
      );
    }

    return NextResponse.json(
      { message: "Survey submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to submit survey", details: (error as Error).message },
      { status: 500 }
    );
  }
}
