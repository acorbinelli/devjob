import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import Layout from "components/Layout";
import { theme } from "./theme";
import { Routes, Route } from "react-router-dom";
import Homepage from "Pages/Homepage";
import Showcase from "Pages/Showcase";
import About from "Pages/About";
import Contact from "Pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
