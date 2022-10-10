import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Heading2, paraFont, blue, white } from '../components/CommonComp';
import Question from '../components/Question';
import { useEffect, useState } from 'react';
import { db } from '../LabFirebase';
import { collection, getDocs } from 'firebase/firestore';
import spinner from '../images/spinner.gif';
import { mobile } from '../components/Responsive';


const Wrapper = styled.div`
    min-height: 100vh;
    position: relative;
`

const Container = styled.div`
    width: 80%;
    margin: 5rem auto;
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    border-radius: 1.5rem;
    overflow: hidden;
    /* border: 1px solid rgba(0,0,0,0.18); */
`;

const LabName = styled(Heading2)`
    background-color: ${blue};
    text-align: left;
    margin: 0;
    padding: 1rem 2rem;
    font-weight: 500;
    color: white;
    font-size: 3.5rem;
    width: 100%;
`;

const Input = styled.input`
    width: 70%;
    font-size: 1.8rem;
    font-family: ${paraFont};
    display: block;
    margin: 4rem auto;
    padding: 0.5rem 1rem;
    height: 5rem;
    outline: 0;
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
    top: 0;
    left: 2%;
    ${mobile({ top: '-4rem' })}
`;

const Spinner = styled.img`
    display: block;
    margin: 1rem auto;
    width: 7rem;
`;


const LabQues = () => {
    const { labname } = useParams();
    const dataCollectionRef = collection(db, labname);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect(() => {

        const getData = async () => {
            const apiData = await getDocs(dataCollectionRef);
            // this data is not sorted
            const unSortData = apiData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            // sorting the data and set it
            setData(unSortData.sort((p1, p2) => {
                const propertyName = 'Id';

                return p1[propertyName] > p2[propertyName] ? 1 : p1[propertyName] < p2[propertyName] ? -1 : 0
            }));

            setLoading(false);

        }
        
        getData();
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <Wrapper>
                <Container>
                    <BackButton onClick={() => window.history.back()} >Back</BackButton>
                    <LabName>{labname}</LabName>

                    <Input type='text' placeholder='Search... Eg: lab1q2' onChange={(event) => setSearch(event.target.value)} ></Input>
                    {
                        loading ?
                         <Spinner src={spinner} alt="spinner" /> 
                         :
                        data.filter((e) => e.Id.toLowerCase().includes(search.toLowerCase())).map((ele) => {
                            return <Question key={ele.Id} queName={ele.QuetNo} id={ele.Id} code={ele.Code}
                                language={ele.Language} labname={labname} />
                        })
                    }
                </Container>
            </Wrapper>
        </>
    )
}

export default LabQues
