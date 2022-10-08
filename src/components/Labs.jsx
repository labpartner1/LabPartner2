import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import {Heading2 } from './CommonComp';
import { mobile } from './Responsive';


const LabContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 0.20fr);
  justify-content: space-evenly;
  row-gap: 3rem;
  justify-items: center;
  ${mobile({gridTemplateColumns: 'repeat(2, 0.50fr)'})}
`;

const Wrapper = styled.div``;

const Labs = () => {
  return (
    <>
      <Wrapper id="labs">
        <Heading2>Labs</Heading2>
        <LabContainer  >

          {/* Add new card for new lab */}
          <Card labName="Competitive Coding" totalQues="30+" totalLab="6" labID="ComptitiveCoding" />
          <Card labName="DAA" totalQues="18" totalLab="4" labID="DAA" />
          <Card labName="Java Lab" totalQues="37" totalLab="11" labID="Java Lab" />
          <Card labName="DS Lab using Python" totalQues="34" totalLab="7" labID="DS Lab" />

          
        </LabContainer>
      </Wrapper>

    </>
  )
}

export default Labs