import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import UpcomingServices from "../components/UpcomingServices";
import NewsAndAnnouncements from "../components/NewsAndAnnouncements";
import DonationCTA from "../components/DonationCTA";
import MapEmbed from "../components/MapEmbed";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Holy Virgin Mary Russian Orthodox Cathedral – ${t("home.heroSubtitle")}`;
  }, [t]);

  return (
    <>
      <Hero />
      <UpcomingServices />
      <NewsAndAnnouncements />
      <DonationCTA />
      <MapEmbed />
      <SocialLinks />
    </>
  );
}
