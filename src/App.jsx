import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benifits from './components/Benifits'
const App = () => {

  return (
    <>

      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hiddern'>
          <Header/>
          <Hero/>
          <Benifits/>
      </div>
      <ButtonGradient/>

    </>
  )
}

export default App
