export const Bottom = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: `#292933`,
        margin: `0`,
        color: `#ffffe6`,
      }}
    >
      <p style={{ padding: `1rem`, marginBottom: `0%` }}>
        Thank you for visi
        <a
          href="https://ja.wikipedia.org/wiki/T"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `#ccccb8` }}
        >
          t
        </a>
        ing my website!
      </p>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          listStyle: `none`,
        }}
      >
        <dl className="footer_links">
          <dt>History.com</dt>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              X(旧Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              HomePage🆙🆙
            </a>
          </li>
        </dl>
        <dl className="footer_links">
          <dt>Archives.com</dt>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              X(旧Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              HomePage🆙🆙
            </a>
          </li>
        </dl>
        <dl className="footer_links">
          <dt>FortuneTelling.com</dt>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              X(旧Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#ccccb8` }}
            >
              HomePage🆙🆙
            </a>
          </li>
        </dl>
      </div>
    </footer>
  );
};
