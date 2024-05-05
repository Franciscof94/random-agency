import { AboutUs, Contact, OurJobs, OurServices, TopSection } from "./components";
import { Footer } from "./components/Footer/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopSection />
      <AboutUs />
      <OurServices />
      <OurJobs />
      <Contact />
      <Footer />
    </main>
  );
}
