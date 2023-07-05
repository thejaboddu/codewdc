'use client'
import { ReactElement } from 'react'
import NextLink from 'next/link'
import { FooterLinksInterface } from '@/constants/FooterLinkContants'
import FooterLogo from '../icons/FooterLogo'
import { FacebookIcon,TwitterIcon,PinterestIcon,InstagramIcon,LinkedinIcon } from '../icons/CommonIcons/page'

const Footer = (): ReactElement => (
  <footer className='relative pt-68 z-10 before:absolute before:-z-10 before:bg-blue-line before:bg-no-repeat before:bg-cover before:w-full before:h-full before:top-0 before:left-0 before:right-0'>
    <div className='bg-theme-Fantasy pt-24'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-row flex-wrap justify-items-center'>
                <div className='w-full md:w-1/3'>
                    <NextLink href="/"><FooterLogo /></NextLink>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className='text-base text-theme-red font-bold mb-4 mt-10 md:text-lg lg:mt-0'>Menu</div>
                        <ul className="">
                            {FooterLinksInterface.map(({ title, url }) => (
                            <li key={title} className='mb-2 lg:inline-block lg:w-2/4 md:mb-3'>
                                <NextLink href={url} className='md:text-xl text-xl text-theme-grey font-Nunito transition-all hover:text-secondary'>{title}</NextLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                <div className="w-full lg:w-1/3"> 
                <div className='text-base text-theme-red font-bold mb-4 lg:mt-0 mt-10 md:text-lg'>Follow us on</div>
                    <ul className='space-x-4'>
                        <li className="inline-block"><NextLink href='#'><FacebookIcon/></NextLink></li>
                        <li className="inline-block"><NextLink href='#'><TwitterIcon /></NextLink></li>
                        <li className="inline-block"><NextLink href='#'><PinterestIcon /></NextLink></li>
                        <li className="inline-block"><NextLink href='#'><InstagramIcon/></NextLink></li>
                        <li className="inline-block"><NextLink href='#'><LinkedinIcon/></NextLink></li>
                    </ul>
                </div>
            </div> 
            <div className='bottom-footer text-center mt-10 pt-5 pb-4 border-t border-darkgray'>
                Copyright© Data Processing Forms Pvt Ltd. All Rights Reserved.
            </div>
        </div>
    </div>
  </footer>

  
)

export default Footer