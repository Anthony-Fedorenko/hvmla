import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import UpcomingServices from "../components/UpcomingServices";
import AnnouncementsPreview from "../components/AnnouncementsPreview";
import DonationCTA from "../components/DonationCTA";
import MapEmbed from "../components/MapEmbed";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Holy Virgin Mary Cathedral – ${t("home.heroSubtitle")}`;
  }, [t]);

  return (
    <>
      <Hero />
      <UpcomingServices />
      <AnnouncementsPreview />
      <DonationCTA />
      <MapEmbed />
      <SocialLinks />
    </>
  );
}
