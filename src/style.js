import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
