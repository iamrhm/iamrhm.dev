import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  html, body, #root{
    height:100%;
    width:100%;
  }
  *{
      margin: 0;
      border:0;
      outline:none;
      box-sizing:border-box;
      margin: 0;
      border:0;
      padding:0;
      outline:hidden;
      outline: 0;
      font-family: 'Rubik', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing:border-box;
      overflow-x: hidden;
      *:focus {
        outline: 0;
        outline: none;
        }
      ::-webkit-scrollbar
      {
        width: 0.1px;  /* for vertical scrollbars */
        height: 0.1px; /* for horizontal scrollbars */
      }
      ::-webkit-scrollbar-track
      {
        background: rgba(0, 0, 0, 0.1);
      }
      ::-webkit-scrollbar-thumb
      {
        background: rgba(0, 0, 0, 0.5);
      }
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
`;

export const WrapperContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const PageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;
