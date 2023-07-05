'use client'
import React, { FC, ReactElement, useState } from 'react';
import Image from 'next/image';
import { SecurityFeaturesInterface } from '@/constants/SecurityFeatures';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import { MultiPolygonIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';

const HomepageSecurityFeatures: FC = (): ReactElement => {
    const [activeSecurity, setactiveSecurity] = useState<number>();

    const Changeactivetab = (index:number) => {
        setactiveSecurity(index)
    }

    return (
        <div id='securityFeatures' className='bg-white pt-10 pb-8 relative z-10 md:pt-20 lg:pt-28 lg:pb-56'>
            <div className='absolute left-14 -z-10 top-1/2 opacity-0 lg:opacity-100'><StarLineIcn className='animate-spin-slow w-32 h-32 xl:w-60 xl:h-60'/></div>
            <div className='container mx-auto px-4'>
                <div className='justify-between items-center flex md:pb-7 lg:pb-12'>
                    <div className='place-self-end xl:w-1/2'>
                       <div className='mb-2'><SmallLineAnimations/></div>
                        <div className='font-Montserrat font-bold text-black text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl'>Security Features</div>
                    </div>
                    <div className='absolute top-8 right-5 lg:relative'><MultiPolygonIcn className='animate-bounce-slow w-20 h-20 lg:w-40 lg:h-40'/></div>
                </div>
                <div className='flex'>
                    <div className='relative w-1/4 px-4 hidden lg:block'>
                        <div className='sticky top-36 pl-2.5'>
                            {SecurityFeaturesInterface && SecurityFeaturesInterface.length > 0 && SecurityFeaturesInterface.map((repo, index) => (
                                <div key={index}  className={`absolute left-0 right-6 -rotate-13 transition duration-300 ease-in-out ${activeSecurity === repo.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`} ><Image src={repo.url} alt={repo.title} width="290" height='369' /></div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full md:px-4 lg:w-3/4'>
                        {SecurityFeaturesInterface && SecurityFeaturesInterface.length > 0 && SecurityFeaturesInterface.map((repo, index) => (
                                <div key={index} className='items-center border-b-2 py-5 lg:py-4 lg:flex'>
                                    <div className='w-full text-2xl font-Montserrat font-bold mb-4 lg:mb-0 lg:text-3xl lg:w-1/3' onMouseLeave={() => Changeactivetab(0)} onMouseEnter={() => Changeactivetab(repo.id)}>{repo.title}</div>
                                    <div className={`${activeSecurity === repo.id ? 'lg:opacity-100':'lg:opacity-0' } w-full transition-opacity text-theme-grey text-lg font-Nunito lg:text-xl lg:w-2/3`}>{repo.desc}</div>
                                </div>
                            
                        ))}
                    </div>
                </div>

            </div>


        </div>
    )
}
export default HomepageSecurityFeatures