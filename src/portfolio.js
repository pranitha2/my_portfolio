/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation

};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pranitha Biyyani",
  title: "Hi all, I'm Pranitha",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Pher5rdjUueciRnXLo3fLVFRWaFsvuL0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pranitha2",
  linkedin: "https://www.linkedin.com/in/pranitha22/",
  gmail: "pranitha922@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
      
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
   
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-django"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of central missouri",
      logo: require("./assets/images/UCMLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "january 2023 - may 2024",
      
    },
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "consultadd inc",
      companylogo: require("./assets/images/consultaddlogo.png"),
      date: "June 2021 – Dec 2022",
      desc: "Responsible for creating, maintaining, and improving software applications, ensuring they meet the needs of users .",
      descBullets: [
        "Requirements Analysis",
        "Version Control",
        "Design and Architecture",
        "Coding and Implementation:"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Machine learning",
      subtitle:
        "Attended Machine learning workshop in IIT kanpur ",
      image: require("./assets/images/iitkanpurlogo.png"),
      imageAlt: "iitkanpur Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12P_Jf8lOfj72phwzqIT3w16qHe0KDhuH/view?usp=sharing"
        },

      ]
    },
   
    {
      title:"AWS certified Solution Architect",
      subtitle:
        "Completed certification from Amazon web services.",
      image: require("./assets/images/awslogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS certified Solution Architect",
          url: "https://drive.google.com/file/d/1wVzxvK7ErTynlVndkLPZwH0yp78ZT5Yj/view?usp=sharing"
        }
      ]
    },

    {
      title: " Oxford Achiever",
      subtitle: "Completed Certifcation from oxford for english language profeciency",
      image: require("./assets/images/oxford1.png"),
      imageAlt: "oxford Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1lKqMC8MFEqLa-cozTiydPDMwyh_psdru/view?usp=sharing"},

      ]
    },
    {
      title: " Data Science using Python",
      subtitle: "Completed Certifcation from COURSERA for introduction to Data Science using Python ",
      image: require("./assets/images/courseralogo.png"),
      imageAlt: "coursera Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/17wIYN8bXqiFaY0a70RN57aKDIcm8dTpb/view?usp=sharing"},
      ]
   },
   {
    title: " Embedded Hardware and Operating Systems",
    subtitle: "Completed Certifcation from coursera for mbedded Hardware and Operating Systems",
    image: require("./assets/images/courseralogo.png"),
    imageAlt: "coursera Logo",
    footerLink: [
      {name: "Certification", url: "https://drive.google.com/file/d/1936cQDHU_xolmOoBJwoUJdxZGFYf-kOs/view?usp=sharing"},
     
    ]
 },
 {
  title: " Cybersecurity and the Internet of Things",
  subtitle: "Completed Certifcation from coursera for Cybersecurity and the Internet of Things",
  image: require("./assets/images/courseralogo.png"),
  imageAlt: "coursera Logo",
  footerLink: [
    {name: "Certification", url: "https://drive.google.com/file/d/1M0uQ1K0oA_MW29kaUFWJhnp3iV3TKHak/view?usp=sharing"},
  
  ]
},
{
  title: " The Raspberry Pi Platform and Python Programming for the Raspberry Pi",
  subtitle: "Completed Certifcation from coursera for The Raspberry Pi Platform and Python Programming for the Raspberry Pi",
  image: require("./assets/images/courseralogo.png"),
  imageAlt: "coursera Logo",
  footerLink: [
    {name: "Certification", url: "https://drive.google.com/file/d/1munfJR_Z42Iooa3goietBZlbPCo7Cg7J/view?usp=sharing"},
    
  ]
},
{
  title: "  C++ For C Programmers, Part A",
  subtitle: "Completed Certifcation from coursera for C++ For C Programmers",
  image: require("./assets/images/courseralogo.png"),
  imageAlt: "coursera Logo",
  footerLink: [
    {name: "Certification", url: "https://drive.google.com/file/d/15C_x4E72motMC5qR_m8HgpO2vsQ8t9HE/view?usp=sharing"},
   
  ]
},
{
  title: "   Write Professional Emails in English ",
  subtitle: "Completed Certifcation from coursera for Write Professional Emails",
  image: require("./assets/images/courseralogo.png"),
  imageAlt: "coursera Logo",
  footerLink: [
    {name: "Certification", url: "https://drive.google.com/file/d/15j5muDxQ61MmCHVMSwfpc-wOZBi2MxaD/view?usp=sharing"},
   
  ]
}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 - 9137096674",
  email_address: "pranitha922@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
