import React from 'react';

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
          <h3 style={{
            fontSize: '1.2rem',
            fontFamily: 'Montserrat, sans-serif',
            color: '#666',
          }}>{company}</h3>
        </div>
        <p style={{
          fontSize: '1rem',
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: '1.6',
        }}>{description}</p>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src={imageSrc} alt={title} style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '5px',
        }} />
      </div>
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={true}
      />

      <Project
        title="Autonomous Steering System"
        company="Formula Electric @ Berkeley"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={false}
      />

      <Project
        title="Wash System Validation and Characterization"
        company="Zoox"
        logoSrc="https://seeklogo.com/images/Z/zoox-logo-E439FC4905-seeklogo.com.png"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
        imageOnRight={true}
      />
       <Project
        title="Water Contact Angle Automated Measurement Tool"
        company="Zoox"
        logoSrc="https://seeklogo.com/images/Z/zoox-logo-E439FC4905-seeklogo.com.png"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="https://via.placeholder.com/400x300"
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
