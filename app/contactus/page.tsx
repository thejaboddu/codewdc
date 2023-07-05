import { ReactElement } from 'react'
import ContactForm from '@/components/ContactForm/page'
import HomepageMarquee from './../(home)/HomepageMarquee/page'
import SmallLineAnimations from '@/components/LineDrawAnimations/SmallLineAnimations/page'
import { MailIcn, MarkerIcn, MultiPolygonIcn, PhoneIcn, SmallStarDarkIcn, SmallStrokeStarIcn, StarDarkIcn, StarLineIcn } from '@/components/icons/CommonIcons/page'

const ContactUs = (): ReactElement => {

  return (
    <div className='custom-gredient-bg'>
        <div className='pb-6 pt-32 md:pt-40 lg:pb-10'>
            <div className='container mx-auto px-4'>
                <div className='-mx-4 items-end relative lg:flex'>
                    <SmallStrokeStarIcn className='animate-spin-slow absolute top-0 right-5 lg:left-4'/>
                    <div className='w-full px-4 lg:w-1/2'>
                        <div className='mr-0 relative pb-8 md:pb-10 lg:mr-14'>
                            <div className='md:flex'>
                                <div className='font-Montserrat font-bold text-3xl tracking-bigger-tighter-letter-spacing md:text-5xl lg:text-6xl 2xl:text-8xl'>Contact Us</div>
                            </div>
                            <div className='text-theme-grey text-lg font-Nunito mt-2 max-w-652 lg:text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                            <MultiPolygonIcn className='animate-bounce-slow w-10 h-10 mt-2 absolute right-0 bottom-0 lg:w-14 lg:h-14 md:-bottom-5'/>
                        </div>
                    </div>
                    <div className='w-full px-4 mt-7 relative z-10 lg:w-1/2 lg:mt-0'>
                        <StarDarkIcn className='animate-spin-slow absolute right-1/2 -top-9 md:right-40'/>
                        <SmallStarDarkIcn className='animate-spin-slow absolute left-4 -bottom-4 md:-top-12 lg:left-2/4'/>
                        <ContactForm className="bg-white relative z-10"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-5'> 
            <HomepageMarquee />
            <div className='container mx-auto px-4 py-12 relative'>
                <div className='mt-2 lg:mt-6'>
                    <SmallLineAnimations className='mb-8'/>
                    <div className='font-Montserrat font-bold text-black mb-10 break-all text-3xl tracking-big-tighter-letter-spacing md:text-5xl 2xl:text-7xl'>COMMUNICATION <br/>IS EVERYTHING</div>
                    <StarLineIcn className='animate-spin-slow w-32 h-32 absolute right-10 -top-10 lg:-top-16 xl:w-60 xl:h-60 2xl:right-5'/>
                </div>
                <div className="grid grid-cols-1 mt-2 lg:grid-cols-3 lg:mt-24">
                    <div className='flex items-start mb-3 lg:mb-0'>
                        <PhoneIcn className='mr-5 w-8 h-auto mt-2 lg:w-auto lg:mr-10'/>
                        <div>
                            <h4 className='text-xl text-black font-bold md:text-3xl lg:text-5xl'>Call Us</h4>
                            <p className='text-theme-grey text-lg mt-2'>+91-79-26811287, <br/>+91-79-26821289</p>
                        </div>
                    </div>
                    <div className='flex items-start mb-3 lg:mb-0'>
                        <MailIcn className='mr-5 w-8 h-auto mt-2 lg:w-auto lg:mr-10'/>
                        <div>
                            <h4 className='text-xl text-black font-bold md:text-3xl lg:text-5xl'>Email Us</h4>
                            <p className='text-theme-grey text-lg mt-2'>dataad1@gmail.com, <br/>dataexim@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-start  mb-3 lg:mb-0'>
                        <MarkerIcn className='mr-5 w-8 h-auto mt-2 lg:w-auto lg:mr-10'/>
                        <div>
                            <h4 className='text-xl text-black font-bold md:text-3xl lg:text-5xl'>Our Location</h4>
                            <p className='text-theme-grey text-lg mt-2'>Data House, Nr. Vejalpur, Vejalpur Road, <br/>Ahmedabad - 380 051, Gujarat, INDIA.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 lg:mt-24'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15049961975!2d72.5797426!3d23.0202434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680683307474!5m2!1sen!2sin" className='w-full h-80 grayscale lg:h-600' style={{'border':0}} loading="lazy"></iframe>
                </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs