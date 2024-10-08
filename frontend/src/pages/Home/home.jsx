import React, { useEffect } from 'react'
import NavBar from '../../components/navBar/navBar'
import './home.css';
import Perfume from '../../assets/perfume.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Home = () => {

  useEffect (() => {
    alert("This website is still under progress")
  }, [])

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }

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
              <h1>FEATURED PERFUMES</h1>
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
                  <div className="swiper-container swiper-1">
                    <div className="swiper-container-content" onClick={() => openInNewTab("https://fatherandsonph.com/products/debonair")}>
                      <div className='brand-name'>Father and Son</div>
                      <div className='perfume-name'>Debonair</div>
                      <div className="perfume-level">Extrait de Parfum</div>
                      <div className='perfume-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat nulla lorem. Praesent convallis lorem mauris. 
                        Cras convallis viverra ex, eget lobortis elit egestas ut. Suspendisse vitae sapien sapien. Praesent eu porttitor lacus, 
                        et dapibus augue. Nam tortor neque, condimentum a massa sit amet, ultricies aliquam leo. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-2">
                    <div className="swiper-container-content" onClick={() => openInNewTab("https://www.hsiscentscollection.com")}>
                      <div className='brand-name'>HSI</div>
                      <div className='perfume-name'>Eclat</div>
                      <div className="perfume-level">Eau de Parfum</div>
                      <div className='perfume-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat nulla lorem. Praesent convallis lorem mauris. 
                        Cras convallis viverra ex, eget lobortis elit egestas ut. Suspendisse vitae sapien sapien. Praesent eu porttitor lacus, 
                        et dapibus augue. Nam tortor neque, condimentum a massa sit amet, ultricies aliquam leo. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-3">
                    <div className="swiper-container-content">
                      <div className='brand-name'>Symmetry Lab</div>
                      <div className='perfume-name'>Ecstatic Rouge</div>
                      <div className="perfume-level">Extrait de Parfum</div>
                      <div className='perfume-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat nulla lorem. Praesent convallis lorem mauris. 
                        Cras convallis viverra ex, eget lobortis elit egestas ut. Suspendisse vitae sapien sapien. Praesent eu porttitor lacus, 
                        et dapibus augue. Nam tortor neque, condimentum a massa sit amet, ultricies aliquam leo. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-4">
                    <div className="swiper-container-content">
                      <div className='brand-name'>Scent Geeks</div>
                      <div className='perfume-name'>Delina</div>
                      <div className="perfume-level">Parfum</div>
                      <div className='perfume-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat nulla lorem. Praesent convallis lorem mauris. 
                        Cras convallis viverra ex, eget lobortis elit egestas ut. Suspendisse vitae sapien sapien. Praesent eu porttitor lacus, 
                        et dapibus augue. Nam tortor neque, condimentum a massa sit amet, ultricies aliquam leo. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-5">
                    <div className="swiper-container-content">
                      <div className='brand-name'>Parfums Astraux</div>
                      <div className='perfume-name'>Under The Sakura</div>
                      <div className="perfume-level">Maison Du Parfum</div>
                      <div className='perfume-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat nulla lorem. Praesent convallis lorem mauris. 
                        Cras convallis viverra ex, eget lobortis elit egestas ut. Suspendisse vitae sapien sapien. Praesent eu porttitor lacus, 
                        et dapibus augue. Nam tortor neque, condimentum a massa sit amet, ultricies aliquam leo. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-container swiper-6">
                    <div className="swiper-container-content">
                      <div className='brand-name'>The Boar Grooming Co.</div>
                      <div className='perfume-name'>Hypnotic</div>
                      <div className="perfume-level">Extrait de Parfum</div>
                      <div className='perfume-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat nulla lorem. Praesent convallis lorem mauris. 
                        Cras convallis viverra ex, eget lobortis elit egestas ut. Suspendisse vitae sapien sapien. Praesent eu porttitor lacus, 
                        et dapibus augue. Nam tortor neque, condimentum a massa sit amet, ultricies aliquam leo. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home