import React, { useEffect , useState } from "react";

function Loading() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
     setLoaded(()=>true)
  }, []);

  return (
    <main id="loading " className={`loadingPage ${loaded ? "loaded" : null}`} data-preaload>
      <div className="container">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <p className="text">welcome to my world</p>
    </main>
  );
}

export default Loading;
