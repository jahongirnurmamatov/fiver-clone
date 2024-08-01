import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import './Home.scss'
import {cards} from '../../data'
import CatCard from '../../components/catCard/CatCard'

const Home = () => {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={3} >
        {cards.map(card=>(
          <CatCard key={card.id} item={card} arr/>
        ))}
      </Slide>
    </div>
  )
}

export default Home