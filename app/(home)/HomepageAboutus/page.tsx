'use client'
import React, { FC, ReactElement} from 'react';
import Image from 'next/image';
import aboutimage from '../../../public/assets/images/about-data-house.jpg';
import { BlueFillPollygonIcn, RedFillPollygonIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';

const HomepageAboutus: FC = (): ReactElement => {
    return(
        <div className='mt-12 relative z-10 md:pt-40'>
            <div className='absolute right-16 top-10 -z-10'><StarLineIcn className='animate-spin-slow w-32 h-32 lg:w-60 lg:h-60'/></div>
            <div className='container mx-auto px-4'>
                <div className='lg:flex -mx-4'>
                    <div className='place-self-end px-4 mb-8 lg:mb-0 lg:w-5/12'>
                        <div className='flex mb-5 md:mb-10'>
                            <div className='font-Montserrat font-bold mr-6 whitespace-nowrap text-black text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl'>About us</div>
                            <div className='self-center'>
                              <SmallLineAnimations className='w-3/4 md:w-full'/>
                            </div>
                        </div>
                        <div className='text-theme-grey text-lg font-Nunito md:text-2xl'>Data Processing Forms Pvt. Ltd., a security printers, D.P.F. Pvt. Ltd. for brevity, is no beginner to the field of manufacturing of business forms, we’ve had over five decade of experience as manufacturers of business forms for computers.</div>
                        <div className='text-theme-grey text-lg font-Nunito mt-3 md:mt-7 md:text-2xl'>We are the most comprehensive & complete manufacturing setup for business forms under one roof in India. Data Processing Forms Pvt. Ltd. enjoys leadership in the area of product quality and services to their clients, which includes blue-chip corporate, government organizations, educational institutes, banks, insurances & finance companies, pharmaceuticals companies telecommunication companies, and various state governments departments and corporation.</div>
                    </div>
                    <div className='px-4 text-center lg:text-right lg:w-7/12'>
                        <div className='inline-flex relative z-10 pb-10 pl-6 md:pl-20 md:pb-20'>
                           <div className='absolute left-0 top-1/3 -z-10'><RedFillPollygonIcn className='animate-bounce-slow w-24 h-24 md:w-60 md:h-60'/></div>
                           <div className='absolute right-16 bottom-0 -z-10'><BlueFillPollygonIcn className='animate-bounce-slow w-24 h-24 md:w-60 md:h-60'/></div>
                           <Image src={aboutimage} alt='About us' width="763" height='686'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomepageAboutus