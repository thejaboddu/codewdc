'use client'
import React, { FC, ReactElement} from 'react';
import { OurGoalsListInterface } from '@/constants/OurGoalsList';
import { StartRedIcon } from '@/components/icons/CommonIcons/page';

const HomepageOurgoals: FC = (): ReactElement => {
    return(
    <div className='ourGolas'>
        <div className='container mx-auto px-4'>
            <div className="w-full md:py-16">
                <div className='lg:flex'>
                    <div className="flex mb-4 self-center lg:w-3/12 lg:block lg:mb-0">
                        <div className='text-3xl font-bold font-Montserrat md:text-5xl'>OUR GOALS</div>
                    </div>
                    <div className="border-theme-lightgrey lg:pl-5 lg:ml-6 lg:w-9/12 lg:border-l-2 lg:border-secondary">
                        <ul>
                            {OurGoalsListInterface && OurGoalsListInterface.map((repo,index)=>(
                                <li key={repo.id} className="text-xl flex my-6 font-Montserrat font-semibold md:my-14 md:text-2xl md:!leading-10 lg:text-3xl"><span className='mr-5'><StartRedIcon className='w-5 h-5 md:w-auto md:h-auto'/></span>{repo.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default HomepageOurgoals