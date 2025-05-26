import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experence from "@/components/experence";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Porfolio from "@/components/porfolio";
import Service from "@/components/service";
import Testimonials from "@/components/testimonials";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <Introduction />
      <AboutMe/>
      <Experence/>
      <Service />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
