import React from 'react';
import styled from "styled-components";


const ContainerCard = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    position: absolute;
    background-color: #CE102C ;
    width: 300px;
    height: 250px;
    top: 35vh;
    right: 50vw;
    :nth-of-type(2) {
        top: 35vh;
        left: 10vw;
    }
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.5);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
    color: #030303;
    :hover {
        box-shadow: 0 0 50px #FEE123;
        color: #FEE123;
    }
    :active {
        box-shadow: 0 0px 50px rgba(0, 0, 0, 0.5);
        color: #FEE123;
    }
`  

const BackgroundImg = styled.img`
    opacity: 0.5;
    width: 100%;
    height: 100%;
    border-radius: 500px;
`

const Title = styled.h3`
    position: absolute;
    bottom: 22%;
    font-size: 40pt;
    z-index: 9;
`

function RedirectCard(props) {
    return (
        <ContainerCard onClick={props.onClick}>
            <Title>{props.title}</Title>
            <BackgroundImg src={props.img}/>
        </ContainerCard>
    );
}


export default RedirectCard;