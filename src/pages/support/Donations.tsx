import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PAYPAL_DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=UTTJXGRC5TRQY";

const WAYS_KEYS = [
  "support.w1",
  "support.w2",
  "support.w3",
  "support.w4",
  "support.w5",
];

export default function Donations() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("support.donationsTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("support.donationsTitle")}</h1>
          <p>{t("support.donationsSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "1.05rem" }}>{t("support.donationsP1")}</p>
              <p>{t("support.donationsP2")}</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div className="card">
                <h3 style={{ marginBottom: "var(--space-md)" }}>
                  {t("support.ways")}
                </h3>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {WAYS_KEYS.map((key) => (
                    <li
                      key={key}
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        fontSize: "0.95rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <span
                        style={{ color: "var(--color-accent)", flexShrink: 0 }}
                      >
                        ✦
                      </span>
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="card"
                style={{
                  background: "var(--color-accent)",
                  border: "none",
                  textAlign: "center",
                  padding: "var(--space-xl)",
                }}
              >
                <p
                  style={{
                    color: "#c8b09a",
                    marginBottom: "var(--space-md)",
                    fontSize: "1rem",
                  }}
                >
                  {t("support.donationsP2")}
                </p>
                <a
                  href={PAYPAL_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#f5efe8",
                    color: "var(--color-accent)",
                    padding: "0.85rem 2rem",
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  {t("support.donateOnline")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
