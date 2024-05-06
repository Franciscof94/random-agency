'use client'
import { useEffect, useState } from "react";
import { AboutUs, Contact, OurJobs, OurServices, TopSection } from "./components";
import { Footer } from "./components/Footer/Footer";
import useWindowResize from "@/hooks/useWindowResize";
import { Sidebar } from "./components/Sidebar/Sidebar";
import ResizeContext from "@/context/ResizeContext";
import SidebarContext from "@/context/SidebarContext";



export default function Home() {
  const windowSize = useWindowResize();
  const [isMobile, setIsMobile] = useState(windowSize.width < 768);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)



  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <ResizeContext.Provider value={{ isMobile }}>
      <SidebarContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
        <div className=" relative">
          <main className="flex min-h-screen flex-col xl:px-30 lg:px-30 md:px-20 sm:px-12 px-6">
            <TopSection />
            <AboutUs />
            <OurServices />
            <OurJobs />
            <Contact />
            <Footer />
          </main>
          {isMobile && <Sidebar />}
        </div>
      </SidebarContext.Provider>
    </ResizeContext.Provider>
  );
}
