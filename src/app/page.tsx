import ExclusiveTechRecruiters from './components/ExclusiveTechRecruiters'
import Header from './components/Header'
import HeaderPhoto from './components/HeaderPhoto'

export default function Home() {
  return (
    <main className="mb-16 flex flex-col items-center justify-center md:mb-0">
      <div className="mb-4 flex flex-col items-center justify-center md:mb-0 md:flex-row">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <HeaderPhoto />
            <ExclusiveTechRecruiters onlyForBigScreens={true} />
          </div>
          <Header />
        </div>
        <ExclusiveTechRecruiters onlyForBigScreens={false} />
      </div>
    </main>
  )
}
