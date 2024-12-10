import { useState, useEffect } from 'react';
import arrowUp from "../assets/images/arrow.png"; 

export default function Arrow() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!visible && window.pageYOffset > 300) {
        setVisible(true);
      } else if (visible && window.pageYOffset <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [visible]);

  return (
    <div>
      <div className="cont">
        <div className="container-skill">
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