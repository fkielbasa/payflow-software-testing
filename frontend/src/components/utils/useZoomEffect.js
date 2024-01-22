import { useEffect, useState } from 'react';

const useZoomEffect = () => {
    const [isZoomedIn, setIsZoomedIn] = useState(false);

    const handleResize = () => {
        setIsZoomedIn(window.devicePixelRatio > 1.5);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Inicjalna wartość przy załadowaniu komponentu

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isZoomedIn;
};

export default useZoomEffect;
