import ExclusiveTechRecruiters from './components/ExclusiveTechRecruiters'
import Typewriter from './components/Typewriter'
import ProfilePicHome from './components/ProfilePicHome'
import HomeNavigationLinksMobile from './components/HomeNavigationLinksMobile'

export default function Home() {
  return (
    <div className="mx-auto my-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
      <ProfilePicHome />
      <Typewriter />
      <HomeNavigationLinksMobile />
      <ExclusiveTechRecruiters />
    </div>
  )
}
