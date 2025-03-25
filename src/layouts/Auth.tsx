import { Link, Outlet } from "react-router";
import logo from "/logo.svg";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/theme";
import { SunMoon, Eclipse } from "lucide-react";

export default function AuthLayout() {
  const { setTheme, theme } = useTheme();

  const changeTheme = (isChecked: boolean) => {
    if (isChecked) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <div>
      <nav className="container flex m-auto py-10 px-6 md:px-0">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Notero logo" />
          <Link to="/" className="font-bold text-lg">
            Notero
          </Link>
        </div>

        <div className="ml-auto flex gap-4 items-center">
          <SunMoon />
          <Switch
            className="cursor-pointer"
            checked={theme === "dark"}
            onCheckedChange={changeTheme}
          />
          <Eclipse fill="dark" />
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
