import React, {useState, useEffect} from "react";

const CounterTime = () => {
    const [secs, setSecs] = useState(60);

    useEffect(() => {
        let sampleInterval = setInterval(() => {
            if (secs > 0) {
                setSecs(secs - 1);
            } else {
                setSecs("Time elapsed")
            }
        }, 1000);
        return () => {
            clearInterval(sampleInterval);
        };
    });

    return (
        <h2 className={secs === "Time elapsed" && "timeEnd"}>{secs}</h2>
    );
}

export default CounterTime;