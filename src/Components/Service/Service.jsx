import service1 from '../../assets/images/service.png'
import service2 from '../../assets/images/service-02.png'
import service3 from '../../assets/images/service-03.png'
import service4 from '../../assets/images/service-04.png'
import service5 from '../../assets/images/service-05.png'
const Service = () => {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 py-5'>
        <div className='d-flex align-items-center justify-content-center flex-wrap gap-5 w-100'>
             <div className='d-flex align-items-center gap-3'>
                  <img src={service1} alt='services 1' loading="lazy"/>
                  <div>
                    <p className='text-black m-0 fw-bold'>Free Shipping</p>
                    <span className='fs-6'>From all Orders over $100</span>
                  </div>
             </div>
             <div className='d-flex align-items-center gap-3'>
                  <img src={service2} alt='services 1' loading="lazy"/>
                  <div>
                    <p className='text-black m-0 fw-bold'>Daily Surprise Offers </p>
                    <span className='fs-6'>Save up to 25% off</span>
                  </div>
             </div>
             <div className='d-flex align-items-center gap-3'>
                  <img src={service3} alt='services 1' loading="lazy"/>
                  <div>
                    <p className='text-black m-0 fw-bold'>Support 24/7</p>
                    <span className='fs-6'>Shop with an Expert</span>
                  </div>
             </div>
             <div className='d-flex align-items-center gap-3'>
                  <img src={service4} alt='services 1' loading="lazy"/>
                  <div>
                    <p className='text-black m-0 fw-bold'>Affordable Prices</p>
                    <span className='fs-6'>Get Factory Direct Price</span>
                  </div>
             </div>
             <div className='d-flex align-items-center gap-3'>
                  <img src={service5} alt='services 1' loading="lazy"/>
                  <div>
                    <p className='text-black m-0 fw-bold'>Secure Payment</p>
                    <span className='fs-6'>100% Protected Payments</span>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Service