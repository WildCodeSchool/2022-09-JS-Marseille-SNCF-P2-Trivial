import React, {useState, useEffect} from "react";

const CounterTime = () => {
    const [secs, setSecs] = useState(20);

    useEffect(() => {
        let sampleInterval = setInterval(() => {
            if (secs > 0) {
                setSecs(secs - 1);
            } else {
                setSecs("Temps écoulé")
            }
        }, 1000);
        return () => {
            clearInterval(sampleInterval);
        };
    });

    return (
        <h2 className={secs === "Temps écoulé" && "timeEnd"}>{secs}</h2>
    );
}

export default CounterTime;