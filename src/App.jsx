import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Client from "./routes/client/";

const App = () => {
  return (
    <>
        <ScrollToTop />
        <Client />
         <WhatsAppButton />
    </>
  );
};

export default App;
