import styled, { createGlobalStyle } from "styled-components";
import { createResetStyling } from "./_ResetCss";

export const GlobalStyle = createGlobalStyle`
 ${createResetStyling()}

 .guest-picker-modal{
     .modal-header{
         padding: 20px 12px;
         position: relative;
         box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08), 0px 1px 4px rgba(68, 80, 95, 0.2);
         border: none;
    
         .close-btn{
             position: absolute;
             left: 12px;
             top: 50%;
             transform: translateY(-50%);
             cursor: pointer;
         }
    
         .title{
             text-align: center;
             width: 100%;
             font-family: 'Inter';
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
         }
         
     }

     .modal-body{
        height: calc(100vh - 146px);
        overflow-y: auto;
        padding-top: 0;
    }

    .search-btn {
    background: #0071f3;
    box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08),
      0px 1px 4px rgba(68, 80, 95, 0.32);
    border-radius: 6px;
    height: 48px;

    span{

        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #ffffff;
        padding-left: 7px;
    }

    img{
        margin-right: 7px;
    }
  }

 }


 
 
`;

export const GlobalContainer = styled.div``;
