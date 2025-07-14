import { lazy, Suspense } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Herosection/HeroSection";
const Feature1 = lazy(() => import("../components/Features/Feature1/Feature1"));
const Feature2 = lazy(() => import("../components/Features/Feature2/Feature2"));
const Feature3 = lazy(() => import("../components/Features/Feature3/Feature3"));
import ErrorBoundry from "../utils/ErrorBoundry";
const Home = () => {
  return (
    <div className="max-w-[1600px] m-auto">
      <NavBar />
      <div className="pt-[80px] w-full">
        <HeroSection />
        <ErrorBoundry>
          <Suspense
            fallback={
              <div className="min-h-screen flex justify-center items-center uppercase text-4xl text-white font-bold bg-[#260F3B]">
                loading...
              </div>
            }
          >
            <Feature1 />
            <Feature2 />
            <Feature3 />
          </Suspense>
        </ErrorBoundry>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
