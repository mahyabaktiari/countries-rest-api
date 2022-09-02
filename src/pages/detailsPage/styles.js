import { createGlobalStyle } from "styled-components";
export const DetailsStyle = createGlobalStyle`
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
    color:${(props) => props.theme.primaryText};
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

.country-details {
    display:flex ;
    margin-top:10px
}
.country-details .column-1{
    width:50%;
}
.country-details p{
    text-align:left;
    margin-top:10px;
    font-size:14px
}
.country-details span{
    color:${(props) => props.theme.secondaryText}
}
.border-button{
    height:30px;
    width:80px;
    box-shadow:0px 0px 8px 0px #80808038;
    border:none;
    background-color : ${(props) => props.theme.secondary};
    color:${(props) => props.theme.primaryText};
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
    .country-details{
        margin-top:10px;
        flex-direction:column
    }
    .country-details .column-1{
        width:100%;
    }
    .country-details .column-2{
        margin-top:30px
    }

    .country-details p{
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
