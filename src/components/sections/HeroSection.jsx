import { useEffect, useState } from "react";

import img1 from "../../assets/images/newadded.jpg";
import img2 from "../../assets/images/mains.jpg";
import img3 from "../../assets/images/main3.jpg";
import img4 from "../../assets/images/main-4.jpg";
import img5 from "../../assets/images/side2s.jpg";

const images = [img1, img2, img3, img4, img5];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative transition-all duration-700"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content goes here */}
    </section>
  );
}
