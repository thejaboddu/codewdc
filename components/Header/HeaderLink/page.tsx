import React, { FC, ReactElement } from 'react';
import { usePathname } from "next/navigation";
import NextLink from 'next/link'
import { HeadHomeLinksInterface, HeadLinksInterface } from '@/constants/HeadLinkContants';
import { GET_Home } from '@/constants/getHome';



const HeaderLink: FC<{ handleScroll: any }> = ({ handleScroll }): ReactElement => {
    const router: any = usePathname()
    const pathname = usePathname();
    return (
        <ul className='top-navbar items-center mx-auto lg:flex xl:space-x-8 2xl:space-x-12'>
            {GET_Home.includes(router) ? <>
                {HeadHomeLinksInterface.map((item: HeadLinksInterface) => (
                    <li key={item.title} className="md:px-2 md:py-2 sm:px-2 sm:py-2 py-2 navbar-links">
                        <NextLink onClick={handleScroll} className={`${item.link === pathname ? 'active' : ''} text-theme-grey text-base uppercase transition font-semibold lg:text-xs xl:text-sm 2xl:text-base`} href={item.link}>{item.title}</NextLink>
                    </li>
                ))}</> : <>  {HeadLinksInterface.map((item: HeadLinksInterface) => (
                    <li key={item.title} className="md:px-2 md:py-2 sm:px-2 sm:py-2 py-2">
                        <NextLink className={`${item.link === pathname ? 'active' : ''} text-theme-grey text-base uppercase transition font-semibold lg:text-xs xl:text-sm 2xl:text-base`} href={item.link}>{item.title}</NextLink>
                    </li>
                ))}</>}
        </ul>

    )
}
export default HeaderLink;