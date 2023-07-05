'use client'
import React, { FC, ReactElement} from 'react';
import Image from 'next/image';
import { ProductsListInterface } from '@/constants/ProductsList';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import {StarDarkIcn, StarDarkRedIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';

const PrintingProducts: FC = (): ReactElement => {
   

    return(
        <div className='container mx-auto px-4 pt-8 pb-24 md:pb-8 xl:py-24'>
        <div className='self-end relative z-10 lg:w-2/3'>
            <SmallLineAnimations className='mb-4 md:mb-8'/>
            <h1 className='text-3xl font-bold text-black font-Montserrat tracking-big-tighter-letter-spacing md:text-5xl lg:text-7xl'>WE CREATE EXCEPTIONAL PRODUCTS</h1>
            <p className='text-lg font-Nunito text-theme-grey pt-5 md:pt-10 md:text-2xl lg:w-3/4'>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo.</p>
        </div>
        <div className='relative'>
            <StarLineIcn className='animate-spin-slow w-40 h-40 absolute -bottom-36 -z-1 right-10 xl:-bottom-56 xl:right-10 xl:w-80 xl:h-80'/>
            <StarDarkIcn className='animate-spin-slow absolute left-0 top-0 -z-1 md:top-20 xl:-left-12 xl:top-44'/>
            <StarLineIcn className='animate-spin-slow w-40 h-40 absolute right-10 -z-1 -top-10 xl:-top-40 xl:w-80 xl:h-80'/>
            <StarDarkRedIcn className='animate-spin-slow absolute left-0 -bottom-10 -z-1 lg:bottom-36 lg:-left-12'/>
            <div className='grid grid-cols-1 pt-14 gap-4 md:gap-10 md:grid-cols-2 md:pt-28 lg:grid-cols-3'>
                {ProductsListInterface && ProductsListInterface.length > 0 && ProductsListInterface.map((repo,index)=>(
                    <div key={index} className='bg-white rounded-md relative'>
                        <Image src={repo.imgurl} width="546" height="382" alt={repo.title} className="self-end"/>
                        <div className='opacity-0 duration-300 absolute inset-0 z-10 flex justify-center items-end rounded hover:bg-box-hover-gredient hover:opacity-100'>
                            <h4 className='text-center text-lg font-Montserrat font-bold text-white mb-7 md:text-3xl'>{repo.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
export default PrintingProducts;