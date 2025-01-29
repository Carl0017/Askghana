import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import "./About.scss";
import Footer from "../../components/Footer";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const text = `<p>ASK Ghana is an NGO dedicated to creating positive change and improving the lives of the most vulnerable members of society. Through our collective efforts and unwavering commitment, we strive to build a more equitable and inclusive Ghana for all.

  As an NGO, our dedication lies in ensuring that these vulnerable groups have access to the necessary resources, support, and opportunities for growth and advancement.
  
  Through our initiatives, we strive to foster inclusive and sustainable development, promoting equality and empowerment for all. We believe in the power of small steps to make a significant impact on the lives of those who need it most.
  
  We focus on implementing practical and meaningful interventions that address immediate needs and contribute to long-term positive change within communities and schools.
  
  We are driven by passion, motivation, and empathy, with a strong commitment to humanitarian values. We strive to be resourceful, innovative, and forward-thinking in our approach, dedicated to making a positive impact on the lives of the vulnerable.</p>`;

  return (
    <>
      <div className="About">
        <div className="overlay"></div>

        <div className="content">
          <Navbar />

          <div>
            <h1>About AskGhana</h1>
          </div>

          <div className="extra">
            <br></br>
          </div>
        </div>
      </div>

      <div className="aboutCon">
        <h1>Welcome To Ask Ghana </h1>

        <p
          style={{ display: "inline-block" }}
          dangerouslySetInnerHTML={{
            __html: showMore ? text : `${text.slice(0, 100)}...`,
          }}
        ></p>
        {!showMore && (
          <span
            onClick={toggleShowMore}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Read more
          </span>
        )}

        <p style={{ marginTop: "1.5rem" }}>
          <b>VISION: </b>
          To become a leading advocacy organization that socio-economically
          empowers the marginalized in Ghana.
        </p>

        <p>
          <b>MISSION: </b>
          ASK Ghana is committed to empowering marginalized communities and
          people through capacity building, advocacy, and support initiatives to
          enhance livelihoods, health, and education, while fostering self-help
          and community involvement.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;
