import React, { useEffect, useState } from "react";
const ProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      const scrollDistance = documentHeight - windowHeight;
      const percentageScrolled = (scrollTop / scrollDistance) * 100;

      setScrollPercentage(percentageScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;