import Banner from '../Components/Slider/Banner'
import Service from '../Components/Service/Service'
import FeaturedProducts from '../Components/featuredProducts/FeaturedProducts'
import Advertisement from '../Components/Advertsment/Advertsment'
import PopularProducts from '../Components/LatestProducts/LatestProducts'
import Brands from '../Components/brands/Brands'
import LatestNews from '../Components/LatestNews/LatestNews'

const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='py-4' style={{backgroundColor:"#f5f5f5"}}>
          <Service/>
          <FeaturedProducts/>
          <Advertisement/>
          <PopularProducts/>
          <Brands/>
          <LatestNews/>
        </div>
    </div>
  )
}

export default Home