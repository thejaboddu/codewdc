'use client'
import React, { FC, ReactElement} from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PeopleTalkListInterface } from '@/constants/PeopleTalkList';
import { StarDarkRedIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';

const HomepagePeopleTalk: FC = (): ReactElement => {
    const settings = {
        arrows: true, 
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode:false,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
          ]
     };
    return(
        <div className='bg-theme-Fantasy pt-16 pb-48 w-full overflow-hidden lg:pb-48 lg:pt-28'>
            <div className='container mx-auto relative z-10 pb-16'>
              <div className='md:flex justify-center items-center mb-10 text-center'>
                <div className='font-Montserrat font-bold text-black text-center text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl'>People talk about us</div>
                <SmallLineAnimations className='mt-4 mx-auto md:mt-2 md:ml-4 '/>
              </div>
              <div className='absolute right-14 -bottom-4 -z-10 lg:-bottom-16 xl:-bottom-32'><StarLineIcn className='animate-spin-slow w-32 h-32 xl:w-60 xl:h-60'/></div>
              <div className='absolute left-0 -bottom-5 -z-10'><StarDarkRedIcn className='animate-spin-slow w-16 h-16 lg:w-16 lg:h-16'/></div>
            </div>
            <div className='pt-10'>
              <Slider {...settings} className="people_slider">
                  {PeopleTalkListInterface && PeopleTalkListInterface.map((repo,index)=>(
                      <div key={index} className="text-center">
                          <div className="bg-white rounded-2xl mx-4 px-6 box_shadow_people lg:mx-8">
                              <div className='flex justify-center'>
                                  <div className='-mt-20 mb-8 shadow-xl rounded-full'>
                                    <Image src={repo.img} alt={repo.name} className="text-center border-2 border-white rounded-full" width="170" height="170"/>
                                  </div>
                              </div>
                              <div className='text-base font-normal text-theme-grey pb-8 lg:text-xl'>{repo.info}</div>
                              <hr/>
                              <div className='text-theme-red font-semibold text-xl mt-6 lg:text-3xl'>{repo.name}</div>
                              <div className='text-theme-black font-Nunito font-semibold text-lg mt-2 pb-5 lg:text-2xl'>{repo.location}</div>
                          </div>
                      </div>
                  ))}                    
              </Slider>
            </div>

        </div>
        
    )
}
export default HomepagePeopleTalk