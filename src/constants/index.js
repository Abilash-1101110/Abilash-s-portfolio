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
    carrent,
    jobit,
    tripguide,
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
      title: "MachineLearning Developer",
      icon: web,
    },
    {
      title: "AI Researcher",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer",
      icon:creator,
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
      title: " IoT & Computer Vision intern",
      company_name: "Sparks Foundation",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Developing and maintaining Computer vision applications and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-Platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Sri Manakula Vinayagar Engineering College ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: ["Algorithmic Advancements: Spearheaded research initiatives in Optical Character Recognition (OCR), contributing to the development of advanced algorithms that enhance character recognition accuracy. Explored cutting-edge techniques such as deep learning and neural networks to improve OCR performance.",
              "Multilingual OCR Solutions: Explored and implemented solutions to make OCR technology more inclusive by developing multilingual capabilities. Investigated the challenges of recognizing diverse scripts and languages, leading to the creation of OCR models capable of handling a broader range of textual content.",
              "Document Layout Analysis: Pioneered research in document layout analysis within OCR, focusing on extracting structured information from complex documents. Developed algorithms to accurately identify and interpret diverse document layouts, improving the overall efficiency of information extraction processes.",
              "Integration of OCR with Emerging Technologies:** Explored the integration of OCR with emerging technologies such as augmented reality or natural language processing. Investigated ways to enhance user experiences and extract valuable insights by combining OCR capabilities with other cutting-edge technologies, paving the way for innovative applications in various domains."
        
      ],
    },
    {
      title: "Undergrads",
      company_name: "Sri Manakula Vinayagar Engineering College",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2021 - Jan 2025",
      points: [
        "Academic Excellence in AI and Data Science: Maintained a stellar academic record with a CGPA of 8.0, showcasing a strong grasp of fundamental and advanced concepts in Artificial Intelligence (AI) and Data Science. Achievements reflect a commitment to excellence in coursework, projects, and examinations.",
        "Practical Application of AI Techniques: Applied theoretical knowledge to real-world scenarios, engaging in hands-on projects that demonstrate proficiency in implementing AI and Data Science techniques. Successfully executed projects in areas such as machine learning, data analysis, and predictive modeling.",
        "Collaborative Problem Solving: Thrived in collaborative environments, actively participating in team projects that demanded interdisciplinary skills. Demonstrated effective communication and teamwork in solving complex problems, reflecting adaptability and versatility in approaching challenges in AI and Data Science.",
        "Continuous Learning and Adaptability: Showcased a commitment to staying current with the rapidly evolving field of AI and Data Science. Engaged in continuous learning through self-directed study, workshops, and participation in relevant conferences, emphasizing adaptability to emerging technologies and methodologies.",
      ],
    },
    {
      title: "Higher Secondary School Certificate",
      company_name: "Aditya Vidyashram Residential School",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2019-June 2021",
      points: [
         "Academic Excellence:Achieved a commendable 88% in the Higher Secondary Certificate (HSC) examinations under the biology group, reflecting a strong commitment to academic excellence.",
         "Specialization in Biology:Demonstrated proficiency in the biological sciences, showcasing a deep understanding of subjects such as biology, chemistry, and physics, which form the core of the biology group curriculum.",
         "Research and Practical Application: Engaged in practical applications of biological concepts, highlighting a hands-on approach to learning. Involved in research projects, showcasing a keen interest in exploring the practical aspects of biology.",
        "Holistic Development:Balancing academic achievements with extracurricular activities, fostering a holistic development approach. Demonstrated leadership, teamwork, and communication skills through participation in school clubs, events, or community service."
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Squid Game",
      description:
      "Dive into the mesmerizing world of Squid Game, brought to life with cutting-edge graphics and immersive gameplay using Three.js technology. Navigate through challenging puzzles, intense competitions, and gripping moments that capture the essence of the popular TV series. Experience the thrill of survival in this visually stunning and dynamically interactive Three.js-powered Squid Game adaptation.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Abilash-1101110/SqidGame",
    },
    {
      name: "Netflix Movie Recommender",
      description:
        "Discover your next favorite movie with the Netflix Movie Recommender – a smart, AI-driven tool that uses TMDB dataset and NLP, delivering a curated selection of films that match your tastes perfectly. Elevate your streaming experience and uncover hidden gems effortlessly with the Netflix Movie Recommender ",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "TMDB Dataset",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Abilash-1101110/Netflix-Movie-Recommender-System",
    },
    {
      name: "Game Automation Using HandGesture",
      description:
        "Elevate your gaming experience with cutting-edge automation using hand gestures. Immerse yourself in a hands-free gaming environment where intuitive gestures control your every move. Say goodbye to traditional controllers as your actions come to life through seamless and responsive hand gesture automation technology",
      tags: [
        {
          name: "opencv",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "MediaPipe",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Abi-01001011/Game-Automation-Using-HandGesture",
    },
  ];
  
  export { services, technologies, experiences, projects };