import Layout from "./components/Layout";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <center>
        <div className="flex flex-col md:max-w-sm w-screen h-screen  ">
          <Layout />
        </div>
      </center>
    </ThemeProvider>
  );
}

export default App;
