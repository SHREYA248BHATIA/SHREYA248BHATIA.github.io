/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Shreya Bhatia",
  logo_name: "Shreya Bhatia",
  nickname: null,
  subTitle:
    "A software developer who loves to take on new projects that challenges her analytical and technological capacities.",
  resumeLink:
    "https://drive.google.com/file/d/1Nc5yuLlUlUQGVXsS_zrJyrV_Ua-3f8Jg/view?usp=drive_linkhttps://drive.google.com/file/d/1Nc5yuLlUlUQGVXsS_zrJyrV_Ua-3f8Jg/view?usp=sharing",
  portfolio_repository: "https://github.com/SHREYA248BHATIA",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SHREYA248BHATIA",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreya-bhatia-a18b841b3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link:
  //     "https://www.youtube.com/channel/UClvrUclYSGX_MZPOF6ySG6A?view_as=subscriber",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQMHkbLsCGKpwTXQWrXcqXXzkDfDVHMSQRfQpqfdZwcCxkJjkfLdWfvzRvbdjHzWQsCGKr",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008161952482",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shreya_bhatia24/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website using NextJs and React",
        "⚡ Implementing secure access to database",
        "⚡ Creating application backend in NodeJs",
        "⚡ Implementing the API integrations",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "akar-icons:nextjs-fill",
          style: {
            color: "#626262",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "tabler:brand-redux",
          style: {
            color: "#7749bd",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            color: "#3178c6",
          },
        },

        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-dark",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Excallidraw",
          fontAwesomeClassname: "vscode-icons:file-type-excalidraw",
          style: {
            color: "#c42626",
          },
        },

        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "file-icons:tailwind",
          style: {
            color: "#38bdf8",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "devicon-plain:graphql-wordmark",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "devicon:jira-wordmark",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Google domains",
          fontAwesomeClassname: "logos:google-domains-icon",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Squarespace",
          fontAwesomeClassname: "simple-icons:squarespace",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "vscode-icons:file-type-bitbucketpipeline",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Sanity",
          fontAwesomeClassname: "devicon:sanity",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "DrawIo",
          fontAwesomeClassname: "vscode-icons:file-type-drawio",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "skill-icons:cpp",
          style: {
            color: "#c42626",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "84%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React",
      progressPercentage: "90%",
    },
    {
      Stack: "NextJs",
      progressPercentage: "90%",
    },
    {
      Stack: "JavaScript",
      progressPercentage: "88%",
    },
    {
      Stack: "TypeScript",
      progressPercentage: "80%",
    },
    {
      Stack: "Redux",
      progressPercentage: "70%",
    },
    {
      Stack: "CSS/SASS",
      progressPercentage: "95%",
    },
    {
      Stack: "NodeJs",
      progressPercentage: "70%",
    },
    {
      Stack: "HTML5",
      progressPercentage: "90%",
    },
    {
      Stack: "Tailwind CSS",
      progressPercentage: "90%",
    },
    {
      Stack: "GraphQL",
      progressPercentage: "60%",
    },
    {
      Stack: "C++",
      progressPercentage: "80%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Git",
      progressPercentage: "85%",
    },
    {
      Stack: "Azure Services",
      progressPercentage: "70%",
    },
    {
      Stack: "AWS",
      progressPercentage: "60%",
    },

    {
      Stack: "MongoDB",
      progressPercentage: "60%",
    },
    {
      Stack: "MySQL",
      progressPercentage: "70%",
    },

    {
      Stack: "Visual Studio Code",
      progressPercentage: "95%",
    },

    {
      Stack: "Figma",
      progressPercentage: "75%",
    },
    {
      Stack: "DrawIo",
      progressPercentage: "90%",
    },
    {
      Stack: "Excalidraw",
      progressPercentage: "80%",
    },
    {
      Stack: "JIRA",
      progressPercentage: "85%",
    },
    {
      Stack: "Vercel",
      progressPercentage: "80%",
    },
    {
      Stack: "Google Domains",
      progressPercentage: "80%",
    },
    {
      Stack: "Squarespace",
      progressPercentage: "78%",
    },
    {
      Stack: "Bitbucket",
      progressPercentage: "80%",
    },
    {
      Stack: "Sanity",
      progressPercentage: "75%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/tasin95",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Institute of Engineering and Technology, Chandigarh",
      subtitle: "B.E. in Information Technology",
      logo_path: "aust_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "August 2019 - July 2023",
      cgpa: "9.17 / 10.00",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, CA, AI etc.",

        "⚡ Apart from this, I have done courses on Deep Learning and Full Stack Development.",
        "⚡ Achieved 5th position in my class out of 120 students",
        "⚡ Consistently earned A+ grades in key subjects such as Web Technologies, Data Structures etc.",
      ],
      website_link: "https://uiet.puchd.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Security training part-3",
      subtitle: "infosecIQ",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bQpGENoBA42FHhS9esQxPEO44qwwZS_w/view?usp=drive_link",
      alt_name: "New Zealand",
      color_code: "#000000",
    },
    {
      title: "Security training part 2",
      subtitle: "infosecIQ",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mwUhup5AY1fnnLMhm1GVkCg69wR77cfT/view?usp=sharing",
      alt_name: "Michigan University",
      color_code: "#000000",
    },
    {
      title: "Security training part 1",
      subtitle: "infosecIQ",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1R2sfumf2JROAnHmwhYC7IZV9s_RF7q0i/view?usp=sharing",
      alt_name: "Michigan University",
      color_code: "#000000",
    },

    {
      title: "Modern React Bootcamp (Hooks, Context, NextJS, Router)",
      subtitle: "Udemy",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8837d13a-5b16-49a4-ae73-dd3be124b511/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      alt_name: "Pluralsight",
      color_code: "#000000",
    },
    {
      title: "PhonePe Tech Scholars Program Awards",
      subtitle: "Crio.Do",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15a0WLg7_OPWDHA6L_MuPka1jupCMhQvg/view?usp=share_link",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "PhonePe Tech Scholars Program Certificate",
      subtitle: "Crio.Do",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RRFUNSh9Ipzr2wgY-3YlUwbbpHo1ilGM/view?usp=share_link",
      alt_name: "Pluralsight",
      color_code: "#000000",
    },
    {
      title: "FullStack Development internship",
      subtitle: "Panjab University",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Lft5SyawivIYDJHK_VCzKgyKYElFhCGh/view?usp=share_link",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "SQL",
      subtitle: "HackerRank",
      logo_path: "pluralsight_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/a8e1e2f87059",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Frontend Web Development Intern",
      subtitle: "Crudcook",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1FJtAc_9j_bJRn0BOZ9XCiOHSBMruOJQw/view?usp=share_link",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Complete 2022 Web development Bootcamp",
      subtitle: "Udemy",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f2a65b4d-817c-49bc-99e4-8aae3ff6737d/",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Problem solving",
  description:
    "As a software developer with experience of 2.5 years, I am passionate about creating innovative solutions to complex problems. I have tackled over 900 data structure and algorithm problems across multiple platforms. My knowledge in data structures, algorithms, and OOPs is extensive.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Development Engineer 2",
          company: "ProcDNA",
          company_url: "https://www.procdna.com/",
          logo_path: "codeexcel.jpg",
          duration: "July 2024-Present",
          location: "Gurugram (On site)",
          description: "",
          features: [
            "- Lead 3 junior interns, overseeing code reviews and performance management while driving innovative frontend solutions.",
            "- Developed ProcDNA’s website using NextJS and Tailwind CSS, implemented Sanity CMS, integrated Oorwin and PyjamaHR tracking systems, and hosted via Amplify and Squarespace, achieving a 90% performance boost.",
            "- Implemented intricate UI animations using the Framer Motion library, enhancing user engagement and experience across various devices like mobiles, laptops and desktops.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Development Engineer 1",
          company: "ProcDNA",
          company_url: "https://www.procdna.com/",
          logo_path: "codeexcel.jpg",
          duration: "Jan 2023 - June 2024",
          location: "Gurugram (On site)",
          description: "",
          features: [
            "- Designed and developed a website UI from scratch, continuously brainstorming and refining design ideas, including features like version control for TPPs, resulting in an 80% reduction in user manual effort.",
            "- Successfully emancipated our operations from reliance on two external vendors, assuming complete ownership of transferring all company domain records from HostGator to Squarespace seamlessly, ensuring 0 downtime of emails and website.",
            "- Spearheaded the end-to-end implementation of the Forgot Password feature with OTP authentication, from UI development to backend integration, saving 70% of user recovery time through automation and streamlined validation.",
          ],
          color: "#0879bf",
        },
        {
          title: "Frontend Developer",
          company: "Crudcook",
          company_url: "https://www.crudcook.com/",
          logo_path: "codeexcel.jpg",
          duration: "Nov 2021-Feb 2022",
          location: "Chandigarh (Remote)",
          description: "",
          features: [
            "- Executed multiple webpages for the complete responsive Playmaker website using ReactJS and styled using CSS.",
            "- Optimised code for the website, increasing user experience by 70% and integrated Shopify Admin rest API on client side to manage products.",
            "- Reduced client side bundle size by 60% by writing custom CSS to reduce external library latency like bootstrap latency.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Problem solving skills",
      experiences: [
        {
          title: "Leetcode Profile",
          company: "Leetcode",
          company_url: "https://leetcode.com/shreya_bhatia/",
          logo_path: "leetcode.png",
          duration: "",
          location: "",
          description:
            "Solved over 430 problems on coding platforms leetcode,was ranked 3,767 out of 20,877 in a global LeetCode Biweekly Contest (2022)",
          features: [],
          color: "#181717",
        },
        {
          title: "Geeks for Geeks Profile",
          company: "Geeks for Geeks",
          company_url: "https://auth.geeksforgeeks.org/user/shreya248",
          logo_path: "gfg.png",
          duration: "",
          location: "",
          description:
            "Solved over 500 problems on coding platforms geeks for geeks",
          features: [],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shreya-photo.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Programming, DSA , Web, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://medium.com/@shreya2408bhatia",
    avatar_image_path: "blog.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "House no 220, sector 8, karnal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/BE6sRSfd3Eadh1Es9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9467824220",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
