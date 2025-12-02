export async function POST(req: Request) {
  const body = await req.json();
  const botToken = "8334450831:AAEVSf7ZstwdjrHKu4R8Ogj3gfotLSDZYjw";

  const message = body.message;
  if (!message) return Response.json({ ok: true });

  const chatId = message.chat.id;
  const text = message.text || "";

  // ตัวอย่างคำสั่ง /hello
  if (text === "/hello") {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: "hello" }),
    });
  }

  return Response.json({ ok: true });
}
