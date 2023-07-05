'use client'
import React, { FC, ReactElement} from 'react';
import Image from 'next/image';
import erbbanner from '../../../public/assets/images/earlyr-reader-book.png';
import { MultiPolygonIcn, SmallStarDarkIcn, SmallStrokeStarIcn, StarDarkIcn } from '@/components/icons/CommonIcons/page';
import LongLineAnimations from '@/components/LineDrawAnimations/LongLineAnimations/page';
import BannerLineAnimations from '@/components/LineDrawAnimations/BannerLineAnimations/page';

const EarlyREaderBook: FC = (): ReactElement => {
    return(
    <div className='pt-32 pb-6 md:pt-40 lg:pb-10'>
        <BannerLineAnimations className='absolute left-0 right-0 w-full opacity-60'/>
        <div className='container mx-auto px-4 relative pb-10 lg:flex'>
            <SmallStrokeStarIcn className='animate-spin-slow absolute top-0 right-5 lg:left-4'/>
            <div className='pb-8 relative md:pb-10 lg:self-end lg:w-2/5'>
                <h1 className='text-3xl font-bold text-black font-Montserrat tracking-bigger-tighter-letter-spacing pr-14 md:pr-0 md:text-5xl lg:text-6xl 2xl:text-8xl'>Early Reader Book</h1>
                <p className='text-lg font-Nunito text-theme-grey mt-2 md:2xl'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar.</p>
                <MultiPolygonIcn className='animate-bounce-slow w-10 h-10 mt-2 absolute right-0 bottom-0 lg:w-14 lg:h-14 md:-bottom-5'/>
            </div>
            <div className='relative mt-7 z-10 lg:mt-0 lg:w-3/5 lg:pl-16'>
                <StarDarkIcn className='animate-spin-slow absolute right-1/2 -top-9 -z-1 md:right-40'/>
                <SmallStarDarkIcn className='animate-spin-slow absolute left-4 -z-1 -bottom-4 md:-top-12 lg:left-2/4'/>
                <Image src={erbbanner} width="950" height="649" alt="Printing" className='relative rounded-2xl'/>
            </div>
            <LongLineAnimations className='absolute right-2 -bottom-5 w-80 h-auto md:w-auto xl:-bottom-10'/>
        </div>
   </div>
    )
}
export default EarlyREaderBook;