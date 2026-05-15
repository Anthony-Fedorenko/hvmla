import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MapEmbed from "../../components/MapEmbed";

export default function AddressMap() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("contact.mapTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("contact.mapTitle")}</h1>
          <p>{t("contact.mapSubtitle")}</p>
        </div>
      </div>

      <MapEmbed
        title={t("contact.mapTitle")}
        subtitle={t("contact.mapSubtitle")}
      />
    </>
  );
}
