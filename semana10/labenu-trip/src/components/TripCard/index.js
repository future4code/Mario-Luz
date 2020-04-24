import React from 'react';
import styled from "styled-components";


const ContainerTripCard = styled.div`
    background-color: #030303;
    width: 90%;
    height: 90%;
    gap: 10px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    color: #FEE123;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`  


function TripCard(props) {
    return (
        <ContainerTripCard>
            {props.children}
        </ContainerTripCard>
    );
}


export default ContainerTripCard;