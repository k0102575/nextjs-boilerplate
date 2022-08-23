import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const styles = css`
  ${emotionReset}

  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  input {
    margin: 0;
  }

  html * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
