import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}
 
  *,
  *:before,
  *:after {
    transition: inherit;
  }

  body {
    background-color: black;
    color: white;
    margin: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    }


  ::selection {
    background-color: #00f;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

`;
