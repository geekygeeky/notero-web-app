import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ArrowUp } from "lucide-react";
import logo from "/logo.svg";
import iMacYellow from "@/assets/imac-yellow.svg";
import imgEditor from "@/assets/home-page-img-editor.svg";
import imgCta from "@/assets/home-page-img-cta.svg";
import imgPomo from "@/assets/home-page-img-pomo.svg";

function Home() {
  return (
    <>
      <nav className="container flex m-auto py-10 px-6 md:px-0">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Notero logo" />
          <Link to="/" className="font-bold text-lg">
            Notero
          </Link>
        </div>

        <div className="ml-auto flex gap-4 items-center">
          <Link to="/login">Login</Link>

          <Button
            asChild
            className="bg-[#F3D468] hover:bg-[#F3D468] text-black rounded-4xl"
          >
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </nav>

      <div className="mt-0 md:mt-8 flex flex-col justify-center items-center gap-12">
        <div className="px-8">
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-center font-extrabold">
            Your simple Workspace <br className="hidden md:block" /> for{" "}
            <br className="hidden md:block" />
            Writing & Planning
          </h1>
          <p className="mt-4 md:mt-8 text-center text-base md:text-xl">
            Write your essays & documents efficiently. <br /> Get more done with
            pomodoro timer and nature sounds to help you focus.{" "}
          </p>
        </div>

        <img src={iMacYellow} alt="imac image" className="mt-0 xl:mt-24 px-8" />

        <div className="mb-0 md:mb-2 px-8">
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-center font-extrabold">
            A productivity tool <br /> you can trust.
          </h1>
          <p className="mt-4 md:mt-8 text-center text-base md:text-2xl">
            Be your most productive self with our tools
          </p>
        </div>

        <div className="mb-2 px-8">
          <img src={imgEditor} alt="imac image" />
          <img src={imgCta} alt="imac image" className="mt-6 md:mt-9" />
        </div>

        <div className="mt-0 md:mt-2 xl:mt-8 mb-0 md:mb-2 px-8">
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-center font-extrabold">
            Dark Mode to protect <br /> your eyes.
          </h1>
          <p className="mt-4 md:mt-8 text-center text-base md:text-2xl">
            Switch to dark mode to enable you work longer.
          </p>
        </div>

        <img src={imgPomo} alt="imac image" className="px-8" />
      </div>

      <section className="mt-16 flex flex-col items-center justify-center bg-[#FFF5CC] relative overflow-hidden py-12 md:py-24">
        {/* Abstract shapes */}
        <div className="absolute -top-8 -left-12 md:-left-10 w-24 h-40 md:w-36 md:h-60 bg-white opascity-50 rounded-4xl transform -rotate-12"></div>
        <div className="absolute -top-2 left-0 md:left-4 w-24 h-24 md:w-36 md:h-36 bg-[#FFFFFF85] opascity-50 rounded-4xl transform -rotate-24"></div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-16 -right-30 md:-right-20 w-60 h-22 md:h-30 bg-[#FFD15A52] opascity-50 rounded-4xl transform rotate-20"></div>
        <div className="absolute -bottom-24 -right-24 md:-right-6 w-64 h-24 md:h-30 bg-[#FFFFFF85] opascity-50 rounded-4xl transform rotate-18"></div>

        {/* Main Content */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Ready to be <br /> more productive
        </h1>

        {/* Button */}
        <Button
          asChild
          className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          <Link to="/login">Get Started</Link>
        </Button>
      </section>

      <footer className="bg-[#0B0D17] flex flex-col md:flex-row justify-between md:items-center gap-y-12 py-12 md:py-24 px-8 md:px-32 text-[#EEEFF4] m-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Notero logo" />
          <Link to="/" className="font-bold text-lg">
            Notero
          </Link>
        </div>

        <div className="flex justify-between items-end gap-16">
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/login">Login</Link>
            <Link to="/">X (Twitter)</Link>
            <Link to="/">Instagram</Link>
          </div>

          <div className="flex flex-col gap-6 text-sm">
            <Link to="/" className="flex items-center gap-1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <ArrowUp size={18} /> <span>Back to top</span>
            </Link>
            <p>&copy; Notero {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
