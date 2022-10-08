import styled from "styled-components";
import { mobile } from "./Responsive";

// Colors
export const black = "#1A1A1A";
export const green = "#71DB77";
export const darkgreen = "#46da4e"; // 2ab471
export const white = "#fffefe";
export const blue = "#007bff";

// Fonts
export const nameFont = "'Averia Serif Libre', cursive";
export const paraFont = "'Noto Sans', sans-serif";
export const headingFont = "'Nunito Sans', sans-serif";

// Components
export const Container = styled.div`
    height: 63rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection: 'column', height: '95rem', justifyContent: 'space-around'})}
`;


export const Para = styled.p`
    font-size: 1.8rem;
    text-align: center;
    font-family: ${paraFont};
    padding: 1rem;
`;

export const Heading2 = styled.h2`
    font-size: 5rem;
    font-family: ${headingFont};
    margin: 2.5rem ;
    text-align: center;
    font-weight: bolder;
    word-wrap: break-word;
`;

export const Heading3 = styled.h3`
    font-size: 2.7rem;
    font-family: ${headingFont};
    text-align: center;
    word-wrap: break-word;
    font-weight: 500;
`;

export const Heading4 = styled.h4`
    font-size: 2.2rem;
    font-family: ${headingFont};
    text-align: center;
    word-wrap: break-word;
    font-weight: 500;
`;

export const Button = styled.button`
    width: 12rem;
    height: 5rem;
    font-size: 1.8rem;
    font-family: ${paraFont};
    background-color: inherit;
    border: 0.2rem solid ${darkgreen};
    color: ${darkgreen};
    border-radius: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 9;
    transition: all 0.5s ease-out;

    /* &::before {
        content: "";
        position: absolute;
        background-color: ${darkgreen};
        inset: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
    }

    &:hover:before {
        transform: scaleX(1);
    } */

    &:hover {
        background-color: ${darkgreen};
        color: ${white};
        /* border: 0; */
    }
`;


