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
    min-width: 320px;
  }

  #root {
    display: flex;
  }

  #root > div {
    flex: 1 0 100%;
    overflow-x: hidden;
  }

  @media (min-width: 320px) {
    #root > div {
      flex: 1 0 calc(100vw - ${window.config.columnWidth}px);
    }
  }

  img {
    max-width: 100%;
    vertical-align: bottom;
  }

  a {
    cursor: pointer;
  }
`
