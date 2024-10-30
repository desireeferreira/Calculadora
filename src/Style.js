import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #f9e1f5, #d1c4e9, #bbdefb, #f3c3eb);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

export const H1 = styled.h1`
    color: #584754;
    font-size: 2.5rem; /* Aumenta para destacar */
`;

export const Input = styled.input`
    width: 30vw;
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 8px;

    &::placeholder {
        color: #f3c3eb;
        text-align: center;
    }
`;

export const Btn = styled.button`
    border: none;
    padding: 10px 15px;
    color: #6f5269;
    border-radius: 5px;
    margin: 5px;
    background-color: white;

    &:hover {
        background-color: #e8e8e8;
        color: #6f5269;
        border: #6f5269 solid 1px;
    }
`;

export const Resultado = styled.h2`
    border-radius: 50%;
    padding: 10px;
    color: #584754;
    margin: 10px;
`;
