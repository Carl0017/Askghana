import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/We-do.scss";
import WedoCards from "../components/WedoCards";
import MenstrualIllus from "../assets/images/askGhanaa-p01.jpg";
import HealthIllus from "../assets/images/askGhanaa-p02.jpg";
import RecomendIllus from "../assets/images/askGhanaa-p03.jpg";
import IctIllus from "../assets/images/askGhanaa-ICT.jpg";
import EduIllus from "../assets/images/IMG-20240318-WA0053.jpg";
import LiveIllus from "../assets/images/IMG-20240312-WA0014.jpg";
import DisIllus from "../assets/images/IMG-20240318-WA0047.jpg";
import Footer from "../components/Footer";




function Programes() {
  return (
    <>
      <div className="What_We_Do">
        <div className="overlay"></div>

        <div className="content">
          <Navbar />

          <div>
            <h1>What We Do</h1>
          </div>

          <div className="extra">
            <br></br>
          </div>
        </div>
      </div>

      <div className="programCards">
      <WedoCards
            backgroundImage={EduIllus}
            title="EDUCATION"
            description="ASK Ghana tackles educational inequality by promoting access and offering support to students, encouraging dropouts to return through awareness campaigns held in marketplaces, bus stations, schools, and streets. Aligned with Sustainable Development Goal 4, the initiative provides essential school materials to needy students and offers basic reading and writing sessions."
          />
         
          <WedoCards
            backgroundImage={DisIllus}
            title="DISABILITY CENTERED PROJECT"
            description="Our disability-centered programs focus on achieving equity, equality, and technology inclusion across various sectors, including education, health, environment, and human development. Our initiatives aim to raise awareness about disabilities and actively address barriers to opportunities, ultimately fostering hope among individuals with disabilities. "
          />
          <WedoCards
            backgroundImage={HealthIllus}
            title="HEALTH INSURANCE REGISTRATION"
            description="ASK Ghana's initiative empowers vulnerable individuals to access essential healthcare services by enrolling children and people with disabilities in the National Health Insurance Scheme (NHIS). Health education is conducted to raise awareness about the significance of accessing formal medical care and preventable mortalities. Over 2280 people have been enrolled by ASK Ghana."
          />
           <WedoCards
            backgroundImage={MenstrualIllus}
            title="MENSTRUAL PAD DRIVE "
            description="The ASK Ghana Menstrual Pad Drive is a successful initiative targeting period poverty in schools and market spaces. It raises menstrual health awareness and enhances girls' educational opportunities, aiming to reduce absenteeism and dropout rates. 12 pad banks have been established benefiting over 2400 direct and indirect beneficiaries."
          />
          
           <WedoCards
            backgroundImage={IctIllus}
            title="ICT"
            description="We empower rural communities and schools by providing access to technology, infrastructure, and essential skills. Through the initiative, 17 computers were provided to two schools, resulting in the refurbishment of their ICT labs. This positively impacted over 820 pupils and community members."
          />
           <WedoCards
            backgroundImage={RecomendIllus}
            title="HEALTH SCREENING AND RECOMMENDATIONS"
            description="ASK Ghana conducts free health screening and offers advice for vulnerable individuals based on the screening results. Over 400 people have been screened under this project for health risks such as blood pressure, cancers, blood sugar levels, malaria, diet, and other relevant factors."
          />
           <WedoCards
            backgroundImage={LiveIllus}
            title="LIVELIHOOD"
            description="In collaboration with partner organizations, ASK Ghana implements sustainable livelihood projects for its target demographic. These initiatives aim to empower individuals to achieve self-sufficiency, thereby reducing instances of domestic abuse and self-inflicted harm resulting from poverty and idleness."
          />
        </div>

        <Footer />
    </>
  );
}

export default Programes;
