import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import AuthLayout from "./layouts/Auth";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CompleteSignup from "./pages/auth/CompleteSignup";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          {<Route path="register" element={<Signup />} />}
          {<Route path="/register/complete" element={<CompleteSignup />} />}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
