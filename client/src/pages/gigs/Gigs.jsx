import './Gigs.scss'
import {gigs} from '../../data'
import GigCard from '../../components/gigCard/GigCard';
const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr > Graphics & Design ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input  type="number" placeholder="min" />
            <input  type="number" placeholder="max" />
            <button >Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
             "Best Selling"
            </span>
            <img src="./img/down.png" alt=""  />
            
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Gigs