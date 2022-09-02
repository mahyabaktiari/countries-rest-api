import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.navbar{
    background-color: ${(props) => props.theme.secondary};
    color:${(props) => props.theme.fontColor};
    box-shadow: #80808026 1px 1px 7px 1px;
    font-family:Nunito Sans;
}
.container-navbar{
    padding: 20px 40px;
    max-width:1440px;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto
}

.theme-box{
    display: flex;
    align-items: center ;
    cursor: pointer
}
@media only screen and (max-width: 768px) {
    .container-navbar{
        padding: 25px 20px;
        max-width:414px
    }
    .container-navbar h2{
        font-size:14px
    }
    .theme-box p{
        font-size:12px
    }
}
`;
