// styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`;

// styles/theme.ts
export const theme = {
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#FFFFFF",
    text: "#000000",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
};
