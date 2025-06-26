import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experence from "@/components/experence"; 
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Learnings from "@/components/learnings";
import Porfolio from "@/components/porfolio"; 
import Service from "@/components/service";
import Navbar from "@/components/ui/Navbar"; 


export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <div id="home"> 
        <Introduction />
      </div>
      <AboutMe/>
      <Experence/>
      <div id="services"> 
        <Service />
      </div>
      <div id="portfolio"> 
        <Porfolio />
        <Learnings />
      </div>
      <div id="contact"> 
        <Contact />
      </div>
      <Footer />
    </main>
  );
}