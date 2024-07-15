import { useEffect } from 'react';

function useDynamicCss(url) {
    useEffect(() => {
        console.log(`Loading CSS: ${url}`); // 로그 추가
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        link.onload = () => console.log(`CSS Loaded: ${url}`); // CSS가 로드되었을 때 로그 출력
        link.onerror = () => console.log(`Failed to load CSS: ${url}`); // CSS 로드 실패 시 로그 출력

        return () => {
            console.log(`Removing CSS: ${url}`); // 로그 추가
            document.head.removeChild(link);
        };
    }, [url]);
}

export default useDynamicCss;
