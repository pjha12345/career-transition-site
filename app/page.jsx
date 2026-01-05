export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Career & Transition Coaching</h1>
      <p>
        Helping professionals navigate career changes, financial decisions,
        and US–India transitions with clarity.
      </p>

      <h2>Services</h2>
      <ul>
        <li>Career transition & late-career security</li>
        <li>US–India relocation guidance</li>
        <li>Financial decision clarity sessions</li>
      </ul>

      <h2>Book a Paid Session</h2>
      <p>$150 / 60 minutes • Zoom</p>

      <a
        href="#"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          background: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Request a Session
      </a>

      <p style={{ marginTop: "40px", fontSize: "12px", color: "gray" }}>
        Consulting services provided through LLC. Not financial or legal advice.
      </p>
    </main>
  );
}
