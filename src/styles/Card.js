import styled from 'styled-components'

export const Card = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border: 6px solid ${(props) => (props.color ? props.color : '#000')};
    color: ${(props) => (props.color ? props.color : '#000')};
    font-weight: 500;
    border-radius: 10px;
    width: 60%;
    background-color: #fcf8e8;
`
