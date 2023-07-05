'use client'
import React, { FC, ReactElement} from 'react';
import { CertificatesImageInterface } from '@/constants/CertificatesImage';
import Image from 'next/image';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import { MultiPolygonIcn, StarDarkIcn, StarDarkRedIcn, StarLineIcn} from '@/components/icons/CommonIcons/page';

const HomepageCertificates: FC = (): ReactElement => {
    return(
        <div id='certificates' className='pt-10 pb-12 lg:pt-24'>
            <div className='container mx-auto px-4'>
                <div className='inline-block xl:flex'>
                    <div className='place-self-end xl:w-1/2'>
                        <SmallLineAnimations className='mb-4'/>
                        <div className='font-Montserrat font-bold text-black break-all text-3xl mb-5 md:mb-10 md:text-5xl lg:text-6xl 2xl:text-7xl'>CERTIFICATES WE <br/>ACHIEVED</div>
                        <div className='text-theme-grey text-lg font-Nunito md:text-2xl'>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui.</div>
                    </div>
                </div>
                <div className='relative space-y-10 mt-11 lg:justify-end justify-center lg:flex grid lg:space-x-10 lg:space-y-0'>
                   <div className='absolute right-14 -top-7 -z-10 lg:-top-16 xl:-top-32'><StarLineIcn className='animate-spin-slow w-32 h-32 xl:w-60 xl:h-60'/></div>
                   <div className='absolute left-16 top-28 -z-10'><StarDarkIcn className='animate-spin-slow w-24 h-24 lg:w-24 lg:h-24'/></div>
                   <div className='absolute left-1/2.5 bottom-12 -z-10 2xl:left-1/6'><StarDarkRedIcn className='animate-spin-slow w-16 h-16 lg:w-16 lg:h-16'/></div>
                   <div className='absolute left-2/5 top-2/5 -z-10'><MultiPolygonIcn className='animate-bounce-slow w-28 h-28 lg:w-28 lg:h-28'/></div>
                    {CertificatesImageInterface && CertificatesImageInterface.map((rep,index)=>(
                        <div key={index} className="w-full lg:w-1/4">
                        <Image src={rep.url} alt={rep.alt} width={rep.width} height={rep.height}/>
                        </div>
                    ))}                        
                </div>                
            </div>
        </div>
    )
}
export default HomepageCertificates