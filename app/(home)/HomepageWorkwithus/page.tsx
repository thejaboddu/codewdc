'use client'
import React, { FC, ReactElement} from 'react';
import WhiteButton from '@/components/CommonButtons/WhiteButton/page';

const HomepageWorkwithus: FC = (): ReactElement => {
    return(
        <div className='py-16 bg-work-with-us bg-no-repeat bg-cover bg-center lg:pt-32 lg:pb-20'  style={{ backgroundImage: 'url("/assets/images/bg-work-with-us.png")' }}>
             <div className='container mx-auto px-4 flex flex-col items-center'>
                <div className='max-w-7xl mx-auto font-Montserrat font-semibold text-center text-white mb-10 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl'>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendi sse ornare ante sit amet arcu.</div>
                <WhiteButton btnLineLink='/' btnLineText='WORK WITH US'/>
            </div>
        </div>
    )
}
export default HomepageWorkwithus