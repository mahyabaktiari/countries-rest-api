import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.container-detaile-page{
    padding:30px ;
    display:flex;
    flex-direction : column;
}
.back-button{
    height:40px;
    width:110px;
    box-shadow:0px 0px 8px 0px #80808038;
    border:none;
    background-color : ${(props) => props.theme.secondary};
    color:${(props) => props.theme.fontColor};
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer
}
.back-button span{
    margin-left:10px
}
.country-container{
    display: flex;
    margin-top:40px;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center
}

.country-info{
    width:45%;
    margin: auto,
    min-width:400
}
.country-container img{
    width:44%;
    min-width:350px;
}

.country-detailes {
    display:flex ;
    margin-top:10px
}
.country-detailes .column-1{
    width:50%;
}
.country-detailes p{
    text-align:left;
    margin-top:10px;
    font-size:14px
}
.border-button{
    height:30px;
    width:80px;
    box-shadow:0px 0px 8px 0px #80808038;
    border:none;
    background-color : ${(props) => props.theme.secondary};
    color:${(props) => props.theme.fontColor};
    border-radius:4px;
    cursor:pointer;
    margin: 4px
}
.border-countries{
    display:flex;
    margin-top:50px;
    align-items:center
}
.border-countries p{
    white-space :nowrap;
    margin:0;
    font-size:14px;
    margin-right:10px

}
@media only screen and (max-width: 768px) {
    .container-detaile-page{
        padding:30px 20px
    }
    .country-container img{
        width:100%;
        min-width:280px
    }
    .country-info{
        width:100%;
        margin-top:40px

    }
    h1{
        font-size:16px
    }
    .country-detailes{
        margin-top:10px;
        flex-direction:column
    }
    .country-detailes .column-1{
        width:100%;
    }
    .country-detailes .column-2{
        margin-top:30px
    }

    .country-detailes p{
        font-size:13px;
        margin-top:12px
    }
    .border-countries{
        margin-top:30px;
        flex-direction:column;
        align-items:flex-start
    }
    .border-button{
        margin:15px 8px 0 0
    }

}
`;
