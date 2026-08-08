import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

// About
import History from "../pages/about/History";
import Clergy from "../pages/about/Clergy";
import Bylaws from "../pages/about/Bylaws";
import Gallery from "../pages/about/Gallery";

// Ministries
import StXenia from "../pages/ministries/StXenia";
import Choir from "../pages/ministries/Choir";
import CatechismSchool from "../pages/ministries/CatechismSchool";
import Sisterhood from "../pages/ministries/Sisterhood";
import StBarbara from "../pages/ministries/StBarbara";
import LOVES from "../pages/ministries/LOVES";
import Inquirers from "../pages/ministries/Inquirers";

// Services
import ServiceSchedule from "../pages/services/ServiceSchedule";
import LiveStreams from "../pages/services/LiveStreams";
import StreamArchive from "../pages/services/StreamArchive";

// Sunday School (unified page)
import SundaySchool from "../pages/sundayschool/SSInfo";

// Education
import Books from "../pages/education/Books";
import Bulletin from "../pages/education/Bulletin";

// News
import Announcements from "../pages/news/Announcements";
import NewsPage from "../pages/news/NewsPage";

// Support
import Donations from "../pages/support/Donations";
import Volunteering from "../pages/support/Volunteering";

// Cafe / Museum
import Cafe from "../pages/cafe/Cafe";
import Museum from "../pages/cafe/Museum";
import Library from "../pages/cafe/Library";

// Contact
import ContactInfo from "../pages/contact/ContactInfo";
import AddressMap from "../pages/contact/AddressMap";
import SocialMedia from "../pages/contact/SocialMedia";
import ContactForm from "../pages/contact/ContactForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: "about/history", element: <History /> },
      { path: "about/clergy", element: <Clergy /> },
      { path: "about/bylaws", element: <Bylaws /> },
      { path: "about/gallery", element: <Gallery /> },

      { path: "ministries/st-xenia", element: <StXenia /> },
      { path: "ministries/choir", element: <Choir /> },
      { path: "ministries/catechism", element: <CatechismSchool /> },
      { path: "ministries/sisterhood", element: <Sisterhood /> },
      { path: "ministries/st-barbara", element: <StBarbara /> },
      { path: "ministries/loves", element: <LOVES /> },
      { path: "ministries/inquirers", element: <Inquirers /> },

      { path: "services/schedule", element: <ServiceSchedule /> },
      { path: "services/live", element: <LiveStreams /> },
      { path: "services/archive", element: <StreamArchive /> },

      { path: "sunday-school", element: <SundaySchool /> },

      { path: "education/books", element: <Books /> },
      { path: "education/bulletin", element: <Bulletin /> },

      { path: "news/announcements", element: <Announcements /> },
      { path: "news", element: <NewsPage /> },

      { path: "support/donations", element: <Donations /> },
      { path: "support/volunteering", element: <Volunteering /> },

      { path: "cafe", element: <Cafe /> },
      { path: "museum", element: <Museum /> },
      { path: "library", element: <Library /> },

      { path: "contact/info", element: <ContactInfo /> },
      { path: "contact/map", element: <AddressMap /> },
      { path: "contact/social", element: <SocialMedia /> },
      { path: "contact/form", element: <ContactForm /> },
    ],
  },
]);
