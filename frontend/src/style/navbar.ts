import styled from 'styled-components'

export const _navbar = styled.style`
padding: 20px;
display: flex;
justify-content: space-between;
    .logo{
        display: flex;
        img{
            height: 40px;
        }
    }
    .search{
        width: 50%;
        display: flex;
        input{
            padding: 5px 10px;
            width: 100%;
            border: solid 1px #8aabbb;
            border-radius: 100px 0px 0px 100px;
            font-size: 16px;
        }
        .icone{
            padding: 0px 15px;
            background-color: #51bbf2;
            border-radius: 0px 100px 100px 0px;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            border: 0px;
        }
    }
@media (max-width: 800px){
    flex-direction: column;
    .logo{
        img{
            height: 30px;
        }
    }
    .search{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 50px;
        input{
            width: 60%;
        }
    }
}
`