import Link from 'next/link'
import GameInfo from './GameInfo'
import Title from './Title'
import CarouselContainer from './CarouselContainer'
import Reviews from './Reviews'

const PageContent = () => {
  return (
    <div>
        <Title />
        <CarouselContainer />
        <GameInfo />
        <Reviews />
    </div>
  )
}

export default PageContent