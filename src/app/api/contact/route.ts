import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Meno, email a správa sú povinné polia." },
        { status: 400 }
      );
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    if (!apiKey) {
      console.error("SMTP2GO_API_KEY is not set");
      return NextResponse.json(
        { error: "Konfiguračná chyba servera." },
        { status: 500 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "info@veskolfarm.sk";
    const senderEmail = process.env.SENDER_EMAIL || "noreply@veskolfarm.sk";

    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        to: [`VESKOL Farm <${recipientEmail}>`],
        sender: `VESKOL Farm Web <${senderEmail}>`,
        subject: `Nová správa z webu od ${name}`,
        html_body: `
          <h2>Nová správa z kontaktného formulára</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr>
              <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Meno:</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email:</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefón:</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(phone || "Neuvedené")}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Správa:</td>
              <td style="padding:8px 12px;">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        `,
        text_body: `Nová správa z kontaktného formulára\n\nMeno: ${name}\nEmail: ${email}\nTelefón: ${phone || "Neuvedené"}\n\nSpráva:\n${message}`,
      }),
    });

    const data = await response.json();

    if (data.data?.succeeded > 0) {
      return NextResponse.json({ success: true });
    } else {
      console.error("SMTP2GO error:", data);
      return NextResponse.json(
        { error: "Nepodarilo sa odoslať správu. Skúste to znova." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nastala neočakávaná chyba." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
