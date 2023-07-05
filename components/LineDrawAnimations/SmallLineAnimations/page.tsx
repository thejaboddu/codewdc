'use client'
import React, { useEffect } from 'react';

const SmallLineAnimations = ({ className = '' }) => {

    useEffect(() => {
      function lineAnimation() {
        var reveals = document.querySelectorAll(".line_animation path");
        for (var i = 0; i < reveals.length; i++) {
          if (typeof window !== 'undefined') {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
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
            <svg className={`line_animation ${className}`} xmlns="http://www.w3.org/2000/svg" width="185.414" height="47.783" viewBox="0 0 185.414 47.783">
                <g id="animation_strokes_1" transform="translate(17276.811 18994.264)">
                    <path id="Path_24873" data-name="Path 24873" d="M-17275-18823.2s10.6-22.611,23.859,0c5.748-7.234,11.863-17.23,22.77,0,6.264-8.561,10.674-16.379,22.754,0,3.238-4.918,10.586-19.617,22.541,0,4.359-6.537,9.715-18.371,22.293,0,1.992-3.049,11.2-19.73,22.656,0" transform="translate(0 -159)" fill="none" stroke="#e53314" strokeWidth="4"/>
                    <path id="Path_24874" data-name="Path 24874" d="M-17275-18823.2s10.6-22.611,23.859,0c5.748-7.234,11.863-17.23,22.77,0,6.264-8.561,10.674-16.379,22.754,0,3.238-4.918,10.586-19.617,22.541,0,4.359-6.537,9.715-18.371,22.293,0,1.992-3.049,11.2-19.73,22.656,0" transform="translate(45 -127)" fill="none" stroke="#004393" strokeWidth="4"/>
                </g>
            </svg>
          </>
    )
}
export default SmallLineAnimations