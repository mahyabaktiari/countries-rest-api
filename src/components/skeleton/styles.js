import { createGlobalStyle } from "styled-components";
export const SkeletonStyle = createGlobalStyle`
.skeleton-container{
    display:flex;
    padding:0 10px;
    flex-wrap:wrap;
}
.skeleton-card-container{
    width:25%;
    padding:30px;
}
.skeleton-card{
    background-color:${(props) => props.theme.primary};
    box-shadow:0px 0px 8px 0px #80808038;
    border-radius:4px;
    text-align:left;
    cursor:pointer
}
.skeleton-card .img{
    height:170px;
    background-color ${(props) => props.theme.secondary};
}
.skeleton-card .content{
    margin:20px;
    padding-bottom:10px
}
.skeleton-card .content .big{
    height :40px ;
    background-color :${(props) => props.theme.secondary};
    width:80%;
    margin:12px;
}
.skeleton-card .content .small{
    height :40px ;
    background-color :${(props) => props.theme.secondary};
    width:50%;
    margin:12px;
}

@media only screen and (max-width: 992px) {
    .skeleton-card-container{
        width:33%;
    }
}

@media only screen and (max-width: 768px) {
    .skeleton-container{
        gap:0
    }
    .skeleton-card-container{
        width:100%;
        margin:10px;
        padding:0
    }
}
`;
