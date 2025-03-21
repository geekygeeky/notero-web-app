import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}

       {/*  <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

       {/*  <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
