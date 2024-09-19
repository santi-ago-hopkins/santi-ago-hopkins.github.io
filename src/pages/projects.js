import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Project = ({ title, company, logoSrc, description, imageOnRight, imageSrc }) => (
  <div style={{
    display: 'flex',
    flexDirection: imageOnRight ? 'row' : 'row-reverse',
    margin: '40px 0',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
  }}>
    <div style={{
      flex: 1,
      padding: '0 20px',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontFamily: 'Montserrat, sans-serif',
        marginBottom: '5px',
      }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        {logoSrc && (
          <img src={logoSrc} alt={`${company} logo`} style={{
            width: '26px', // Adjust size as needed
            height: 'auto',
            marginRight: '10px',
            borderRadius: '1px',
          }} />
        )}
        {company && (
          <h3 style={{
            fontSize: '1.2rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#666',
          }}>{company}</h3>
        )}
      </div>
      <p style={{
        fontSize: '1rem',
        fontFamily: 'Montserrat, sans-serif',
        lineHeight: '1.6',
      }}>{description}</p>
    </div>
    
    {/* Render StaticImage only if it exists */}
    {imageSrc ? (
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        marginLeft: '5vw'
      }}>
        {imageSrc}
      </div>
    ) : (
      <div style={{ flex: 1 }} /> // Empty div to maintain layout
    )}
  </div>
);

export default function Projects() {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
        marginBottom: '40px',
      }}></h1>

      <Project
        title="Autonomous Braking System"
        company="Formula Electric @ Berkeley"
        description="As the first mechanical lead in the Autonomous subteam, I was tasked with creating a system that can mimic human braking. It took over a year, several iterations, and countless hours to bring this pneumatic-hydraulic system from concept to creation. The system can fully engage the disk brakes in under 500ms, providing upwards of 1kN of braking force. It is placed in parallel to the existing brake pedal, retaining driver capacities and thus allowing for safe testing procedures."
        logoSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARcVbhWvbH1Atxwqm3WeSHiJpuI79mws7_Q&s'
        imageOnRight={true}
        imageSrc={<StaticImage src="../images/image2.jpeg" alt="Autonomous Braking System" style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} />}
      />

      <Project
        title="Autonomous Steering System"
        company="Formula Electric @ Berkeley"
        description="To complement the Autonomous Braking System, I spearheaded the design and development of an Autonomous Steering System. The MPC node would provide a steering angle to the mechanical systems node; from there, a powerful servo motor delivers the necessary torque on the steering column via a belt reduction. PID was implemented on top of the servo motor's internal controls but was effectively scrapped after both controllers resulted in excessive noise. The biggest challenge was ensuring compliance with FSAE Germany packaging rules; thus, a clever space-efficient mounting method was devised."
        logoSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARcVbhWvbH1Atxwqm3WeSHiJpuI79mws7_Q&s'
        imageOnRight={true}
        imageSrc={<StaticImage src="../images/image2.PNG" alt="Autonomous Steering System" style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} />}
      />

      <Project
        title="Wash System Validation and Characterization"
        company="Zoox"
        logoSrc="https://seeklogo.com/images/Z/zoox-logo-E439FC4905-seeklogo.com.png"
        description="This past summer, I designed a hydraulic circuit to meet external cleanability standards for LiDARs and Cameras. To influence design decisions, I created a fairly accurate 1-D simulation. On CATIA v6, I designed all fixtures and manufactured said fixtures using various methods."
        imageOnRight={true}
      />

      <Project
        title="Water Contact Angle Automated Measurement Tool"
        company="Zoox"
        logoSrc="https://seeklogo.com/images/Z/zoox-logo-E439FC4905-seeklogo.com.png"
        description="Using Python and C++, I developed a computer vision model to accurately and consistently characterize the degradation of a hydrophobic coating on camera lenses via water contact angle measurement. I implemented libraries such as OpenCV2 and LSQ-Ellipses and designed mechanical features on CATIA v6 to enhance the measurement process. Using Gage R&R methods, I eliminated several sources of human error and achieved +/- 10° accuracy." 
        imageOnRight={true}
      />

      <Project
        title="CFD Prototyping and Validation"
        company="Kelly Slater Wave Co. (World Surf League)"
        logoSrc="https://kswaveco.com/assets/img/svg/KSWC_logo.svg"
        description='In the summer of 2023, I interned at Kelly Slater Wave Co., primarily helping develop a CFD model to accurately predict the effects of strip lights on overall wave shape and rider experience. I verified CFD results on-site by installing model strip lights and characterizing their effects on wave barrels.'
       imageOnRight={true}
       imageSrc={<StaticImage src="../images/ksw2.png" alt="CFD Prototyping and Validation" style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} />}
     />

     <Project
       title="Cross Shore Wind-Induced Changes to Wave Shape"
       company="Kelly Slater Wave Co. (World Surf League)"
       logoSrc="https://kswaveco.com/assets/img/svg/KSWC_logo.svg"
       description="In continuation of the project published in the Journal of Fluid Mechanics, I revised a crucial CFD model to account for differing wind speeds and directions."
       imageOnRight={true}
       imageSrc={<StaticImage src="../images/ksw1.png" alt="Cross Shore Wind-Induced Changes to Wave Shape" style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} />}
     />

     <Project
       title="Predicting Bee Colony Success with ML"
       company=""
       description="For the E178 course's final project, my classmates and I developed a model that accurately predicts bee colony success by assessing queen acceptance based on MFCC data acquired from several beehives."
       imageOnRight={true}
       imageSrc={<StaticImage src="../images/proj1.png" alt="Predicting Bee Colony Success with ML" style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} />}
     />

     <Project
       title="Wind Turbine Optimized for Power and Stiffness"
       company=""
       description="Designed a wind turbine as part of the final project for the E26 course. The tower was optimized for stiffness while the wind turbine was optimized for power production."
       imageOnRight={true}
       imageSrc={<StaticImage src="../images/windTurbine.png" alt="Wind Turbine Optimized for Power and Stiffness" style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} />}
     />
      
    </div>
  );
}
