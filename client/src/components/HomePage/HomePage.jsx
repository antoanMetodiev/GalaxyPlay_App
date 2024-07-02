import "../HomePage/HomePage.css";
import { Header } from "./structure/Header";
import { LiveWallperSection } from "./structure/LiveWallperSection";
import { DemoPreview } from "./structure/DemoPreview";
import { Footer } from "./structure/Footer";

export const HomePage = (props) => {



  return (
    <>
      <Header />
      <LiveWallperSection />
      <DemoPreview />
      <Footer />
    </>
  );
};
