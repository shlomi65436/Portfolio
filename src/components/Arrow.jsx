import { useState, useEffect } from 'react';
import arrowUp from "../assets/images/arrow.png"; // Replace with your arrow-up icon path

export default function Arrow() {
  // State to manage visibility of the scroll-to-top button
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (!visible && window.pageYOffset > 300) {
      setVisible(true);
    } else if (visible && window.pageYOffset <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [visible]);

  return (
    <div>
      <div className="cont">
        <div className="container-skill">
          {/* Add your other images here */}
        </div>
      </div>
      {visible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <img src={arrowUp} alt="Scroll to Top" />
        </div>
      )}
    </div>
  );
}