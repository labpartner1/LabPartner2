import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import contactImg from "../images/contactImg.png";
import { Container, darkgreen, Heading2, paraFont, Button } from "./CommonComp";
import { mobile } from "./Responsive";
import { db } from "../LabFirebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const Wrapper = styled.div``;

const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  ${mobile({ height: "auto", width: "100%" })}
`;

const Image = styled.img`
  width: 50rem;
  ${mobile({ width: "35rem" })}
`;

const ContactContainer = styled.div`
  width: 55%;
  height: 100%;
  flex-direction: column;
  ${mobile({ width: "100%", height: "50%" })}
`;

const Form = styled.form`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  ${mobile({ width: "75%", alignItems: "center" })}
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-family: ${paraFont};
  margin: 1rem;
  width: 90%;
  color: #5b5b5b;
`;

const inputCss = css`
  font-size: 1.6rem;
  font-family: ${paraFont};
  outline: 0;
  border: 0;
  background-color: inherit;
  border-bottom: 0.3rem solid ${darkgreen};
  width: 90%;
  padding: 0.5rem;
`;

const Input = styled.input`
  ${inputCss}
  margin: 0.3rem;
`;

const Textarea = styled.textarea`
  ${inputCss}
  height: 15rem;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${darkgreen};
  }
`;

const SendButton = styled(Button)`
  border-radius: 1rem;
  margin: 2rem auto;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const usersCollection = collection(db, "Contact");
  const date = new Date();


  const UpdateData = async () => {
    if (name === '' || email === '' || message === '') {
      alert("Please fill all fields")
    }

    else {
      await addDoc(usersCollection, {
        name: name,
        email: email,
        message: message,
        date: date,
      });

      alert("Message sent");
      setEmail("");
      setName("");
      setMessage("");
    };

  }



  return (
    <>
      <Wrapper id="contact">
        <Heading2>Feedback</Heading2>

        <Container>
          <ImageContainer className="d-flex">
            <Image src={contactImg} alt="introImage" />
          </ImageContainer>

          <ContactContainer className="d-flex">
            <Form className="d-flex">
              <Label htmlFor="name">
                Name:
                <br />
                <Input type="text" name="name" id="name" autoComplete="off" onChange={(event) => setName(event.target.value)} value={name} />
              </Label>

              <Label htmlFor="email">
                Email:
                <br />
                <Input type="email" name="email" id="email" autoComplete="off" onChange={(event) => setEmail(event.target.value)} value={email} />
              </Label>

              <Label htmlFor="message">
                Message:
                <br />
                <Textarea name="message" id="message" cols="30" rows="10" onChange={(event) => setMessage(event.target.value)} value={message}
                ></Textarea>
              </Label>
            </Form>
            <SendButton onClick={UpdateData}>Send</SendButton>
          </ContactContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;
