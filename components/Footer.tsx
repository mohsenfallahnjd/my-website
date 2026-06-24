export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.07)", padding: "0" }}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
      >
        <span style={{ fontSize: "0.8rem", color: "#aaa" }}>
          © {year} <span style={{ color: "#0000ff", fontWeight: 700 }}>Mohsen Fallahnejad</span>
          <span style={{ marginLeft: 10, opacity: 0.45 }}>· pixels pushed with love ⚽</span>
        </span>
        <nav style={{ display: "flex", gap: 20 }}>
          {[
            { label: "GitHub", href: "https://github.com/mohsenfallahnjd" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mohsenfallahnjd/" },
            { label: "X", href: "https://x.com/themohsenme" },
            { label: "hi@themohsen.me", href: "mailto:hi@themohsen.me" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              style={{
                fontSize: "0.8rem",
                color: "#aaa",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0000ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
