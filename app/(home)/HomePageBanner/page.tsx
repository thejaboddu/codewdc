'use client'
import BannerLineAnimations from '@/components/LineDrawAnimations/BannerLineAnimations/page';
import LongLineAnimations from '@/components/LineDrawAnimations/LongLineAnimations/page';
import { MultiPolygonIcn, SmallStarDarkIcn, SmallStrokeStarIcn, StarDarkIcn, StarDarkRedIcn } from '@/components/icons/CommonIcons/page';
import Image from 'next/image';
import React, { FC, ReactElement,useState, useEffect} from 'react';


const HomePageBanner: FC = (): ReactElement => {

    const [flag, toggleFlag] = useState(false);
    const [flagValue, toggleFlagValue] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            const flc = flag? false : true;
             toggleFlag(flc);
            switch(flagValue){
                case 0 : 
                         toggleFlagValue(1);
                         break;
                case 1 :
                    toggleFlagValue(2);
                    break;
                case 2 :
                        toggleFlagValue(0);
                        break;
                default : 
                    toggleFlagValue(0);
                    break;
            }
           }, 4000);
      }, [flag, flagValue]);
    
    
    return(
        <div className='relative pt-32 pb-12 lg:pb-32'>
           <BannerLineAnimations className='absolute left-0 right-0 w-full opacity-60'/>
           <div className='container mx-auto px-4'>
               <div className='relative pb-14 pt-14 md:pt-0'>
                   <SmallStrokeStarIcn className='absolute top-0 left-0 animate-spin-slow md:top-5'/>
                   <LongLineAnimations className='max-w-full absolute bottom-0 right-0'/>
                   <div className='md:flex'>
                        <div className='w-full self-end md:w-2/5'>
                            <div className='relative pb-3 md:pb-20'>
                                <div className='font-Montserrat font-bold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl'>We deliver Satisfaction, Quality & Service!</div>
                                <MultiPolygonIcn className='animate-bounce-slow w-10 h-10 lg:w-14 lg:h-14 mt-2 absolute right-0 -top-10 md:bottom-0 md:top-auto'/>
                            </div>
                        </div>
                        <div className='w-full relative pt-5 md:w-3/5'>
                            <SmallStarDarkIcn className='animate-spin-slow absolute right-1/2 top-0'/>
                            <StarDarkIcn className='animate-spin-slow absolute right-0 top-0'/>
                            <StarDarkRedIcn className='animate-spin-slow absolute right-0 top-1/2'/>
                            <div className='pieContainer text-center lg:hidden'>
                              <Image className='mx-auto' src='/assets/images/chart.png' alt='chart' width={500} height={500}/>
                            </div>
                            <div className="pieContainer relative hidden lg:flex">
                                <div className="pieBackground absolute rounded-full"/>
                                <div className='mainRounded'>
                                    <div className="absolute hold pieSlice1"><div className={`${flag? "bg-theme-blue" : "bg-theme-red"} pie absolute`}/></div>
                                    <div className="absolute hold pieSlice2">
                                            <div className='spaceScn absolute'/>
                                            <img className={`${flagValue === 0? "opacity-1" : "opacity-0"} pie absolute`} src='assets/images/about-data-house.jpg' alt=''/> 
                                            <img className={`${flagValue === 1? "opacity-1" : "opacity-0"} pie absolute`} src='assets/images/products2.png' alt=''/> 
                                            <img className={`${flagValue === 2? "opacity-1" : "opacity-0"} pie absolute`} src='assets/images/printer-machine.png' alt=''/>    
                                     </div>
                                    <div className="absolute hold pieSlice3"><div className={`${flag? "bg-theme-red" : "bg-theme-blue"} pie absolute`}/></div>
                                </div>
                                <div className='rondChangeContent absolute'>
                                     <div className='flex'>
                                            <div className={`${flagValue === 0? "opacity-1" : "opacity-0"} contentRound absolute`}>
                                                <div className='contentRoundTitle text-xl font-semibold text-theme-blue mb-2 2xl:text-2xl'>Printing1</div>
                                                <div className='contentRoundInfo font-Nunito text-lg theme-grey 2xl:text-xl'>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. enean enim sem, pharetra et magna sit amet, luctus aliquet nibh.</div>
                                            </div>
                                             <div className={`${flagValue === 1? "opacity-1" : "opacity-0"} contentRound absolute`}>
                                                <div className='contentRoundTitle text-xl font-semibold text-theme-blue mb-2 2xl:text-2xl'>Printing2</div>
                                                <div className='contentRoundInfo font-Nunito text-lg theme-grey 2xl:text-xl'>dignissim neque. enean enim sem, pharetra et  Duis mauris augue, efficitur eu arcu sit amet, posuere magna sit amet, luctus aliquet nibh.</div>
                                             </div> 
                                            <div className={`${flagValue === 2? "opacity-1" : "opacity-0"} contentRound absolute`}>
                                                <div className='contentRoundTitle text-xl font-semibold text-theme-blue mb-2 2xl:text-2xl'>Printing3</div>
                                                <div className='contentRoundInfo font-Nunito text-lg theme-grey 2xl:text-xl'> enean enim sem, pharetra et magna sit amet, Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque.luctus aliquet nibh.</div>
                                            </div>
                                      </div>
                                </div>
                                <div className="innerCircle">
                                    <div className="content bg-theme-blue"><Image src='/assets/images/dp-txt.svg' alt='dpf' width={170} height={130}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}
export default HomePageBanner