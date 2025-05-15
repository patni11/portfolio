const userData = {
  githubUsername: "patni11",
  name: "Shubh Patni",
  designation: "Full Stack Developer and Technical Writer",
  avatarUrl: "/shubh.jpg",
  // avatarUrl: "https://pbs.twimg.com/profile_images/1494703351149301760/GeuTvrEd_400x400.jpg",
  email: "shubhpatni2002@gmail.com",
  address: "Boston, MA, USA",
  projects: [
    {
      title: "ResMe",
      link: "https://www.resme.xyz/",
      imgUrl: "projects/resme.png",
      videoLink: "",
      description: `ResMe is a resume and cover letter builder to help you best present yourself in a competitive job market. It uses AI to fastern up tedious tasks`,
      
      techStack: ["Next.js", "TypeScript", "Zod", "MongoDB", "Next Auth", "OpenAI", "REST APIs", "Zustand", "Resend", "Tailwind"],
    },
    {
      title: "Best Ice Cream",
      link: "https://besticecream-4bhk.vercel.app/",
      imgUrl: "projects/resme.png",
      videoLink: "",
      description: `It's a fun project I built in 2 days to find the best ice cream any where in the world. Ir organizes number of reviews and total reviews in a scatterplot to help you find the best ice cream.`,
      techStack: ["Next.js", "TypeScript", "Redis", "Tailwind", "Google Maps API"],
    },
    {
      title: "Pendulum",
      link: "https://github.com/alexanderles/pendulum-superhack",
      imgUrl: "projects/pendulum.png",
      videoLink: "",
      description: `I created a new ERC-721P standard to allow experts to issue "Pendulums" to their audience. Pendulum is a platform enabling direct Q&A with industry experts via exclusive NFTs. It uses a Harberger Tax system for dynamic pricing and fair compensation, ensuring exclusive access to expert insights.`,
      techStack: ["Solidity", "TypeScript", "wagmi", "viem", "ERC-721P", "UUPS", "Harberger Tax"],
    },
    {
      title: "Norswap",
      link: "https://norswap.io/",
      imgUrl: "projects/norswap.png",
      videoLink: "https://www.youtube.com/embed/7WaZrgDp6rg",
      description: `Norswap is a personal crypto staking platform for slot staking, unstaking, claiming rewards, and tracking transaction history. It prioritizes efficiency, security, and a smooth user experience.`,
      techStack: ["Next.js", "TypeScript", "Solidity", "AWS", "Nginx", "wagmi", "viem"],
    },
    {
      title: "NEU Gym Trends",
      link: "https://neugym.com",
      imgUrl: "projects/neugym.png",
      videoLink: "https://www.youtube.com/embed/wjdjixrj2pc",
      description: "NEU Gym Trends offers real-time insights into optimal gym times using cron jobs and a database. It features a D3.js calendar for easy scheduling and OCR for simplified data entry.",
      techStack: ["Inngest", "PostgreSQL", "D3.js", "OCR", "Next.js", "TypeScript"]
    },
    {
      title: "Face ID For Mac",
      link: "https://github.com/patni11/face-id-for-mac",
      imgUrl: "projects/faceID.png",
      videoLink: "https://www.youtube.com/embed/zMbGYoQXbMU",
      description: "Face ID for Mac enables device unlocking via facial recognition using Python and Selenium. Bash scripts and Linux daemons optimize performance for a secure and user-friendly login experience.",
      techStack: ["Python", "Selenium", "Bash", "Linux Daemons", "AppleScript"],
    },
    {
      "title": "Photoshop Lite",
      "link": "https://github.com/patni11/ImgProcessing",
      "imgUrl": "projects/imageProcessing.png",
      "videoLink": "https://www.youtube.com/embed/gx6QzarcQrA",
      "description": "Photoshop Lite is a lightweight Java Swing photo editing app with essential features. It uses the Command design pattern, OOP, and MVC architecture for a dynamic, robust, and optimized experience.",
      "techStack": ["Java", "Swing", "Command Pattern", "OOP", "MVC"]
    },
    {
      "title": "Marble Solitaire CLI",
      "link": "https://github.com/patni11/ood",
      "imgUrl": "projects/MarbleSolitaire.png",
      "videoLink": "https://www.youtube.com/embed/GY0aWJIhSkc",
      "description": "Marble Solitaire CLI is a Java-based game with a command-line interface. It features customizable, resizable boards (octagon, pyramid) using the Builder pattern, OOP, and MVC for optimized gameplay.",
      "techStack": ["Java", "CLI", "Builder Pattern", "OOP", "MVC"]
    },
    {
      "title": "Nand 2 Tetris",
      "link": "https://github.com/patni11/Nand2Tetris",
      "imgUrl": "projects/nand2tetris.jpg",
      "videoLink": "https://www.youtube.com/embed/Ru48M92xSLM",
      "description": "A project documenting comprehensive notes and solutions for Part 1 of the Nand2Tetris course, covering logic gates to assembler construction. Focuses on explaining the problem-solving process for computer systems building.",
      "techStack": ["Hardware Description Language (HDL)", "Assembly Language", "Computer Architecture"]
    },
    {
      "title": "Actions",
      "link": "https://github.com/patni11/LionHack",
      "imgUrl": "projects/actions.png",
      "videoLink": "",
      "description": "Actions is an app built in 24 hours for real-time crypto insights using on-chain data. It allows users to follow wallet addresses and track their crypto trades and purchases.",
      "techStack": ["TypeScript", "React", "Cyberconnect SDK", "Etherscan API"]
    },
    {
      "title": "NEU Blockchain",
      "link": "https://github.com/patni11/NortheaternGym",
      "imgUrl": "projects/neuBlockchain.png",
      "videoLink": "",
      "description": "NEU Blockchain (previous version) was a website providing research papers and articles on blockchain advancements. It aimed to be a hub for enthusiasts and researchers. (PS: I built a previous version).",
      "techStack": ["JavaScript", "React", "Gatsby"]
    },
    {
      "title": "Verifund",
      "link": "/",
      "imgUrl": "projects/verifund.png",
      "videoLink": "https://www.youtube.com/embed/ByLqbztWMFY",
      "description": "Verifund is a smart contract program for transparent crowdfunding on the Ethereum L2 testnet. Winner of Hack Boston (Best Blockchain Solution on Telos), it allows users to verify fund destination addresses before contributing.",
      "techStack": ["Solidity", "Ethereum", "Layer 2", "Smart Contracts", "Telos"]
    },
    {
      "title": "Ambulance",
      "link": "https://github.com/patni11/Ambulance_Proj",
      "imgUrl": "projects/ambulance.png",
      "videoLink": "",
      "description": "Ambulance is a website built during Covid for booking free ambulances. Users submit a form, drivers confirm, and users receive SMS notifications via Twilio.",
      "techStack": ["Python", "Django", "HTML", "CSS", "Twilio API"]
    },
    {
      "title": "Sentiment Thumbnail",
      "link": "https://github.com/patni11/UTOC",
      "imgUrl": "projects/yt.png",
      "videoLink": "https://www.youtube.com/embed/bpXsvtw20e4",
      "description": "Sentiment Thumbnail Bot dynamically designs YouTube video thumbnails based on viewer comment sentiment. It uses sentiment analysis and image generation, updating thumbnails every 10 minutes via the YouTube API.",
      "techStack": ["Python", "YouTube API", "Sentiment Analysis", "Image Generation"]
    },
    {
      "title": "AI Education",
      "link": "https://github.com/patni11/AI_website",
      "imgUrl": "projects/AIEdu.png",
      "videoLink": "",
      "description": "AI Education (AITutor) is a 2018 Python/Django educational website explaining AI concepts like Face Recognition (OpenCV Haar Cascade), Object Detection (SSD model), Image, and Music Generation using foundational models.",
      "techStack": ["Python", "Django", "OpenCV (Haar Cascade)", "SSD Model", "AI Concepts"]
    },
    {
      "title": "Drop Your ENS",
      "link": "https://github.com/patni11/dropmyENS",
      "imgUrl": "projects/ens.png",
      "videoLink": "",
      "description": "Drop Your ENS is a Python bot using the Twitter API to automate participation in ENS airdrop requests on Twitter. Hosted on PythonAnywhere, it responds to tagged tweets asking to 'drop your ens'.",
      "techStack": ["Python", "Twitter API", "PythonAnywhere"]
    },
    {
      "title": "Custom LED Lights",
      "link": "https://github.com/patni11/Arduino_LED",
      "imgUrl": "projects/arduino.png",
      "videoLink": "",
      "description": "A DIY project to control individually addressable LEDs via a smartphone app. Uses Arduino for hardware and MIT App Inventor for the Android app, connecting via WiFi and WebSockets for RGB color control.",
      "techStack": ["Arduino (C/C++)", "MIT App Inventor", "WiFi", "WebSockets"]
    },
    {
      "title": "Star Crash",
      "link": "https://github.com/patni11/StarCrash",
      "imgUrl": "projects/starcrash.png",
      "videoLink": "",
      "description": "Star Crash is a 2D iOS space game where players navigate a spaceship, collect coins, avoid obstacles, and use power-ups. Features an anti-gravity mechanic where the ship ascends automatically. My first iOS game.",
      "techStack": ["Swift 3", "iOS", "SpriteKit"]
    },
    {
      "title": "Old Website",
      "link": "https://github.com/patni11/mysite",
      "imgUrl": "projects/personalWebsite-old.png",
      "videoLink": "",
      "description": "My previous personal website, built with Python and Django, hosted on AWS with Apache. It was mobile-friendly and featured a bot to automatically scrape and display recent articles.",
      "techStack": ["Python", "Django", "AWS", "Apache", "Web Scraping", "HTML", "CSS", "JavaScript"]
    }
  ],
  about: {
    title: "Full Stack Developer and Technical Writer",
    description: [
      `I am a student at Northeastern University majoring in Computer Science and Economics.`,
      `My goal is to create positive incentive based systems, products that have a positive imapct overall. Ex nobody buys tesla coz it's green but because it's a cool car. Here incentive drives a positive action.`,
      `I decided to focus more on crypto because it allowed me to monetize my skills easily. I want to make it available to everyone.`,
    ],
    currentProject: "NEUGYM",
    currentProjectUrl: "https://www.neugym.com/",
  },
  experience: [
    {
      title: "Full Stack Software Engineer (Co-Op)",
      company: "Hometap",
      year: "2024",
      companyLink: "https://www.hometap.com/",
      desc: `
      Working as a full stack developer in the team that developer internal tools for investment managers.

      The tech stack includes React and Django
      `,
    },
    {
      title: "Incubator",
      company: "Lightspeed/Polychain Capital",
      year: "2023",
      companyLink: "https://csl.chainhub.foundation/",
      desc: `
      Handpicked among just 16 teams by Lightspeed and Polychain Capital to pitch to a discerning audience of 50 VCs

      Orchestrated end-to-end development for Pendulum, encompassing smart contracts, frontend design, and contract integration.`,
    },
    {
      title: "Product Manager Researcher",
      company: "Giaaka",
      year: "2023",
      companyLink: "https://norswap.io/",
      desc: `
      Spearheaded the development of Norswap, the proprietary exchange platform for Nordek Chain
      
      Proficiently designed and implemented the Frontend, Backend, API endpoints, and seamlessly integrated Smart Contracts within
      Norswap. Used Vercel, MongoDB, Typescript, Next Js and Solidity`,
    },
    {
      title: "Teaching Assistant",
      company: "Northeastern University, Discrete Structures",
      year: "2022",
      companyLink:
        "https://cssh.northeastern.edu/academics/undergraduate-teaching-assistantships/",
      desc: `Assisted students with their assignments and projects. 
      
      Helped them understand the concepts of Discrete Structures and graded homeworks.`,
    },
    {
      title: "Researcher",
      company: "DAO Maker",
      year: "2022",
      companyLink:
        "https://drive.google.com/drive/folders/1YipcO2xNNsGSCTlU4LLC7yr4RIYe041T",
      desc: ` Thoroughly examined tokenomics and formulated investment strategies for prominent DeFi products, including GMX, GHO, and DAO.
      
      Conducted a comprehensive market analysis of pivotal events within the web3 space, such as the Ethereum merge, 3AC collapse, Taro developments, and the Lightning Network, assessing their direct impact on associated assets.`,
    },
    {
      title: "Researcher",
      company: "Phemex Student Foundation Program",
      year: "2022",
      companyLink:
        "https://static.phemex.com/s/home/student-foundation/Shubh.pdf",
      desc: `Crafted a comprehensive research paper delving into the intricacies of Avalanche network's tokenomics, fundamental aspects, and ecosystem, providing invaluable insights for informed investment decisions by Phemex exchange stakeholders.
      
      Conducted an in-depth assessment of the Song a Day DAO, evaluating the worth of its music NFT collection.`,
    },
    {
      title: "Freelance Technical Writer",
      company: "Freelance",
      year: "2020-present",
      companyLink: "https://medium.com/@shubhpatni",
      desc: `Authored over 100 articles with a combined total of over 200k views and 5x Top writer on Medium in Programming, Business, Innovation, Crypto, and Technology. 
      
      Published over 60 youtube videos and 200 educational posts on Instagram.`,
    },
    {
      title: "Head of Technology",
      company: "Help Uddaan Foundation",
      year: "2018-2020",
      companyLink: "",
      desc: `
      Orchestrated multiple fundraising events, booths, and volunteer initiatives dedicated to providing sustenance and support to visually impaired individuals residing in an orphanage.
      
      Launched a song to disseminate awareness about COVID-19, resulting in the mobilization of resources to provide nourishment for more than 1,000 impoverished families in India.`,
    },
    {
      title: "High School",
      company: "Jain International",
      year: "2020",
      companyLink: "https://www.jirs.ac.in/",
      desc: "39 points in International Baccalaureate",
    },
  ],
  timeline: [
    {
      date: "Sep 11, 2002",
      description: "Spawned in existence",
      link: "",
    },
    {
      date: "2005",
      description: "Drawing everywhere, the goal is to be an artist",
      link: "",
    },
    {
      date: "2012",
      description: "Blurry Memories idk what happened 2005-2012",
      link: "",
    },
    {
      date: "2013",
      description: "Decent at school, mediocre",
      link: "",
    },
    {
      date: "2014",
      description: "Joined Boarding School",
      link: "",
    },
    {
      date: "March, 2015",
      description: "Got interested in IoS App Dev",
      link: "",
    },
    {
      date: "October 2015",
      description:
        "Bought Mac, after trying every possible way to run xcode on windows",
      link: "",
    },
  ],
  everythingResume: "/resumes/Everything/Shubh_Patni_resume.pdf",
  softwareDevResume: "/resumes/SoftwareEngineer/Shubh_Patni_resume.pdf",
  fullstackDevResume: "/resumes/FullStack/Shubh_Patni_resume.pdf",
  web3DevResume: "/resumes/Web3/Shubh_Patni_resume.pdf",
  socialLinks: {
    instagram: "https://www.instagram.com/patnishubh/",
    twitter: "https://twitter.com/PatniShubh",
    linkedin: "https://www.linkedin.com/in/patnishubh/",
    github: "http://github.com/patni11",
  },
};

export default userData;
