export default `
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    background: ${window.config.background || 'white'};
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
    vertical-align: bottom;
  }

  a {
    cursor: pointer;
  }
`
