import { ReactElement } from 'react'
import OurClientsLogo from './OurClientsLogo/page'
import HomePageBanner from './HomePageBanner/page'
import HomepageAboutus from './HomepageAboutus/page'
import HomepageCompanyHistory from './HomepageCompanyHistory/page'
import HomepageOurgoals from './HomepageOurgoals/page'
import HomepageCertificates from './HomepageCertificates/page'
import HomepageWorkwithus from './HomepageWorkwithus/page'
import HomepageSecurityFeatures from './HomepageSecurityfea/page'
import HomepageMarquee from './HomepageMarquee/page'
import HomepagePeopleTalk from './HomepagePeopleTalk/page'
import HomepageWereIn from './HomepageWereIn/page'
import HomepageLetsWork from './HomepageLetsWork/page'

const HomePage = (): ReactElement => {

  return (
    <>
    <div className='custom-gredient-bg'>
      <HomePageBanner />
      <OurClientsLogo />
      <HomepageAboutus />
      <HomepageCompanyHistory />
    </div>
    <HomepageOurgoals />
    <HomepageCertificates />
    <HomepageWorkwithus />
    <HomepageSecurityFeatures />
    <HomepageMarquee/>
    <HomepagePeopleTalk />
    <HomepageWereIn />
    <HomepageLetsWork />
    </>
  )
}

export default HomePage