import { createContext, useContext, useState, useEffect } from "react";

interface SidebarContextProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>({ sidebarIsOpen: false, setSidebarIsOpen: () => { } });

interface Props {
  children: React.ReactNode
}

export const SidebarProvider = ({ children }: Props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  console.log(sidebarIsOpen)

  return (
    <SidebarContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);

export default SidebarContext;