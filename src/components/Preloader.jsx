import { useEffect, useState } from "react";
import "./preloader.css";
import logo from "/logo.png"; // put your logo in public folder or import

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2200); // time of preloader

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <img src={logo} alt="Logo" className="preloader-logo" />
        <h1 className="preloader-text">Corporate Buying</h1>
      </div>
    </div>
  );
}
