'use client'
import { MultiPolygonIcn, StarLineWhiteIcn } from '@/components/icons/CommonIcons/page';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import React, { FC, ReactElement} from 'react';

const HomepageWereIn: FC = (): ReactElement => {
    return(
        <div className='relative pt-14 pb-20 bg-light-scratch bg-white bg-no-repeat bg-cover lg:pb-14 lg:pt-28'>
            <div className='absolute -left-20 bottom-0 lg:top-1/3'><MultiPolygonIcn className='animate-bounce-slow w-28 h-28 lg:w-40 lg:h-40'/></div>
            <div className='container mx-auto'>
                <div className='relative pb-16 pt-10 lg:pt-0'>
                    <div className='absolute right-10 -top-14 lg:-top-56'><StarLineWhiteIcn className='animate-spin-slow w-28 h-28 lg:w-60 lg:h-60'/></div>
                    <div className='max-w-6xl mx-auto px-4 xl:w-4/5 2xl:w-3/5'>
                        <div className='font-Montserrat text-3xl text-black break-all md:text-6xl lg:text-7xl 2xl:text-8xl'>WE'RE IN</div>
                        <div className='font-Montserrat text-3xl  text-black py-4 break-all lg:py-8 2xl:py-10 md:text-6xl lg:text-7xl 2xl:text-8xl'>BUSINESS <span className='text-theme-red'>TO HEAL</span></div>
                        <div className='font-Montserrat text-3xl  text-black text-start break-all md:text-6xl lg:text-7xl 2xl:text-8xl xl:text-end'>OUR PLANET</div>
                    </div>
                    <div className='absolute right-10 bottom-0'><SmallLineAnimations/></div>
                </div>
            </div>
        </div>
    )
}
export default HomepageWereIn