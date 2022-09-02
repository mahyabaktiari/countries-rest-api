import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.header{
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding : 40px ;
}
.searchbar{
    display:flex;
    align-items:center;
    background-color:${(props) => props.theme.secondary};
    height:45px;
    width:30%;
    box-shadow:0px 0px 8px 0px #80808038;
    border-radius:4px;
    padding-left:20px
}
.searchbar input{
    border:none;
    flex:1;
    height:100%;
    background-color:${(props) => props.theme.secondary};
    color:${(props) => props.theme.primaryText};
    padding:0;
    margin-left:20px
}
::placeholder {
    color: ${(props) => props.theme.primaryText};
  }
.searchbar input:focus-visible{
  outline: 0;
  padding: 0;
}
.country-container{
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    padding:0 10px
}
.country-card-container {
    padding:30px;
    width:25%;
}
.country-card{
    min-width:100%;
    background-color:${(props) => props.theme.secondary};
    box-shadow:0px 0px 8px 0px #80808038;
    border-radius:4px;
    text-align:left;
    padding-bottom:40px;
    cursor:pointer
}
.country-card img{
    width:100%;
    height:170px;
    objectFit: cover;
    border-radius:4px 4px 0 0;
}
.country-card h1{
    font-size:20px;
    padding-left:10px;
    margin: 20px 0
}
.country-card .description{
    padding-left:10px;
    margin:5px 0
}
.description span{
    color:${(props) => props.theme.secondaryText}
}

@media only screen and (max-width: 992px) {
    .country-card-container{
        width:33%;
    }
}
@media only screen and (max-width: 768px) {
    .header{
    flex-direction:column;
    align-items:flex-start;
    padding:20px
    }
    .country-container{
        gap:0
    }
    .searchbar{
        width:100%;
        box-sizing:border-box
    }
    .country-card-container{
        width:100%;
        margin:20px 10px;
        padding:0
    }
    .country-card img{
        height:100%
    }
}
.
`;
