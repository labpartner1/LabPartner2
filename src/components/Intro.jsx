import React from 'react';
import styled from 'styled-components';
import { Container, darkgreen, nameFont, Para } from './CommonComp';
import introImage from '../images/intoImage.png'
import { mobile } from './Responsive';


const ImageContainer = styled.div`
    width: 45%;
    height: 100%;
    align-items: flex-end;
    font-weight: 700;
    ${mobile({height: 'auto', width: '100%'})}
`;

const IntroPara = styled(Para)`
    width: 70%;
    margin: 4rem 0;
    font-size: 2.5rem;
    color: #0051ff;
    ${mobile({margin: '3rem 0'})}
    a {
        color: #0051ff;
        text-decoration: underline;
    }
`

const NameContainer = styled.div`
    width: 55%;
    height: 100%;
    flex-direction: column;
    ${mobile({height: '45%', width: '100%'})}
`;

const Image = styled.img`
    width: 63rem;
    ${mobile({width: '50rem'})}
`;

const Name = styled.h1`
    font-size: 13.5rem;
    color: ${darkgreen};
    display: block;
    font-family: ${nameFont} ;
    line-height: 0.9;
    text-align: center;
    
`;

const Intro = () => {


    return (
        <>
            <Container id='home' >
                <ImageContainer className='d-flex'>
                    <Image src={introImage} alt="introImage" />
                </ImageContainer>

                <NameContainer className='d-flex'>
                        <Name>Lab</Name>
                        <Name>Partner</Name>
                    <IntroPara>
                        We'll help you to complete your labs<br />Use Lab Partner <a href="#typewriter">auto typewriter</a> for better indentation. <br />
                        Special thanks for <a rel="noreferrer" href="https://www.instagram.com/sunny.sharma.02/" target={"_blank"}>Sunny Sharma</a> for creating Auto typewriter for Mac OS.
                    </IntroPara>
                </NameContainer>

            </Container>
        </>
    )
}

export default Intro
