'use client'
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
    const [isMobile, setIsMobile] = useState(windowSize && windowSize.width ? windowSize.width < 768 : false);


    useEffect(() => {
        const isClient = typeof window === 'object';

        if (!isClient) {
            return;
        }

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
            {children}
        </ResizeContext.Provider>
    );
};

export const useResizeContext = () => useContext(ResizeContext);

export default ResizeContext;



