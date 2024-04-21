import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benifits from './components/Benifits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
const App = () => {

  return (
    <>

      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hiddern'>
          <Header/>
          <Hero/>
          <Benifits/>
          <Collaboration/>
          <Services/>
          <Pricing/>
      </div>
      <ButtonGradient/>

    </>
  )
}

export default App
