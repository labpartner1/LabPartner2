import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Slider.css";
import { Pagination, Navigation } from "swiper";
import { Heading2, Container, Button, Heading4, Para, darkgreen, white } from './CommonComp'
import styled from "styled-components";
import { mobile } from "./Responsive";
// import labPartnerApp from '../lab partner app/lab partner 2.0.exe';
import step1 from '../images/step 1.png'
import step2 from '../images/step 2.png'
import step3 from '../images/step 3.png'


const SliderContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-around;
  ${mobile({height: '80rem'})}
`;

const DownloadButton = styled(Button)`
    width: 18rem;
    height: 6rem;
    font-size: 2.2rem;

    a {
      color: ${darkgreen};
    }

    &:hover  a {
      color: ${white};
    }
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({flexDirection: 'column', height: '80%'})}
`;

const Wrapper = styled.div``;

export default function App() {
  return (
    <>
      <Wrapper id="typewriter">
        <Heading2>Auto typewriter</Heading2>
        <SliderContainer>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>

              <SlideContainer>
                <Heading4>Step 1 <br /> <Para>Download and open it.</Para> </Heading4>
                <img src={step1} alt="step1" />
              </SlideContainer>

            </SwiperSlide>

            <SwiperSlide>

              <SlideContainer>
                <Heading4>Step 2<br /> <Para>Paste your code in textarea and <br />  click on start button.</Para> </Heading4>
                <img src={step2} alt="step2" />
              </SlideContainer>

            </SwiperSlide>

            <SwiperSlide>

              <SlideContainer>
                <Heading4>Step 3<br /> <Para>Place you cursor where you want to paste the code and <br /> wait for 5 seconds </Para> </Heading4>
                <img src={step3} alt="step3" />
              </SlideContainer>

            </SwiperSlide>


          </Swiper>

          {/* <DownloadButton><a href={labPartnerApp}>Download</a></DownloadButton> */}
          <DownloadButton>Download</DownloadButton>
        </SliderContainer>
      </Wrapper>
    </>
  );
}
