'use client'
import { ReactElement } from 'react'
import RedButton from '../CommonButtons/RedButton/page'

const ContactForm = (props:any): ReactElement => (
    
    <div className={`${props.className} rounded-3xl p-5 md:p-10`}>
        <div className='text-3xl font-Montserrat font-bold mb-7'>Your Information</div>
        <form>
            <div className='mb-5'>
                <label className='block mb-2 font-Montserrat font-semibold text-[#606060] text-base w-full'>Fullname</label>
                <input type="text" className='w-full border border-[#7070706c] bg-transparent py-2 px-2 rounded outline-none focus:border-theme-blue'/>
            </div>

            <div className='md:flex -mx-4'>
                <div className='w-full px-4 lg:w-2/4'>
                    <div className='mb-5'>
                        <label className='block mb-2 font-Montserrat font-semibold text-[#606060] text-base w-full'>Phone No</label>
                        <input type="text" className='w-full border border-[#7070706c] bg-transparent py-2 px-2 rounded outline-none focus:border-theme-blue'/>
                    </div>
                </div>
                <div className='w-full px-4 lg:w-2/4'>
                    <div className='mb-5'>
                        <label className='block mb-2 font-Montserrat font-semibold text-[#606060] text-base w-full'>Email</label>
                        <input type="email" className='w-full border border-[#7070706c] bg-transparent py-2 px-2 rounded outline-none focus:border-theme-blue'/>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <label className='block mb-2 font-Montserrat font-semibold text-[#606060] text-base w-full'>Subject</label>
                <input type="text" className='w-full border border-[#7070706c] bg-transparent py-2 px-2 rounded outline-none focus:border-theme-blue'/>
            </div>

            <div className='mb-5'>
                <label className='block mb-2 font-Montserrat font-semibold text-[#606060] text-base w-full'>Message</label>
                <textarea rows={5} className='w-full border border-[#7070706c] bg-transparent py-2 px-2 rounded outline-none focus:border-theme-blue'></textarea>
            </div>        
            <div className='mb-5 mt-8 text-right'>
                <RedButton btnLineLink="/" btnLineText="SEND YOUR MESSAGE" className='rounded-md py-4'/>
            </div>        
        </form>
    </div>
    
  
)

export default ContactForm