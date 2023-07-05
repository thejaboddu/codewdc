'use client'
import { FC, ReactElement,useState,useEffect } from 'react'
import NextLink from 'next/link'
import HeaderLink from './HeaderLink/page'
import MenuToogleButton from './MenuToogleButton/page'
import HeaderLogo from '../icons/HeaderLogo'
import RedButton from '../CommonButtons/RedButton/page'

const Header: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  //const { data: session }: any = useSession()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 250)
    })
    let url = window.location.hash;
    document.querySelectorAll('.navbar-links').forEach((items)=>{
     items.querySelector(`[href='${url}']`)?.classList.add("active");
    })
  }, [])
  
  //smooth scoll
 const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    console.log(targetId);
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    document.querySelectorAll('.navbar-links').forEach((items)=>{
      items.querySelector(`[href^='#']`)?.classList.remove("active");
     items.querySelector(`[href='#${targetId}']`)?.classList.add("active");
    })
};
  
  return (
    // <header className={`header py-6  w-fulltop-0 left-0 right-0 z-20 bg-theme-Fantasy`}>
    <header className={`header py-6 fixed w-full top-0 left-0 right-0 z-20 bg-theme-Fantasy ${scroll ? 'bg-theme-Fantasy shadow-sm' : 'bg-theme-Fantasy  shadow-none'}`}>
    <div className='container mx-auto px-4'>
      <div className='flex justify-between items-center'>
        <div className='navbar-brand pr-2'>
          <NextLink href="/"><HeaderLogo /></NextLink>
        </div>
        <div className={`collaps-menu w-full z-10 ${isOpen ? 'menuShow' : 'hideMenu'}`}>
          <div className='lg:hidden'>
            <MenuToogleButton onclick={toggleMenu} />
          </div>
          <div className='lg:flex'>
            <HeaderLink handleScroll={handleScroll} />
            <div className='nav-links items-center mt-3 lg:flex lg:mt-0'>
              <div className='mt-11 mb-3 lg:mr-2 lg:mt-0 lg:mb-0'><RedButton  btnLineLink='/contactus' btnLineText='CONTACT US' /></div>
              
            </div>
          </div>
        </div>
        <div className='lg:hidden flex items-center'>
          <MenuToogleButton onclick={toggleMenu} />
        </div>
      </div>
    </div>
  </header>
  )
}


export default Header