import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("notFound.title")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <div className="page-hero">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.message")}</p>
        <Link to="/" className="btn btn--outline" style={{ marginTop: "var(--space-md)" }}>
          {t("notFound.cta")}
        </Link>
      </div>
    </div>
  );
}
