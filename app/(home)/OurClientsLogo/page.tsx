'use client'
import React, { FC, ReactElement} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OurClientsLogoImageInterface } from '@/constants/OurClientsLogoImage';
import Image from 'next/image';
import { StarGreyIcn } from '@/components/icons/CommonIcons/page';

const OurClientsLogo: FC = (): ReactElement => {
    const settings = {
        arrows: false, 
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                },
              },
          ],
     }
     

    return(
        <div className="clientsLogo relative before:absolute before:w-full before:h-0.5 before:bg-line-pattern after:absolute after:w-full after:h-0.5 after:bg-line-pattern after:-z-10">
            <div className="origin-bottom -rotate-2">
                <div className="flex">
                <div className="bg-theme-blue w-2/5 lg:w-1/5">
                    <div className="text-base text-theme-Fantasy font-bold py-12 px-2 text-center md:text-lg xl:text-2xl 2xl:text-3xl ">OUR CLIENTS:</div>
                </div>
                <div className="bg-[#E7EAEC] w-3/5	lg:w-4/5">
                    <Slider {...settings}>
                        {OurClientsLogoImageInterface && OurClientsLogoImageInterface.map((repo,index)=>(
                            <div key={index} className="p-3">
                                <div className="flex items-center text-base text-center">
                                    <Image src={repo.url} alt={repo.alt} width={repo.width} height={repo.height}/>
                                    <StarGreyIcn className='ml-2 max-w-full min-w-11 min-h-11 lg:min-w-24 lg:min-h-24'/>
                                </div>
                            </div>
                        ))}                    
                    </Slider>
                   
                </div>
                </div>
            </div>
        </div>
    )
}
export default OurClientsLogo;