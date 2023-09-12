"use client";

import React, { useEffect, useState } from "react";

function CountDown() {
  const [launch, setLaunch] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // const target = new Date("07/29/2023 22:15:59");
    const target = new Date("12/31/2023 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setLaunch(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {launch ? (
        <p>We're Live 🚀</p>
      ) : (
        <div>
          <h1 className="">
            Days Left Till Launch:{" "}
            <span className="text-[#671EFF]">
              {" "}
              {days} days {hours} hours
            </span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default CountDown;
