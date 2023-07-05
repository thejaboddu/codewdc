'use client'
import React, { FC, ReactElement, useState} from 'react';
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page';
import {StarLineIcn } from '@/components/icons/CommonIcons/page';
import { MachinesListInterface } from '@/constants/MachinesList';
import Pagination from '@/components/Pagination/page';
import { Paginate } from '@/constants/Paginate';

const ManufacturingSetup: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
        const pageSize = 8;
        const paginatedPosts = Paginate(MachinesListInterface, currentPage, pageSize);
        const onPageChange = (page: React.SetStateAction<number>) => {
            setCurrentPage(page);
        };
    return(
        <>
        <div className='container mx-auto px-4 pt-8 pb-8 md:pb-8 xl:py-24'>
        <div className='self-end relative z-10 lg:w-1/2'>
            <SmallLineAnimations className='mb-4 md:mb-8'/>
            <h1 className='text-3xl font-bold text-black font-Montserrat tracking-big-tighter-letter-spacing md:text-5xl lg:text-7xl'>THE MANUFACTURING <br />SET UP</h1>
            <p className='text-lg font-Nunito text-theme-grey relative pt-5 md:pt-10 md:text-2xl'>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. rabitur auctor leo et libero consectetur gravida. Morbi gravida et em dictum varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis.</p>
        </div>
        <div className='relative'>
            <StarLineIcn className='animate-spin-slow w-40 h-40 absolute right-12 -z-1 -top-20 xl:-top-40 xl:w-80 xl:h-80'/>
            <div className='overflow-x-auto mt-12 relative'>
            <table className="table-auto mx-auto w-full xl:w-3/4 machines-table bg-white">
            <thead className='bg-black'>
                <tr>
                <th className='text-center'>Sr. No.</th>
                <th className='text-left'>Details of <br />Machine</th>
                <th className='text-left'>Name of Machines and Year</th>
                <th className='text-left'>No. of Machines</th>
                <th className='text-left'>Production Capacity (Per hour)</th>
                </tr>
            </thead>
            <tbody>
                {paginatedPosts && paginatedPosts.length > 0 && paginatedPosts.map((repo: any,index: number)=>(
                        <tr key={index}>
                            <td className='text-center w-7'>{index + 1}</td>
                            <td>{repo.details}</td>
                            <td colSpan={3} className="p-0">
                                <table>
                                    <tbody>
                                        {repo.items && repo.items.length > 0 && repo.items.map((data: any,index: number)=>(
                                            <tr key={index}>
                                                <td>
                                                    <div className={`${data.classname} flex items-start`}>
                                                       {data.name} <span className='font-semibold whitespace-nowrap ml-1'>{data.colors > 0 && <><span className='ml-1'>-</span><span>({data.colors} color)</span></>}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    {data.machinelength > 0 && data.machinelength}
                                                </td>
                                                <td>
                                                    {data.capacity > 0 ? <span>{data.capacity} {data.type}</span> : "--"}
                                                </td>
                                            </tr>
                                        ))}
                                     </tbody>
                                </table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Pagination
                items={MachinesListInterface.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
        />
        </div>
    </div>
    </>
    )
}
export default ManufacturingSetup;

function setCurrentPage(page: any) {
    throw new Error('Function not implemented.');
}
