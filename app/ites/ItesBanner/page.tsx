'use client'
import React, { FC, ReactElement} from 'react';
import Image from 'next/image';
import itesbanner from '../../../public/assets/images/ites-banner.png';
import { MultiPolygonIcn, SmallStarDarkIcn, SmallStrokeStarIcn, StarDarkIcn } from '@/components/icons/CommonIcons/page';
import LongLineAnimations from '@/components/LineDrawAnimations/LongLineAnimations/page';
import BannerLineAnimations from '@/components/LineDrawAnimations/BannerLineAnimations/page';

const ItesBanner: FC = (): ReactElement => {
    return(
    <div className='pb-6 pt-32 md:pt-40 lg:pb-10'>
        <BannerLineAnimations className='absolute left-0 right-0 w-full opacity-60'/>
        <div className='container mx-auto px-4 relative pb-10 lg:flex'>
            <SmallStrokeStarIcn className='animate-spin-slow absolute top-0 right-5 lg:left-4'/>
            <div className='pb-8 relative md:pb-10 lg:self-end lg:w-2/5'>
                <h1 className='text-3xl font-bold text-black font-Montserrat md:text-5xl lg:text-6xl 2xl:text-8xl'>ITES</h1>
                <h4 className='text-xl text-black font-Montserrat font-bold md:text-2xl'>(Information Technology Enabled Services)</h4>
                <p className='text-lg font-Nunito text-theme-grey pt-5 md:text-2xl lg:pt-10'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar.</p>
                <MultiPolygonIcn className='animate-bounce-slow w-10 h-10 mt-2 absolute right-0 bottom-0 lg:w-14 lg:h-14 md:-bottom-5'/>
            </div>
            <div className='relative mt-7 lg:mt-0 lg:w-3/5 lg:pl-16 '>
                <StarDarkIcn className='animate-spin-slow absolute right-1/2 -top-9 -z-1 md:right-40'/>
                <SmallStarDarkIcn className='animate-spin-slow absolute left-4 -bottom-4 md:-top-12 -z-1 lg:left-2/4'/>
                <Image src={itesbanner} width="950" height="649" alt="Printing" className='relative'/>
            </div>
            <LongLineAnimations className='absolute right-2 -bottom-5 w-80 h-auto md:w-auto xl:-bottom-10'/>
        </div>
   </div>
    )
}
export default ItesBanner;