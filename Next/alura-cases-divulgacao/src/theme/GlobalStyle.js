export default function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body {
        color: blue;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
  );
}
