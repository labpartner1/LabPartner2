import React from 'react';
import styled from 'styled-components';
import { Button, Heading4, blue, darkgreen } from './CommonComp';
import { Link } from 'react-router-dom';

const QuestionTab = styled.div`
    width: 90%;
    margin: 3rem auto;
    background-color: #f2fff2;
    box-shadow: 3px 3px 3px rgb(50 50 50 / 28%);
    justify-content: space-between;
    padding: 2rem;
    border-radius: 1.2rem;
    border-left: 0.6rem solid ${darkgreen};
`

const QuestionName = styled(Heading4)`
    color: ${blue};
    font-weight: bold;
`;

const QButton = styled(Button)`
    height: 4rem;
    width: 10rem;
    font-size: 1.6rem;
    border-radius: 1.2rem;
`

const Question = (props) => {

    const myData = {
        code: props.code,
        queName: props.queName,
        codeLang: props.language
    }

    return (
        <>

            <QuestionTab className='d-flex' >
                <QuestionName>{props.queName}</QuestionName>


                <QButton as={Link}  to={`/${props.labname}/${props.id}`} state={myData} className='d-flex'>Open</QButton>


            </QuestionTab>
        </>
    )
}

export default Question