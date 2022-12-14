import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box
}
html{
    background-color : ${(props) => props.theme.primary};
    font-family:Nunito Sans;
    color:${(props) => props.theme.primaryText};
}
.container{
    max-width:1440px;
    margin:0 auto;
    padding:0
}
@media only screen and (max-width: 768px) {
    .container{
        max-width:414px
    }
}
`;
