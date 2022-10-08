import React from 'react';
import styled from 'styled-components';
import { Heading3, Button, Heading4, Para, darkgreen } from './CommonComp';
import { Link } from 'react-router-dom';


const LabCard = styled.div`
    width: 27rem;
    height: 37rem;
    border: 0.05rem solid rgba(0,0,0,0.18);
    border-radius: 1.8rem ;
    box-shadow: 8px 9px 14px -3px rgba(0,0,0,0.18);
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    transition: all 0.3s ease-in;
    /* cursor: pointer; */
    position: relative;

    &::before {
        position: absolute;
        top: 0;
        content: "";
        width: 0;
        height: 1%;
        background-color: ${darkgreen};
        border-radius: inherit;
        transition: all 0.3s ease-in;
    }

    &:hover:before {
        width: 94%;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

const LabName = styled(Heading3)`font-weight:600;`;

const TotalQuestion = styled.div`
    width: inherit;
    justify-content: space-between;
    margin: 0.5rem;
`;

const QuestionNumber = styled(Para)`
    padding: 0;
`

const Wrapper = styled.div`
    width: 95%;
`;


const Card = (props) => {

    return (
        <>
            <LabCard className='d-flex' >
                <LabName>{props.labName}</LabName>
                <Wrapper>
                    <TotalQuestion className='d-flex' >
                        <Heading4>Total labs:</Heading4>
                        <QuestionNumber>{props.totalLab}</QuestionNumber>
                    </TotalQuestion>
                    <TotalQuestion className='d-flex' >
                        <Heading4>Total Questions:</Heading4>
                        <QuestionNumber>{props.totalQues}</QuestionNumber>
                    </TotalQuestion>
                </Wrapper>


                <Button as={Link} to={`/${props.labID}`} className='d-flex' >Open</Button>
            </LabCard>
        </>
    )
}

export default Card