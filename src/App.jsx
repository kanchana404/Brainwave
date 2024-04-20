import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
const App = () => {

  return (
    <>

      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hiddern'>
          <Header/>
          <Hero/>
      </div>
      <ButtonGradient/>

    </>
  )
}

export default App
