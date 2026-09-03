/**
 * Site content. This is the only file you need to edit for everyday changes:
 * name, tagline, bio, contact info, nav, career, projects, blog posts, photos.
 *
 * Text is wrapped in `backticks`, so apostrophes, quotes and dashes are all
 * safe to type. Use backticks for any new text you add.
 *
 * Images: drop the file in src/images/ and reference it here by filename.
 * Gatsby optimizes and resizes it automatically.
 */

const config = {
  // ---------------------------------------------------------------- identity
  name: `Santiago Hopkins`,
  tagline: `mechanical engineering, robotics, etc.`,

  // Browser tab title on the home page. Other pages use "name — nav label".
  siteTitle: `santeago`,

  // Filename in src/images/ (leave empty to hide the portrait).
  // Generated from me.jpeg by scripts/crop-photo.js — see that file to re-run
  // with a different zoom or focal point.
  photo: 'me-cropped.jpg',

  // Intro text on the home page. Press Enter twice for a new paragraph,
  // once for a single line break. Indentation is ignored.
  bio: [
    `Hey! I just graduated about a year ago and am now building things full time at Zoox in San Mateo, CA.  My main interest lies in acutuator design on both a mechanical and system level. 
    
    I find it particularly interesting how humans get around a city and yearn for the time where self-driving vehicles have largely replaced car owernship.
    
    When im not building things, I may be hanging with friends or non-performatively reading. 
    
     `,
  ],

  // ----------------------------------------------------------------- contact
  email: 'santiagoahopkins@gmail.com',
  phone: '(818) 383-5442',
  // What the phone link dials. Defaults to the digits of `phone`.
  phoneHref: '+18183835442',

  // Extra links shown next to the email/phone, e.g.
  // { label: `GitHub`, href: 'https://github.com/santiagohopkins' }
  links: [],

  footer: `© 2025 Santiago Hopkins`,

  // --------------------------------------------------------------------- nav
  // Order and labels of the top nav. Delete a line to remove that page.
  nav: [
    { path: '/', label: `Home` },
    { path: '/projects', label: `Projects` },
    { path: '/career', label: `Career` },
    { path: '/blog', label: `Blog` },
    { path: '/photos', label: `Photos` },
  ],

  // ------------------------------------------------------------------ career
  // Reverse-chronological. The role dated "Present" is highlighted on the
  // page; add `current: true` (or false) to an entry to override that.
  career: [
    {
      title: `Mechanical Engineer`,
      company: `Zoox`,
      dates: `Jul 2025 – Present`,
    },
    {
      title: `B.S. Mechanical Engineering`,
      company: `University of California, Berkeley`,
      dates: `May 2025`,
    },
    {
      title: `Robotics Engineering Intern`,
      company: `Triton Medical Robotics`,
      dates: `Jan 2025 – Apr 2025`,
    },
    {
      title: `Mechatronics Engineering Intern`,
      company: `Zoox`,
      dates: `May 2024 – Aug 2024`,
    },
    {
      title: `Engineering Intern`,
      company: `World Surf League`,
      dates: `May 2023 – Dec 2023`,
    },
    {
      title: `Co-Founder & Lead, Robotics (Mechanical)`,
      company: `FSAE Driverless at Berkeley`,
      dates: `Jan 2023 – Sep 2024`,
    },
  ],

  // ---------------------------------------------------------------- projects
  // company, image and imageAlt are optional.
  projects: [
    {
      title: `Autonomous Braking System`,
      company: `Formula Electric @ Berkeley`,
      description:
        `Designed and built a pneumatic brake booster to be put in parallel to brake circuit and thus unlocking autonomous braking. Didn't work too well. 
        
        If I were to run it back I would just add another circuit on top of the main driver actuated one. `,
      image: 'image2.jpeg',
      imageAlt: `Autonomous Braking System`,
    },
    {
      title: `Autonomous Steering System`,
      company: `Formula Electric @ Berkeley`,
        description:
        `Servo actuated steering column. Belt drive with high precision, high torque planetary gearbox integrated motor. 
        
        No hard stops.` , 
      image: 'image2.PNG',
      imageAlt: `Autonomous Steering System`,
    },
    {
      title: `Sensor Cleaning Design and Test`,
      company: `Zoox`,
      description:
      `Designing novel hydro-pnuematic systems to keep Zoox's sensors squeaky clean`,
    },
    {
      title: `Water Contact Angle Automated Measurement Tool`,
      company: `Zoox`,
      description:
      `Designed and built internal software tool to accurately determine hydrophobic coating performance.
      
      Important for Zoox's sensors`
    },
    {
      title: `CFD Prototyping and Validation`,
      company: `Kelly Slater Wave Co. (World Surf League)`,
      description: `Super cool team, even cooler product.`,
      image: 'ksw2.png',
      imageAlt: `CFD Prototyping and Validation`,
    },
  ],

  // -------------------------------------------------------------------- blog
  // Posts live in the /blog directory, not here. Drop in a .md file and it
  // shows up, newest first. See blog/hello-world.md for the format.

  // Shown when /blog is empty.
  blogEmptyText: `Writing, soon.`,

  // ------------------------------------------------------------------ photos
  // Photos live in the /photos directory, not here. Drop in an image and it
  // shows up. The filename becomes the alt text, and files are ordered by
  // name (descending), so a date or number prefix controls the order.
};

export default config;
