import {MoralisProvider} from "react-moralis"
import "../styles/index.css";
//TODO: Fix .env bug

const appId = 'https://o46jlae5dbpr.moralishost.com:2053/server'
const serverUrl = 'xAsli0kiHP2isaYWy0KjAh90cWf6zEsXnpqyZ4Qz'

const MyApp = ({ Component, pageProps }) =>{
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
