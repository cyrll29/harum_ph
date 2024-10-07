import React from 'react'
import NavBar from '../../components/navBar/navBar'
import './home.css';
import Perfume from '../../assets/perfume.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const home = () => {
  return (
    <>
        <NavBar />
        <div className="home-body">
          <div className="home-header">
            <div className="home-header-tagline">
              <h1>Unlock the Essence &#8208;</h1>
              <p>Discover, Explore, and Savor <br/>Every Scent.</p>
            </div>
            <div className="home-header-image">
              <img src={Perfume} alt="Perfume" />
            </div>
          </div> {/* -------------------- home-header closing --------------------- */}

          <div className="content-1">
            <div className="grid-container">
              <div className="grid one">
                <div className="grid-1-2-inside"></div>
              </div>
              <div className="grid one">
                <div className="grid-1-inside"></div>
              </div>
              <div className="grid two">
                <div className="grid-2-inside"></div>
              </div>
              <div className="grid three">
                <div className="grid-3-inside"></div>
              </div>
              <div className="grid four">
                <div className="grid-4-inside"></div>
              </div>
              <div className="grid five">
                <div className="grid-5-inside"> </div>
              </div>
            </div>
          </div> {/* -------------------- content-1 closing --------------------- */}

          <div className="content-2">
            <div className="content-2-grid">
              <div className="content-2-grid-1"><h1>FRAGHEAD PHILIPPINES</h1></div>
              <div className="content-2-grid-2">
                <div>
                  <p>Father and Son</p>
                </div>
                <div>
                  <p>To foster enduring father-son bonds by providing premium grooming, fashion, and lifestyle products that empower men and boys to build individuality in their identity, while nurturing a shared sense of style and connection.</p>
                </div>
              </div>
              <div className="content-2-grid-3"></div>
            </div>
          </div>

          <div className="content-3">
            <div className="content-3-title">
              <h1>FEATURED PERFUME</h1>
            </div>
            <div className="swiper-containers ">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="swiper-container swiper-1"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-2"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-3"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-4"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-5"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-6"></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
    </>
  )
}

export default home