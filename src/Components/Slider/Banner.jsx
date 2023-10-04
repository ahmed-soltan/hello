// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/images/main-banner-1.jpg'
import banner2 from '../../assets/images/main-banner.jpg'
import catBanner1 from '../../assets/images/catbanner-01.jpg'
import catBanner2 from '../../assets/images/catbanner-02.jpg'
import catBanner3 from '../../assets/images/catbanner-03.jpg'
import catBanner4 from '../../assets/images/catbanner-04.jpg'
import { NavLink } from 'react-router-dom';
import './style.css'
const Banner = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 mb-2 rounded-5 position-relative'style={{overflow:"hidden"}} >
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        navigation={false}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={banner1} className='w-100' loading="lazy" />
                            <div className='text'>
                                <p className='text-danger fw-bold'>SUPERCHARGED FOR PROS</p>
                                <h1 className='text-black display-5 fw-bold'>Special Sale</h1>
                                <p className='text-black fs-6' style={{ width: "250px" }}>From $999.00 or $41.62/mo for 24.54/mo.footnote*</p>
                                <NavLink to="/products" className="btn" style={{ backgroundColor: "rgb(5, 33, 46)", padding: "10px 15px", color: "white", borderRadius: "15px" }}>Buy Now</NavLink>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner2} className='w-100' loading="lazy" />
                            <div className='text'>
                                <p className='text-danger fw-bold'>SUPERCHARGED FOR PROS</p>
                                <h1 className='text-black display-5 fw-bold'>iPad S13+ Pro</h1>
                                <p className='text-black fs-6' style={{ width: "250px" }}>From $999.00 or $41.62/mo for 24.54/mo.footnote*</p>
                                <NavLink to="/products" className="btn" style={{ backgroundColor: "rgb(5, 33, 46)", padding: "10px 15px", color: "white", borderRadius: "15px" }}>Buy Now</NavLink>
                            </div></SwiperSlide>

                    </Swiper>

                </div>
                <div className='col-lg-3 mb-3'>
                    <div className='row rounded-5 mb-3 position-relative'style={{overflow:"hidden"}}><img src={catBanner1} className='w-100' loading="lazy" /><div className='small-text'>
                        <p className='text-danger fw-bold'>BEST SALE</p>
                        <h4 className='text-black fw-bold'>Laptops Max</h4>
                        <p className='text-black' style={{ width: "170px", zIndex: "1000", fontSize: "15px" }}>From $1699.00 for $999.00</p>
                    </div>
                    </div>
                    <div className='row rounded-5 position-relative'style={{overflow:"hidden"}}>
                        <img src={catBanner2} className='w-100' loading="lazy" /><div className='small-text'>
                            <p className='text-danger fw-bold'>15% OFF</p>
                            <h4 className='text-black fw-bold'>Smart Watch 7</h4>
                            <p className='text-black' style={{ width: "170px", zIndex: "1000", fontSize: "15px" }}>Shop The Latest Band Styles and Colors</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='row rounded-5 mb-3 position-relative'style={{overflow:"hidden"}}><img src={catBanner3} className='w-100' loading="lazy" /><div className='small-text'>
                        <p className='text-danger fw-bold'>NEW ARRIVAL</p>
                        <h4 className='text-black fw-bold'>Buy iPad Air</h4>
                        <p className='text-black ' style={{ width: "170px", zIndex: "1000", fontSize: "15px" }}>From $599.00 for $399</p>
                    </div>
                    </div>
                    <div className='row rounded-5 position-relative'style={{overflow:"hidden"}}><img src={catBanner4} className='w-100' loading="lazy" /><div className='small-text'>
                        <p className='text-danger fw-bold'>FREE ENGRAVING</p>
                        <h4 className='text-black fw-bold'>AirPos Max</h4>
                        <p className='text-black' style={{ width: "170px", zIndex: "1000", fontSize: "15px" }}>High Fidelity Playback & ultra Low Distortion</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner