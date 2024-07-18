import { useEffect } from 'react';

function useDynamicCss(url) {
    useEffect(() => {
        console.log(`Loading CSS: ${url}`); // 로그 추가
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            console.log(`Removing CSS: ${url}`); // 로그 추가
            document.head.removeChild(link);
        };
    }, [url]);
}

export default useDynamicCss;
