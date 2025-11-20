export function NoScript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
          <div style="
            position: fixed;
            inset: 0;
            overflow-y: auto;
            background: #f9fafb;
            color: #111827;
            padding: 2rem;
            font-family: system-ui, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 999999;
          ">
            <div style="
              background: white;
              padding: 2rem;
              border-radius: 1rem;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              max-width: 90%;
              width: 500px;
            ">
              <h1 style="font-size: 1.75rem; margin-bottom: 1rem; color: #2563eb;">
                ⚠️ กรุณาเปิด JavaScript
              </h1>

              <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 1.5rem;">
                เว็บไซต์นี้ต้องการ JavaScript เพื่อทำงานอย่างถูกต้อง กรุณาเปิด JavaScript ตามวิธีด้านล่าง
              </p>

              <div style="
                background: #f3f4f6;
                padding: 1rem;
                border-radius: 0.75rem;
                text-align: left;
                font-size: 0.95rem;
                line-height: 1.5;
              ">
                <h2 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #1d4ed8;">
                  วิธีเปิด JavaScript
                </h2>
                <ul style="padding-left: 1.2rem;">
                  <li><b>Chrome:</b> Settings → Privacy and security → Site settings → JavaScript → Allowed</li>
                  <li><b>Edge:</b> Settings → Cookies and site permissions → JavaScript → Allowed</li>
                  <li><b>Firefox:</b> about:config → javascript.enabled → true</li>
                  <li><b>Safari (Mac):</b> Preferences → Security → Enable JavaScript</li>
                </ul>
              </div>

              <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #6b7280;">
                หากเปิด JavaScript แล้ว ให้ refresh หน้าเว็บอีกครั้ง
              </p>
            </div>
          </div>
        `,
      }}
    />
  );
}
