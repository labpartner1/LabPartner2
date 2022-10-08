import React from 'react';
import styled from 'styled-components';


const MyFooter = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: #1A1A1A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    /* flex-grow: 1; */
`;

const Logo = styled.div`
    a {
        font-family: 'Averia Serif Libre', cursive;
        font-size: 3.5rem;
        color: #71DB77;
    }
`;

const GAS = styled.a`
    text-decoration: none;
    color: #fffefe;
    font-size: 2.1rem;
    font-weight: 550;
    font-family: 'Noto Sans', sans-serif;
`

const Footer = () => {

    return (
        <>
            <MyFooter >
                <Logo><a href="/">Lab Partner</a></Logo>

                <GAS href='mailto:labpartner.gas@gmail.com' >Developed by: &nbsp;A&G</GAS>

            </MyFooter>


        </>
    )
}

export default Footer