import React from 'react';
import image1 from '../../public/images/1.png';  // Add this line
import image2 from '../../public/images/image2.png';  // Add this line



const Project = ({ title, company, logoSrc, description, imageSrc, imageOnRight }) => (
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
    {imageSrc && ( // Only render the image if imageSrc is defined
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        marginLeft: '5vw'
      }}>
        <img src={imageSrc} alt={title} style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '5px',
        }} />
      </div>
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
        description="As the first mechanical lead in the Autonomous subteam, I was tasked with creating a system that can mimic human braking.
         It took over a year, several iterations, and countless hours to bring this pnuematic-hydraulic system from concept to creation. The system can fully engage the disk brakes in under 500ms,
         providing upwards of 1kN of braking force. It is placed in parallel to the existing brake pedal, retaining driver capacities, and thus allowing for safe testing procedures "
        imageSrc={image1}
        imageOnRight={true}
      />

      <Project
        title="Autonomous Steering System"
        company="Formula Electric @ Berkeley"
        description="To go along with the Autonomous Braking System, I spearheaded design and development of an Autonomous Steering System. 
        The MPC node would give the mechanical systems node a steering angle, from there the a powerful servo motor provides the necessary torque 
        on the steering column via a belt reduction. PID was implemented on top of the servo motor's internal controls, but was effectively scrapped after both controllers
        resulted in too much noise. The biggest challenge in this project was ensuring FSAE Germany packaging rules; as such, a clever space-efficient mounting method was devised."
        imageSrc={image2}
        imageOnRight={true}
      />

      <Project
        title="Wash System Validation and Characterization"
        company="Zoox"
        logoSrc="https://seeklogo.com/images/Z/zoox-logo-E439FC4905-seeklogo.com.png"
        description="This past summer, I designed a hydraulic circuit to meet external cleanability standards for LiDARs and Cameras.
         To influence design decisions, I created a fairly accurate 1-D simulation. On CATIAv6, I designed all fixtures and manufactured said fixtures using various methods."
        imageOnRight={true}
      />
       <Project
        title="Water Contact Angle Automated Measurement Tool"
        company="Zoox"
        logoSrc="https://seeklogo.com/images/Z/zoox-logo-E439FC4905-seeklogo.com.png"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageOnRight={false}
      />
      <Project
        title="CFD Prototyping and Validation"
        company="Kelly Slater Wave Co. (World Surf League)"
        logoSrc="https://kswaveco.com/assets/img/svg/KSWC_logo.svg"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={true}
      />
            <Project
        title="Cross Shore Wind-Induced Changes to Wave Shape"
        company="Kelly Slater Wave Co. (World Surf League)"
        logoSrc="https://kswaveco.com/assets/img/svg/KSWC_logo.svg"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={false}
      />
      <Project
        title="Scenario-Based Traffic Analysis in San Jose, CA"
        company=""
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={true}
      />
      <Project
        title="Predicting Bee Colony Success with ML"
        company=""
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={false}
      />

      <Project
        title="Wind Turbine Optimized for Power and Stiffness"
        company=""
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={true}
      />

      <Project
        title="Project 6"
        company="Company 6"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={false}
      />
    </div>
  );
}
