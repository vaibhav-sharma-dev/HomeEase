import React from "react";


export default function useScrollPosition() {

    const [isFixed, setIsFixed] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition > 0);
        }
        
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isFixed;
}