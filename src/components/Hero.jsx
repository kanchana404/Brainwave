import { curve } from '../assets'
import Section from './Section'
import Button from './Button'
const Hero = () => {
  return (
    <Section 
    className='pt-[12rem] -mt-[5.25]'
    crosses
    crossOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id='hero'
    >
        <div className='container relative'>
            <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] mb:mb-12 lg:mb:[6rem]'>
                <h1 className='h1 mb-6 '>
                    Explore the Possibilities of AI Catting with 
                    <span className='inline-block relative'>Brainwave <img className='absolute top-full left-0 w-full xl:-mt-2' src={curve} alt="curve" width={645} height={28}/></span>
                </h1>
                <p className='body-1 max-2-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button href="/pricing" white>
                    Get Started
                </Button>
            </div>
        </div>
    </Section>
  )
}

export default Hero