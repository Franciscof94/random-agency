import useWindowResize from "@/hooks/useWindowResize";
import { createContext, useContext, useEffect, useState } from "react";

interface ResizeContextProps {
    isMobile: boolean;
}

const ResizeContext = createContext<ResizeContextProps>({ isMobile: false });

interface Props {
    children: React.ReactNode
}

export const ResizeProvider = ({ children }: Props) => {
    const windowSize = useWindowResize();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        if (typeof window !== "undefined") {
            handleResize(); 
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <ResizeContext.Provider value={{ isMobile }}>
            {children}
        </ResizeContext.Provider>
    );
};

export const useResizeContext = () => useContext(ResizeContext);

export default ResizeContext;



