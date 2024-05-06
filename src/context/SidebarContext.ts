import { createContext } from "react";

const SidebarContext = createContext({ sidebarIsOpen: false, setSidebarIsOpen: (isOpen: boolean) => {} });

export default SidebarContext;