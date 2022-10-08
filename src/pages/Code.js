import React from "react";
import styled from "styled-components";
import { Heading2, white, paraFont, blue } from "../components/CommonComp";
import { mobile } from "../components/Responsive";
import MyCode from "../components/MyCode";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 90vh;
  position: relative;
`;

const Codename = styled(Heading2)`
  text-align: start;
  font-size: 4rem;
  padding-left: 2rem;
  margin: 2rem;
`;

const Language = styled(Codename)`
  font-size: 2rem;
  margin-top: 1rem;
`;

const CodeBox = styled.div`
  position: relative;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 3rem;
  overflow: auto;
  width: 70%;
  ${mobile({ width: "85%", overflow: 'auto' })}
`;

const BackButton = styled.button`
  width: 8rem;
  height: 3.5rem;
  font-size: 1.4rem;
  font-family: ${paraFont};
  background-color: #dc3545;
  color: ${white};
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  border: 0;
  top: 5%;
  right: 2%;
`;

const Copy = styled(BackButton)`
  top: 3%;
  right: 4%;
  width: 10rem;
  background-color: ${blue};
`;

const Code = () => {
  const location = useLocation();
  const data = location.state;
  const CopyCode = () => {
    navigator.clipboard.writeText(data.code);
    alert("Code Copied");
  };
  return (
    <Wrapper>
      <BackButton onClick={() => window.history.back()}>Back</BackButton>
      <Codename>{data.queName}</Codename>
      <Language>Language: {data.codeLang}</Language>
      <CodeBox>
        <Copy onClick={CopyCode}>Copy Code</Copy>{" "}
        <MyCode code={data.code}></MyCode>{" "}
      </CodeBox>
    </Wrapper>
  );
};

export default Code;
