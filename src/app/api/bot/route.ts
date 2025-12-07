import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const botToken = process.env.BOT_TOKEN!; // ใส่ใน Vercel Environment
    const message = body.message;

    if (!message) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text?.trim() || "";

    // -------------------------
    // RULE: การตอบกลับข้อความ
    // -------------------------
    if (text === "1") {
      await sendText(chatId, "hello", botToken);
    }

    if (text === "2") {
      await sendText(chatId, "คุณเลือก 2", botToken);
    }

    if (text === "/start") {
      await sendText(chatId, "ยินดีต้อนรับ!", botToken);
    }

    return NextResponse.json({ ok: true });

  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message });
  }
}

// -------- ส่งข้อความ ----------
async function sendText(chatId: number, text: string, token: string) {
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });
}
