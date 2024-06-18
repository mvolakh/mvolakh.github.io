import Project from '../types/Project'

const projects : Project[] = [
    {
        name: "[WIP] VoIP App",
        desc: "Currently in development, the VoIP application (akin to Discord) aims to provide a decentralized server hosting model. Users can host their servers independently, allowing clients to connect directly to their hosted servers for communication without relying on centralized hosting. As of now, the following features are planned to be implemented:",
        img: "voip",
        keypoints: [
            "Server hosting flexibility enabling users to host servers on any preferred infrastructure, ensuring decentralized deployment",
            "Real-time voice & video communication for interaction across decentralized servers",
            "Creation of centralized user authentication that would provide secure access control and user management for a consistent user experience",
            "Integration of payment system that will facilitate transactions for premium features or server hosting services"
        ],
        technologies: [
            "Electron",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "WebRTC",
            "JWT",
            "Vue.js",
            "Vuetify"
        ]
    },
    {
        name: "Space Occupancy Monitor",
        desc: "The project is focused on creating a system for monitoring and predicting room occupancy in university buildings. It utilizes real-time sensor data from MQTT streams and applies machine learning methods to predict future room occupancy levels.",
        img: "thesis",
        keypoints: [
            "Implemented a REST API using Node.js and Express.js for historical data retrieval and transfer",
            "Integrated data from MQTT streams with the WebSocket server to enable real-time communication",
            "Optimized MongoDB database performance to efficiently handle high volumes of data, processing a vast number of incoming packets per second",
            "Processed historical data collected over one year to create an abundant dataset for future use",
            "Developed and optimized multiple ML time-series forecasting RNN models to predict occupancy patterns",
            "Designed a user-friendly UI to enhance accessibility and usability in terms of occupancy visualization",
            "Made the system's API suitable to be integrated with the university reservation system (hasn't been implemented due to privacy concerns)",
            "Created a wide variety of tests designed to verify the validity of the API "
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Socket.io",
            "Keras",
            "Bash",
            "MQTT",
            "Vue.js",
            "Vuetify",
            "Cypress"
        ]
    },
    {
        name: "Linux TCP Stack in User Space",
        desc: "A Linux TCP stack entirely in user space, focusing on functionality and performance optimization for networking tasks developed for academic purposes. This project aimed to simulate and handle networking protocols and operations traditionally managed by the kernel.",
        img: "linux",
        keypoints: [
            "Implemented ICMP protocol to support the ping command functionality",
            "Created a TCP protocol socket with essential networking system calls (socket, connect, send, recv, close), enabling compatibility with unmodified Linux applications that work on top of a TCP",
            "Benchmarked the networking stack performance based on the end-to-end latency of the data transfers"
        ],
        technologies: [
            "C",
            "Linux Kernel"
        ]
    },
    {
        name: "Realt",
        desc: "A full-stack application for managing real estate, enabling users to create and manage property listings. The platform allows users to list properties for sale or rent and browse other available listings, providing a possible solution for real estate transactions.",
        img: "realt",
        keypoints: [
            "Designed an API for communication between the frontend and backend of the system",
            "Developed a user authentication system with role-based privileges, providing security and user management",
            "Added a file upload functionality, allowing users to add images and documents to their listings",
            "Implemented custom sorting functionalities, enabling users to sort property listings based on various criteria such as price, location, and property type"
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Passport.js",
            "Vue.js",
            "Vuetify"
        ]
    },
    {
        name: "FenneC Compiler",
        desc: "A compiler designed to work with FenneC programming language developed for academic purposes. Also provides a number of optimization passes for the LLVM IR within the FenneC compiler framework.",
        img: "vu_blauw",
        keypoints: [
            "Implemented crucial parts of the FenneC compiler: lexer, parser, typechecker and IR generator",
            "Developed multiple LLVM IR optimization and instrumentation passes, which include Constant Propagation, ADCE (Aggressive Dead Code Elimination) and LICM (Loop-Invariant Code Motion). Since these passes were written in LLVM, they could, in general, be applied to IRs of other programming languages (Clang)",
            "Implemented an LLVM IR pass that inserts bounds check into programs and code written in FenneC programming language",
            "Created a number of test cases to validate the optimizations and ensure correct functionality across different scenarios",
        ],
        technologies: [
            "C",
            "C++",
            "LLVM",
            "Python",
            "Makefile"
        ]
    },
    {
        name: "Portfolio",
        desc: "Exactly what you are looking at right now. Serves as a showcase of my achievements and skills. Initially developed during university years, it has been recently upgraded with a new version released in June 2024.",
        img: "portfolio2",
        keypoints: [
            "Developed a minimalistic and modern design highlighting projects and skills",
            "Deployed to GH pages. A number of GitHub Actions workflows for testing & deployment updates has been used",
            "There is a cat that doesn't like to be pet hidden somewhere on this page!",
        ],
        technologies: [
            "Vue.js",
            "Vuetify",
            "@vueuse/motion"
        ]
    },
    {
        name: "UNIX OS Utilities",
        desc: "A suite of various UNIX utilities including a custom shell, a heap memory allocator, a FAT filesystem driver and a remote in-memory key-value storage intended for academic use.",
        img: "bash",
        keypoints: [
            "Designed a Unix shell similar to bash that supports a number of built-in commands, environmental variables, piping, redirections and PS1 variable",
            "Implemented my own heap allocator as a part of a library that supports memory operations as well as a number of memory management optimizations",
            "Created a custom userspace filesystem driver for the FUSE framework that allows to perform a number of operations with files, such as navigating, reading, modifying, etc.",
            "Implemented key-value in-memory storage similar to Redis that supports remote and concurrent access to data and its modification"
        ],
        technologies: [
            "C"
        ]
    },
    {
        name: "MNIST Digit Classifier",
        desc: "A neural network model trained to recognise handwritten digits.",
        img: "mnist",
        keypoints: [
            "Provided multiple ML models and optimized their perfomance",
            "Adopted a novel Hyperband hyperparameter search algorithm in order to assess the models",
            "Benchmarked the models to identify the best possible model",
            "Wrote a number of bash scripts that simplify workflow"
        ],
        technologies: [
            "Python",
            "pandas",
            "scikit",
            "Keras",
            "Tensorflow",
            "Bash"
        ]
    },
    {
        name: "Hope",
        desc: "A full-stack application for Hope charity project designed as a part of Science Foundation program at Holland ISC written in vanilla JS. One of the first attempts at fullstack development.",
        img: "hope",
        keypoints: [
            "Designed both the frontend and the backend of the application",
            "Provided simple password based authentication and encryption",
            "Implemented custom sorting and search functionalities in order to filter charity organizations based on a number of criteria"
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Passport.js",
            "Bootstrap"
        ]
    },
]

export default projects;