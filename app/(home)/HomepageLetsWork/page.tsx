'use client'
import React, { FC, ReactElement} from 'react';
import ContactForm from '@/components/ContactForm/page';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import { StarDarkBlueIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';

const HomepageLetsWork: FC = (): ReactElement => {
    return(
        <div className='bg-white pt-6 pb-6 md:pt-20 lg:pt-28 lg:pb-10'>
            <div className='container mx-auto px-4'>
                <div className='lg:flex -mx-4'>
                    <div className='w-full px-4 lg:w-1/2'>
                        <div className='mr-0 lg:mr-14'>
                            <div className='md:flex'>
                                <div className='font-Montserrat font-bold text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl'>Let's Work Together</div>
                                <div className='mt-3 md:ml-2'><SmallLineAnimations/></div>
                            </div>
                            <div className='font-Montserrat font-bold mt-7 lg:mt-12 text-2xl lg:text-4xl 2xl:text-5xl'>Lorem ipsum dolor sit, amet consetetur sadipsc.</div>
                            <div className='text-theme-grey text-lg font-Nunito mt-7 md:text-xl lg:text-2xl '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
                            <div className='text-center mt-4'><StarLineIcn className='animate-spin-slow mx-auto w-28 h-28 lg:w-60 lg:h-60'/></div>
                        </div>
                    </div>
                    <div className='w-full px-4 mt-5 lg:w-1/2 relative z-10 md:mt-7 lg:mt-0'>
                      <ContactForm className="bg-theme-Fantasy relative z-10"/>
                      <div className='-mt-8'><StarDarkBlueIcn className='animate-spin-slow mx-auto w-24 h-24'/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HomepageLetsWork