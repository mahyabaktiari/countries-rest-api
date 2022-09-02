import { createGlobalStyle } from "styled-components";
export const SkeletonStyle = createGlobalStyle`
.skeleton-container{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:40px;
}
.skeleton-card{
    min-width:300px;
    background-color:${(props) => props.theme.secondary};
    box-shadow:0px 0px 8px 0px #80808038;
    border-radius:4px;
    width:22%;
    text-align:left;
    cursor:pointer
}
.skeleton-card .img{
    height:190px;
    background-color :#ddd;
}
.skeleton-card .content{
    margin:20px
}
.skeleton-card .content .big{
    height :40px ;
    background-color :#ddd;
    width:80%;
    margin:12px;
}
.skeleton-card .content .small{
    height :40px ;
    background-color :#ddd;
    width:50%;
    margin:12px;
}


@media only screen and (max-width: 768px) {
    .skeleton-container{
        gap:0
    }
    .skeleton-card{
        width:100%;
        margin:10px
    }
}
`;
