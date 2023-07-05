'use client'
import React, { useEffect } from 'react';

const LongLineAnimations = ({ className = '' }) => {

    useEffect(() => {
      function lineAnimation() {
        var reveals = document.querySelectorAll(".line_animation path");
        for (var i = 0; i < reveals.length; i++) {
          if (typeof window !== 'undefined') {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top + 100;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
            } else {
              // reveals[i].classList.remove("active");
            }
          }
        }
      }
      if (typeof window !== 'undefined') {
        window.addEventListener("scroll", lineAnimation);
        lineAnimation();
      }
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener("scroll", lineAnimation);
        }
      };
    }, []);

    return(
         <>
         <svg className={`line_animation ${className}`} xmlns="http://www.w3.org/2000/svg" width="412.836" height="48.039" viewBox="0 0 412.836 48.039">
            <g id="animation_strokes" transform="translate(17276.811 18994.264)">
                <path id="Path_24873" data-name="Path 24873" d="M-17275-18823.2s10.6-22.611,23.859,0c5.748-7.234,11.863-17.23,22.77,0,6.264-8.561,10.674-16.379,22.754,0,3.238-4.918,10.586-19.617,22.541,0,4.359-6.537,9.715-18.371,22.293,0,1.992-3.049,11.2-19.73,22.656,0,2.982-5.109,10.105-17.254,22.086-.9,6.963-7.285,11.982-15.361,23.8.9,3.076-4.623,11.008-18.691,23.313,0,3.045-4.541,11.045-19.148,22.2-.9,2.525-2.588,9.049-18.037,22.52,0,2.736-2.8,11.574-17.406,22.73,0,2.736-4.061,10.1-16.986,22.311,0,2.947-3.01,11.576-17.617,22.311,0,2.736-3.01,10.32-18.127,22.787,0,2.914-2.436,10.688-17.641,23.477,0" transform="translate(0 -159)" fill="none" stroke="#e53314" strokeWidth="4"/>
                <path id="Path_24874" data-name="Path 24874" d="M-17275-18823.2s10.6-22.611,23.859,0c5.748-7.234,11.863-17.23,22.77,0,6.264-8.561,10.674-16.379,22.754,0,3.238-4.918,10.586-19.617,22.541,0,4.359-6.537,9.715-18.371,22.293,0,1.992-3.049,11.2-19.73,22.656,0,2.982-5.109,10.105-17.254,22.086-.9,6.963-7.285,11.982-15.361,23.8.9,3.076-4.623,11.008-18.691,23.313,0,3.045-4.541,11.045-19.148,22.2-.9,2.525-2.588,9.049-18.037,22.52,0,2.736-2.8,11.574-17.406,22.73,0,2.736-4.061,10.1-16.986,22.311,0,2.947-3.01,11.576-17.617,22.311,0,2.736-3.01,10.32-18.127,22.787,0,2.914-2.436,10.688-17.641,23.477,0" transform="translate(45 -127)" fill="none" stroke="#004393" strokeWidth="4"/>
            </g>
        </svg>
          </>
    )
}
export default LongLineAnimations