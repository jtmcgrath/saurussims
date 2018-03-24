export default `
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:400,400i,700,700i|Amatic+SC');

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

  body,
  p {
    font-family: "Alegreya Sans", Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  ul,
  p {
    margin-bottom: 1em;
  }

  ul:last-child,
  p:last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Amatic SC", Helvetica, sans-serif;
  }

  img {
    max-width: 100%;
    vertical-align: bottom;
    width: 100%;
  }

  img + img {
    margin-top: ${window.config.itemPadding}px;
  }

  a,
  .hyperlink {
    color: #919191;
    cursor: pointer;
    text-decoration: underline;
  }

  a.active {
    text-decoration: none;
    opacity: .7;
  }

  li {
    margin: 0 0 .5em 1em;
  }

  nav ul {
    list-style: none;
  }

  nav li {
    margin: 0;
  }

  blockquote {
    border-left: 2px solid #5e6661;
    margin: 15px 0;
    padding-left: 18px;
  }

  blockquote:last-child {
    margin-bottom: 0;
  }
`
