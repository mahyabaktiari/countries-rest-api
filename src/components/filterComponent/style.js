import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.filter-container{
    position:relative;
    min-width:200px;
}
.filterbar{
    display:flex;
    align-items:center;
    background-color:${(props) => props.theme.secondary};
    color:${(props) => props.theme.primaryText};
    height:45px;
    box-shadow:0px 0px 8px 0px #80808038;
    border-radius:4px;
    padding: 0 20px;
    cursor:pointer
}
.filterbar p{
    flex:1
}
.list{
    position:absolute;
    background-color:${(props) => props.theme.secondary};
    margin-top:10px;
    box-shadow:0px 0px 8px 0px #80808038;
    border-radius:4px;
    padding: 0 20px;
    left:0;
    width:100%
}
.list ul{
    list-style: none;
    padding: 0;
}
.list ul li{
    margin : 10px 0;
    cursor:pointer
}
.d-none{
    display:none
}
@media only screen and (max-width: 768px) {
    .filter-container{
        margin-top:20px
    }
}
`;
