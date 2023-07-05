'use client'
import React, { FC, ReactElement} from 'react';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import {CirclePlayIcn, StarDarkBlueIcn, StarDarkIcn, StarDarkRedIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';

const ExceptionalProducts: FC = (): ReactElement => {
    return(
        <div className='container mx-auto px-4 pt-8 pb-8 md:pb-8 xl:py-24'>
        <div className='self-end relative z-10 lg:w-2/3'>
            <SmallLineAnimations className='mb-8'/>
            <h1 className='text-3xl font-bold text-black font-Montserrat tracking-big-tighter-letter-spacing md:text-5xl lg:text-7xl'>OUR EXCEPTIONAL <br/>PRODUCT</h1>
        </div>
        <div className='relative'>
            <StarDarkIcn className='animate-spin-slow absolute left-0 top-0 -z-1 md:top-20 xl:-left-12 xl:top-44'/>
            <StarLineIcn className='animate-spin-slow w-40 h-40 absolute right-10 -z-1 -top-20 xl:-top-40 xl:w-80 xl:h-80'/>
            <div className='flex items-center justify-center aspect-video-ratio mt-12 relative before:h-full before:w-full before:absolute before:rounded-xl before:top-0 before:left-0 before:backdrop-blur'>
                <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/TNhaISOUy6Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <CirclePlayIcn className='absolute w-20 lg:w-auto cursor-pointer'/>
            </div>
            <div className='mt-14 text-center w-full mx-auto relative lg:w-10/12'>
                <StarDarkRedIcn className='animate-spin-slow absolute left-0 -top-10 -z-1 lg:-left-14 lg:top-20'/>
                <StarDarkBlueIcn className='animate-spin-slow absolute right-4 w-10 h-10 -bottom-10 -z-1 lg:h-28 lg:w-28 lg:-bottom-28 lg:-right-20'/>
                <StarLineIcn className='animate-spin-slow w-40 h-40 opacity-25 absolute -bottom-10 left-0 md:left-0 lg:-left-16 xl:-bottom-24 xl:-left-40 xl:w-80 xl:h-80'/>
                <p className='text-lg font-Nunito text-theme-grey relative md:text-2xl lg:pt-10'>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum.Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum.</p>
                <p className='text-lg font-Nunito text-theme-grey mt-8 relative md:text-2xl lg:pt-10'>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum.Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex eget elementum.</p>
            </div>
        </div>
    </div>
    )
}
export default ExceptionalProducts;