'use client'
import React, { FC, ReactElement} from 'react';
import Image from 'next/image';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import {MultiPolygonIcn, StarDarkBlueIcn, StarDarkIcn, StarDarkRedIcn, StarLineIcn } from '@/components/icons/CommonIcons/page';
import omrscanning from './../../../public/assets/images/omr-scanning.png';
import cbtportal from './../../../public/assets/images/cbt-portal.png';
import interviewsystem from './../../../public/assets/images/interview-system.png';
import digitalassesment from './../../../public/assets/images/digital-assesment.png';
import objectiontrackersystem from './../../../public/assets/images/objection-tracker-system.png';

const ItesProducts: FC = (): ReactElement => {
   

    return(
        <div className='container mx-auto px-4 pt-8 pb-24 md:pb-8 xl:py-24'>
        <div className='self-end relative z-10 lg:w-2/3'>
            <SmallLineAnimations className='mb-4 md:mb-8'/>
            <h1 className='text-3xl font-bold text-black font-Montserrat md:text-5xl lg:text-7xl'>OUR EXCEPTIONAL <br/>PRODUCT</h1>
        </div>
        <div className='relative mt-2 grid columns-1 gap-y-12 md:gap-y-52'>
            <StarLineIcn className='animate-spin-slow w-40 h-40 absolute -bottom-36 -z-1 right-10 overflow-hidden xl:-bottom-56 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80'/>
            <StarLineIcn className='animate-spin-slow w-40 h-40 absolute right-10 -z-1 overflow-hidden -top-10 xl:-top-40 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80'/>
            <StarDarkRedIcn className='animate-spin-slow absolute left-0 -z-1 top-0 md:left-10 md:top-1/7'/>
            <div className='flex gap-8 w-50 mt-10 flex-col md:mt-44 md:flex-row md:gap-16'>
                <div className='flex items-center w-full relative md:w-1/2'>
                    <MultiPolygonIcn className='animate-bounce-slow absolute w-3/4 h-3/4 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:w-450 2xl:h-550'/>
                    <Image src={omrscanning} alt="" className='max-w-1/2 relative z-1 md:max-w-full'/>
                </div>
                <div className='flex justify-center flex-col w-full md:w-1/2'>
                    <h4 className='text-2xl text-black font-Montserrat font-bold mb-2 md:mb-7 md:text-4xl'>OMR Scanning</h4>
                    <p className='text-lg text-theme-grey font-Nunito md:2xl'>OMR (Optical Mark Recognition) scanning in ITES (Information Technology Enabled Services) refers to the use of technology to scan and process optical marks made on paper forms, such as multiple-choice exams, surveys, or evaluation sheets. The OMR scanning process uses specialized software and hardware to accurately read and interpret the marks made by candidates, transforming them into digital data that can be analyzed and processed.</p>
                </div>
            </div>
            <div className='flex gap-8 w-50 flex-col relative md:flex-row md:gap-16'>
                <StarDarkIcn className='animate-spin-slow absolute let-0 -z-1 -top-12 md:-top-32 lg:-top-40 xl:-top-52 2xl:-top-80 md:right-10'/>
                <div className='flex items-center w-full relative order-1 md:w-1/2 md:order-2'>
                    <MultiPolygonIcn className='animate-bounce-slow absolute -right-0 w-3/4 h-3/4 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:w-450 2xl:h-550'/>
                    <Image src={cbtportal} className='relative' alt=""/>
                </div>
                <div className='flex justify-center flex-col w-full order-2 md:w-1/2 md:order-1'>
                    <h4 className='text-2xl text-black font-Montserrat font-bold mb-2 md:mb-7 md:text-4xl'>CBT Portal</h4>
                    <p className='text-lg text-theme-grey font-Nunito md:text-2xl'>CBT (Computer Based Testing) Portal in ITES (Information Technology Enabled Services) refers to an online platform used to administer and manage computer-based tests and assessments. A CBT Portal provides a secure and controlled environment for candidates to take exams, typically in areas such as certification, licensure, or admission to educational programs.</p>
                </div>
            </div>
            <div className='flex gap-8 w-50 flex-col relative md:flex-row md:gap-16'>
                <StarDarkBlueIcn className='animate-spin-slow absolute -z-1 w-16 h-16 right-6 -top-12 lg:-right-0 lg:w-24 lg:h-24 md:-top-10 lg:-top-12 xl:right-36'/>
                <div className='flex items-center justify-center w-full relative md:w-1/2'>
                    <MultiPolygonIcn className='animate-bounce-slow absolute w-3/4 h-4/5 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:w-450 2xl:h-550'/>
                    <Image src={interviewsystem} className='relative' alt="" />
                </div>
                <div className='flex justify-center flex-col w-full md:w-1/2'>
                    <h4 className='text-3xl text-black font-Montserrat font-bold mb-2 md:mb-7 md:text-4xl'>Interview System</h4>
                    <p className='text-lg text-theme-grey font-Nunito md:text-2xl'>Interview System in ITES (Information Technology Enabled Services) refers to the use of technology and digital tools to conduct job interviews. This type of system is designed to streamline the interview process, making it more efficient and convenient for both the interviewer and the candidate.</p>
                </div>
            </div>
            <div className='flex gap-8 w-50 flex-col md:flex-row md:gap-16'>
                <div className='flex items-center justify-center w-full order-1 relative md:w-1/2 md:order-2'>
                    <MultiPolygonIcn className='animate-bounce-slow absolute w-3/4 h-4/5 md:w-80 md:h-80 xl:w-96 xl:h-full 2xl:w-450 2xl:h-550'/>
                    <Image src={digitalassesment} className='relative' alt="" />
                </div>
                <div className='flex justify-center flex-col order-2 w-full md:w-1/2 md:order-1'>
                    <h4 className='text-3xl text-black font-Montserrat font-bold mb-2 md:mb-7 md:text-4xl'>Digital Assesment</h4>
                    <p className='text-lg text-theme-grey font-Nunito md:text-2xl'>Digital Assessment refers to the use of technology and digital tools to assess and evaluate students' knowledge, skills, and abilities. This type of assessment allows for the use of digital devices, such as computers or tablets, to present questions, receive answers, and provide immediate feedback. Digital assessments can take many forms, including multiple-choice tests, short answer questions, and interactive simulations.</p>
                </div>
            </div>
            <div className='flex gap-8 w-50 flex-col md:flex-row md:gap-16'>
                <div className='flex items-center w-full relative md:w-1/2'>
                    <MultiPolygonIcn className='animate-bounce-slow absolute right-12 w-3/4 h-auto md:right-24 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:w- 2xl:h-600'/>
                    <Image src={objectiontrackersystem} className='relative' alt="" />
                </div>
                <div className='flex justify-center flex-col w-full md:w-1/2'>
                    <h4 className='text-2xl text-black font-Montserrat font-bold mb-2 md:mb-7 md:text-4xl'>OBJECTION TRACKER SYSTEM</h4>
                    <p className='text-lg text-theme-grey font-Nunito md:text-2xl'>An Objection Tracker System is a software solution that helps businesses and organizations track and manage objections raised by customers, clients, or stakeholders. It provides a centralized platform to log and manage objections, allowing teams to collaborate, prioritize, and resolve objections efficiently. The system can also provide insight into patterns and trends in objections, helping organizations identify areas for improvement in their products, services, or processes.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ItesProducts;