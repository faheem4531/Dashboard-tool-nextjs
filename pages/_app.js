
import { AuthProvider } from "../context/auth-context";
import AuthController from "../HOC/AuthController";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <AuthController>
        <Component {...pageProps} />
      </AuthController>
    </AuthProvider>
  );
}

export default MyApp;
