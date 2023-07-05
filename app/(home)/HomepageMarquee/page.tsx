'use client'
import React, { FC, ReactElement} from 'react';

const HomepageMarquee: FC<{className?: string}> = ({className}): ReactElement => {
    return(
        <div className= {`${className} relative z-10 pt-16 before:absolute before:w-full before:h-0.5 before:bg-line-pattern before:-z-10 after:absolute after:w-full after:h-0.5 after:bg-line-pattern after:-z-10 `}>
            <div className="overflow-x-hidden bg-theme-blue origin-bottom -rotate-2">
                <div className="py-10 animate-marquee whitespace-nowrap font-Montserrat font-bold text-theme-drakewhite">
                    <div className="text-2xl flex mx-auto xl:text-4xl">
                        <div className='w-auto px-10'> DUMMY TEXT REGARDING WEBSITE SCROLLING <span className='inline-block align-middle px-10'><img src="/assets/images/startdrakewhiteimg.png"
                            alt="image"/></span></div>
                        <div className='w-auto px-10'> DUMMY TEXT REGARDING WEBSITE SCROLLING <span className='inline-block align-middle px-10'><img src="/assets/images/startdrakewhiteimg.png"
                            alt="image"/></span></div>
                        <div className='w-auto px-10'> DUMMY TEXT REGARDING WEBSITE SCROLLING <span className='inline-block align-middle px-10'><img src="/assets/images/startdrakewhiteimg.png"
                            alt="image"/></span></div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default HomepageMarquee