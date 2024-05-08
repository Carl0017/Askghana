import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import "./assets/styles/App.scss";
import Illus1 from "./assets/images/askGhanaa-hp01.svg";
import ProgramCards from "./components/ProgramCards";
import MenstrualIllus from "./assets/images/askGhanaa-p01.jpg";
import HealthIllus from "./assets/images/askGhanaa-p02.jpg";
import RecomendIllus from "./assets/images/askGhanaa-p03.jpg";
import About from "./assets/images/askGhanaa.about.svg";
import Partners from "./components/Partners";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div id="contentWrapper">    
          <div id="textCon">
            <h1>
              ADVOCATES FOR SYNERGY & KNOWLEDGE SHARING, GHANA ORGANIZATION
              PROFILE
            </h1>
            <p>
            To become a leading advocacy organization that socio-economically empowers the marginalized in Ghana.

            </p>

            <button id="donateBtn">
               <Link to="/Donation" style={{color: "#fff", textDecoration:"none"}}> DONATE NOW </Link>
            </button>
          </div>

          <div id="illusCon">
            <img src={Illus1} alt="Homepage Illustration" />
          </div>
        </div>
      </div>

      <div className="programWrapper">
        <div id="programText">
          <h1>What We Do</h1>

          <p>
            Its our mission to create positive change and improve the lives of
            the most vulnerable members of society
          </p>
        </div>

        <div id="programCards">
          <ProgramCards
            backgroundImage={MenstrualIllus}
            title="MENSTRUAL PAD DRIVE "
            description="The ASK Ghana Menstrual Pad Drive is a successful initiative targeting period poverty in schools and market spaces. It raises menstrual health awareness and enhances girls' educational opportunities, aiming to reduce absenteeism and dropout rates. 12 pad banks have been established benefiting over 2400 direct and indirect beneficiaries."
          />
          <ProgramCards
            backgroundImage={HealthIllus}
            title="HEALTH INSURANCE REGISTRATION"
            description="ASK Ghana's initiative empowers vulnerable individuals to access essential healthcare services by enrolling children and people with disabilities in the National Health Insurance Scheme (NHIS). Health education is conducted to raise awareness about the significance of accessing formal medical care and preventable mortalities. Over 2280 people have been enrolled by ASK Ghana. "
          />
          <ProgramCards
            backgroundImage={RecomendIllus}
            title="HEALTH SCREENING AND RECOMMENDATIONS"
            description="ASK Ghana conducts free health screening and offers advice for vulnerable individuals based on the screening results. Over 400 people have been screened under this project for health risks such as blood pressure, cancers, blood sugar levels, malaria, diet, and other relevant factors."
          />
        </div>
      </div>

      <div className="about">
        <img src={About} alt="About AskGhanaa" />

        <div className="aboutText">
          <span>ABOUT ASK GHANA</span>
          <h1> an NGO dedicated to creating positive change.</h1>
          <p>
            Through our collective efforts and unwavering commitment, we strive
            to build a more equitable and inclusive Ghana for all. As an NGO,
            our dedication lies in ensuring that these vulnerable groups have
            access to the necessary resources, support, and opportunities for
            growth and advancement. Through our initiatives, we strive to foster
            inclusive and sustainable development, promoting equality and
            empowerment for all.
          </p>

          <button>
            <Link to="/About" style={{color: "#036803", textDecoration:"none"}}>Learn More</Link>
          </button>
        </div>
      </div>
      <Numbers />
      <div className="PartnersWrapper">
      <h1>OUR PARTNERS</h1>
      <Partners />
      </div>

      <div className="wrap">
      <Footer />
      </div>

     
    </>
  );
}

export default App;