import { useEffect, useState } from 'react';

function Loading({ name }) {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        if (document.querySelector(`script[src="${name}"]`)) {
            setScriptLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.src = name;
        script.async = true;
        script.onload = () => {
            setScriptLoaded(true);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [name]);

    if (!scriptLoaded) {
        return <div>Loading...</div>;
    }

    return null;
}

export default Loading;