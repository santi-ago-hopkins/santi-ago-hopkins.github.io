import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Project = ({ title, company, description, imageSrc }) => (
  <div className="project-entry">
    <h2 className="project-title">{title}</h2>
    {company && <p className="project-company">{company}</p>}
    <p className="project-description">{description}</p>
    {imageSrc && <div className="project-image">{imageSrc}</div>}
  </div>
);

export default function Projects() {
  return (
    <div className="container">
      <Project
        title="Autonomous Braking System"
        company="Formula Electric @ Berkeley"
        description="As the first mechanical lead in the Autonomous subteam, I was tasked with creating a system that can mimic human braking. It took over a year, several iterations, and countless hours to bring this pneumatic-hydraulic system from concept to creation. The system can fully engage the disk brakes in under 500ms, providing upwards of 1kN of braking force. It is placed in parallel to the existing brake pedal, retaining driver capacities and thus allowing for safe testing procedures. Check out the Drive-by-Wire Docs tab for more technical details!"
        imageSrc={<StaticImage src="../images/image2.jpeg" alt="Autonomous Braking System" />}
      />

      <Project
        title="Autonomous Steering System"
        company="Formula Electric @ Berkeley"
        description="To complement the Autonomous Braking System, I spearheaded the design and development of an Autonomous Steering System. The MPC node would provide a steering angle to the mechanical systems node; from there, a powerful servo motor delivers the necessary torque on the steering column via a belt reduction. PID was implemented on top of the servo motor's internal controls but was effectively scrapped after both controllers resulted in excessive noise. The biggest challenge was ensuring compliance with FSAE Germany packaging rules; thus, a clever space-efficient mounting method was devised. Check out the Drive-by-Wire Docs tab for more technical details!"
        imageSrc={<StaticImage src="../images/image2.PNG" alt="Autonomous Steering System" />}
      />

      <Project
        title="Wash System Validation and Characterization"
        company="Zoox"
        description="This past summer, I designed a hydraulic circuit to meet external cleanability standards for LiDARs and Cameras. To influence design decisions, I created a fairly accurate 1-D simulation. On CATIA v6, I designed all fixtures and manufactured said fixtures using various methods."
      />

      <Project
        title="Water Contact Angle Automated Measurement Tool"
        company="Zoox"
        description="Using Python and C++, I developed a computer vision model to accurately and consistently characterize the degradation of a hydrophobic coating on camera lenses via water contact angle measurement. I implemented libraries such as OpenCV2 and LSQ-Ellipses and designed mechanical features on CATIA v6 to enhance the measurement process. Using Gage R&R methods, I eliminated several sources of human error and achieved +/- 10° accuracy."
      />

      <Project
        title="CFD Prototyping and Validation"
        company="Kelly Slater Wave Co. (World Surf League)"
        description="In the summer of 2023, I interned at Kelly Slater Wave Co., primarily helping develop a CFD model to accurately predict the effects of strip lights on overall wave shape and rider experience. I verified CFD results on-site by installing model strip lights and characterizing their effects on wave barrels."
        imageSrc={<StaticImage src="../images/ksw2.png" alt="CFD Prototyping and Validation" />}
      />

      <Project
        title="Cross Shore Wind-Induced Changes to Wave Shape"
        company="Kelly Slater Wave Co. (World Surf League)"
        description="In continuation of the project published in the Journal of Fluid Mechanics, I revised a crucial CFD model to account for differing wind speeds and directions."
        imageSrc={<StaticImage src="../images/ksw1.png" alt="Cross Shore Wind-Induced Changes to Wave Shape" />}
      />

      <Project
        title="Predicting Bee Colony Success with ML"
        description="For the E178 course's final project, my classmates and I developed a model that accurately predicts bee colony success by assessing queen acceptance based on MFCC data acquired from several beehives."
        imageSrc={<StaticImage src="../images/proj1.png" alt="Predicting Bee Colony Success with ML" />}
      />

      <Project
        title="Wind Turbine Optimized for Power and Stiffness"
        description="Designed a wind turbine as part of the final project for the E26 course. The tower was optimized for stiffness while the wind turbine was optimized for power production."
        imageSrc={<StaticImage src="../images/windTurbine.png" alt="Wind Turbine Optimized for Power and Stiffness" />}
      />
    </div>
  );
}
