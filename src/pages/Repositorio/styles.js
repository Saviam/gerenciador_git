import styled from "styled-components";
import { Link } from "react-router-dom";


export const Loading = styled.div`

color:#fff;
display: flex;
justify-content:center;
align-items:center;
height:100vh;
`;

export const Container = styled.div`
max-width:700px;
background:#fff;
border-radius:4px;
box-shadow:0 0 20pxrgba(0, 0, 0, 0.2);
padding: 20px 30px;
margin:80px auto;
`;

export const Owner = styled.header`
display:flex;
flex-direction:column;
align-items:center;


img{
    width:150px;
    border-radius:20%;
    margin: 10px 0;
}

h1{
    font-size:30px;
    padding:15px 0;
    color: #0d2636;
}
p{
    font-size:14px;
    color:#000;
    text-align:center;
    max-width: 400px;
}
`;

export const BackButton = styled(Link)`
    background: transparent;
    border:none;
    outline:0;

`;