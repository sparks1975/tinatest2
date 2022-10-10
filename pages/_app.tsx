import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "./_app.scss";

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
