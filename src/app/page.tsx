'use client'
import { AboutUs, Contact, OurJobs, OurServices, TopSection } from "./components";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import ResizeContext, { ResizeProvider, useResizeContext } from "@/context/ResizeContext";
import { SidebarProvider } from "@/context/SidebarContext";



export default function Home() {
  const { isMobile } = useResizeContext();

  return (
    <SidebarProvider>
      <ResizeProvider>
        <div className=" relative">
          <main className="flex min-h-screen flex-col xl:px-30 lg:px-30 md:px-20 sm:px-12 px-6">
            <TopSection />
            <AboutUs />
            <OurServices />
            <OurJobs />
            <Contact />
            <Footer />
          </main>
          <Sidebar />
        </div>
      </ResizeProvider>
    </SidebarProvider>
  );
}
