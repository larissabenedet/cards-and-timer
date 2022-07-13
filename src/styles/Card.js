import styled from 'styled-components'

export const Card = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    min-height: 140px;
    border: 6px solid
        ${(props) => (props.contentColor ? props.contentColor : '#000')};
    color: ${(props) => (props.contentColor ? props.contentColor : '#000')};
    font-weight: 500;
    border-radius: 10px;
    width: 70%;
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : '#fcf8e8'};
    transition: all 0.5s;
`
