import { css, FlattenSimpleInterpolation } from "styled-components";

type styleType = () => FlattenSimpleInterpolation;

export const createResetStyling: styleType = () => {
  const styles = `

    /* Reset CSS */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        outline: none !important;
      }




    html, 
    body {
    direction: ltr;
    text-align: left;
    color:#000;
    overflow-x:hidden;
    }

    a {
      text-decoration: none;
      color: #00f;
      &:hover {
          color: #00e;
          outline: none;
          text-decoration: none;

      }
    }
  `;
  return css`
    ${styles}
  `;
};
