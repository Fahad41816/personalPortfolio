import About from "../About/About";
import Contact from "../Contact/Contact";
import Herobanner from "../HeroBanner/Herobanner";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Skill from "../Skill/Skill";

 

const Home = () => {
    return (
        <div>
            <Herobanner></Herobanner>
            <About></About>
            <Skill></Skill>
            <Services></Services>
            <Portfolio></Portfolio>
            <div data-aos="fade-up">
            <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;