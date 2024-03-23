import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
   
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Intern",
      company_name: "SymphonyTech ",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2022 - September 2022",
      points: [
        " Worked on Evaluation of Failure Rate of Lifting Tackle Based on Monte Carlo Simulation",
        "Used python",
         ],
    },
    {
      title: "App Developer",
      company_name: "Team_Karn",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2023",
      points: [
        "Participated in Smart India Hackathon",
        "Created app based audiometer",
        ],
    },
    {
      title: "Virtual Internship",
      company_name: "Oasis Infobyte",
      icon: shopify,
      iconBg: "#383E56",
      date: "December 2023-January 2024",
      points: [
        "Created 3 web sites",
        "1st website was portfolio using html, css and javascript.",
        "2nd website was a landing page of travelling website.",
        "3rd website was a temperature converter website.",
      ],
    },
    {
      title: "Research intern",
      company_name: "Pimpri Chinchwad College of Engineering",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Published research paper",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tic-Tac-Toe Game",
      description:
        "Tic Tac Toe game implemented in HTML, CSS, and JavaScript. The game allows two players to take turns making moves and checks for a winner or a draw after each move.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MohiniMehta",
    },
    {
      name: "Alumni-Connect",
      description:
        "This is a Alumni Connect website implemented in html, css, javascript, php and MySQL, where students can connect to alumni. They can also discuss various topics in group discussion.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MohiniMehta",
    },
    {
      name: "Catalog App",
      description:
        "Flutter-based shopping app, reminiscent of Amazon. Users can seamlessly sign in, explore a vast array of products, and effortlessly manage their selections by adding items to the shopping cart.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
       
      ],
      image: jobit,
      source_code_link: "https://github.com/MohiniMehta",
    },
    {
      name: "HouseJoy",
      description:
        "This is a C++ home maintenance system with file handling, hashing, and secure data practices, allowing users to manage data based on profession and region-specific pin codes.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MohiniMehta",
    },
    {
      name: "To-Do",
      description:
        "Smart Todo app designed using MERN to help you organize your tasks efficiently. This app allows you to list your tasks, mark them as completed, and delete them when you're done.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Expressjs",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MohiniMehta",
    },
    {
      name: "App Based Audiometer",
      description:
        "App Based audiometer using Flutter. This app detects the hearing loss and is helpfull in mass testing.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/MohiniMehta",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };