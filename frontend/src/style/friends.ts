import styled from 'styled-components'

export const _People = styled.style`
    width: 17%;
    margin: 10px 0.5%;
    display: flex;
    flex-direction: column;
    padding: 1%;
    box-shadow: 1px 1px 15px rgb(226, 224, 224);
    border-radius: 10px;
    position: relative;
    transition: 0.3s;
    .Friend:hover{
        box-shadow: 1px 1px 15px rgb(190, 190, 190);
        transition: 0.3s;
    }
    @media (max-width: 900px){width: 22%;}
    @media (max-width: 700px){width: 30%;}
    @media (max-width: 500px){
        width: 47%;  
        display: inline-block; 
        scroll-snap-align: start;
    }
    @media (max-width: 300px){width: 97%;}
    
`

export const _Peoples = styled.style`
display: flex;
flex-wrap: wrap;
padding-top: 30px;

@media (max-width: 500px) {
    display: block;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar{
        height: 0px;
    }
} 
`

export const _BoxImage = styled.style`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    img{
        width: 70%;
        border-radius: 600px;
        border: solid 5px #51bbf2;
    }
`

export const _BoxInformations = styled.style`
    display: block;
    width: 100%;
    span.company{
        position: absolute;
        top: 10px;
        right: 0;
        padding: 5px 10px;
        background-color: rgb(230, 171, 8);
        color: white;
        font-weight: 600;
        svg{
            font-size: 16px;
        }
    }
    h2{
        text-align: ${props => props.titleAlign};
        padding-bottom: 20px;
        color: rgb(49, 48, 48);
    }
    p{
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        font-size: 15px;
        color: black;
        &.message{
            background-color: #ddd;
            width: 97%;
            padding: 10px 1%;
        }
        span{
            padding: 1px 3px 1px 6px;
            margin-right: 3px;
            background-color:  rgb(91, 5, 230);
            color: white;
            display: flex;
            align-items: center;
            border-radius: 2px;
        }
    }
`