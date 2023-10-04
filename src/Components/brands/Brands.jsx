import brand1 from '../../assets/images/brand-01.png'
import brand2 from '../../assets/images/brand-02.png'
import brand3 from '../../assets/images/brand-03.png'
import brand4 from '../../assets/images/brand-04.png'
import brand5 from '../../assets/images/brand-05.png'
import brand6 from '../../assets/images/brand-06.png'
const Brands = () => {
    const brands = [
        brand1, brand2, brand3, brand4, brand5, brand6
    ]
  return (
    <div className='container my-5 bg-white rounded'>
        <div className='d-flex align-items-center justify-content-between flex-wrap '>
            {brands.map((brand , index)=>(
                <img src={brand} alt={brand} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Brands