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
      sigmaQuestion,
      shadowboxQuestion,
      rating,
      yapping,
      slider,
      preference1,
    } = body;

    function sanitisePreference(preference) {
      return preference.map((item) => item.id).toString();
    }

    const values = [
      [
        new Date().toISOString(),
        nama,
        nim,
        sigmaQuestion.join(", "),
        shadowboxQuestion,
        rating,
        yapping,
        slider,
        sanitisePreference(preference1),
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
