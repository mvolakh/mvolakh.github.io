import CourseType from '../types/CourseType'

const courses : CourseType[][] = [
    [   
        {
            name: "Computer Programming (P1)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: "Basically a first course that introduces you to programming. You do weekly assignments meanwhile studying an interactive online book. Programming is done in C++. Exam consists of MCQs. As it is the first course that does any programming, many find it difficult (hence 4/5). If you did some programming in the past, you should not have any problems with it."
        },
        {
            name: "Computational Thinking for Coders (P1)",
            difficulty: 3,
            enjoyability: 2,
            practicality: 5,
            desc: "First course that introduces you to algorithms. You do weekly assignments meanwhile studying an interactive online book (same book CP uses). Most find it average in terms of difficulty. Sometimes, you wouldn't understand some of the algorithms or just incorrectly apply it. But overall, the course is somewhat useful and accompanies CP assignments."
        },
        {
            name: "Requirements Engineering (P2)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 2,
            desc: "A really easy course that involves several assignments done in groups of 5 people. Assignments include identifying requirements, potential stakeholders and making a prototype of a project of your choice."
        },
        {
            name: "Pervasive Computing (P2)",
            difficulty: 2,
            enjoyability: 4,
            practicality: 3,
            desc: "A course on the edge of IoT and robotics. Every assignment is done during the lab sessions in groups of max 3 people. Assignments are mostly done in C++ and include programming of microcontrollers. One of the assignments is to make a self driving car that follows the path based on the sensor readings. There is also a final project with a topic of your choice. Overall, an easy course which is in contrast to RE at least fun."
        },
        {
            name: "Web Technology (P3)",
            difficulty: 2,
            enjoyability: 4,
            practicality: 5,
            desc: "This course covers the fundamentals of webdev. You follow the interactive book and learn the basics of HTML, CSS, JS, SQL, NodeJS as well as doing assignments in groups of 2. In general, an easy course, which might not be that easy for those without prior experience in web development."
        },
        {
            name: "Logic and Sets (P4)",
            difficulty: 2,
            enjoyability: 1,
            practicality: 3,
            desc: "If I remember correctly, the only form of examination are exams (midterm and endterm). The course itself is meh, but it's probably just me who doesn't like courses that cover logic, natural deduction etc."
        },
        {
            name: "Computer Organization (P4)",
            difficulty: 4,
            enjoyability: 3,
            practicality: 5,
            desc: "Probably the first course that the majority would find challenging. A lot of theory. Homework is done in groups of 4-5 people, programming assignments are done in groups of two and are done in x86 Assembly. If you like low-level programming, the programming part of this course would seem really fun for you. The course also involves an infamous gamification system, which probably makes it easier to pass, but at the same time the abundance of theory makes the exam kinda difficult."
        },
        {
            name: "Computer Networks (P5)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: "Same as CO in period 4, this course has a lot of theory. The practical part of the course is good though. It involves writing a TCP and UDP chat, a multiplayer game and a botnet. Again, practical part is awesome, but you have to learn a lot of theory for exam. Also involves some kind of gamification."
        },
        {
            name: "Networks and Graphs (P5)",
            difficulty: 2,
            enjoyability: 3,
            practicality: 3,
            desc: "Tbh I don't really remember what this course is about. The assignments are done in groups and the whole course is pretty much a graph theory."
        },
        {
            name: "Computer Programming Project (P6)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: "A course finalising year I of your CS Bachelor. Your write an IJVM emulator. A low-level implementation is done in C. You have weekly meetings with a TA assigned to you, who will track your progress. Realistically, the project could be done in one week, if you quickly manage to understand what's going on."
        },
    ],
    [
        {
            name: "Object-Oriented and Functional Programming (P1)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: "As you have already covered some of the object-oriented programming in CP course in Y1P1, this course dives into more specifics of object-oriented and functional programming. You program several games done in Scala as a part of the assignments. This is probably the first time you would encounter fully functional programming with immutable data, which makes this course really enjoyable."
        },
        {
            name: "Data Structures and Algorithms (P1)",
            difficulty: 3,
            enjoyability: 2,
            practicality: 5,
            desc: "A must theoretical course that covers all the possible algorithms. A large number of material that you have to know makes the exam hard. This course has changed its curriculum in 2022, but the difficulty is still high."
        },
        {
            name: "Operating Systems (P2)",
            difficulty: 5,
            enjoyability: 4,
            practicality: 5,
            desc: "If you do not plan to take Deep Programming minor, then this course would probably be the hardest one among all the courses CS major at VU got to offer. Consists of 4 assignments and 4 associated tests in a form of quizes. You need to pass each of them or you're risking doing a resit that includes all the theory, not only the part that you managed to fail."
        },
        {
            name: "Statistical Methods (P2)",
            difficulty: 3,
            enjoyability: 3,
            practicality: 3,
            desc: "The course I don't know how to feel about. It turned out a lot of people failed both the exam and a resit. If you do the assignments (in R) and prepare for the exams, you'll be fine."
        },
        {
            name: "Academic Writing for CS (P3)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 5,
            desc: "Just academic writing. The only course from CS major that has mandatory attendance."
        },
        {
            name: "History of Science for CS (P3)",
            difficulty: 1,
            enjoyability: 5,
            practicality: 1,
            desc: "Depends on how much you like history you might or might not like this course. Exam involves both the material from the lectures (that material is exclusive to lectures, so make notes or get them from someone) and the book, so be prepared to throw a bunch of hours into reading it."
        },
        {
            name: "Linear Algebra (P4)",
            difficulty: 2,
            enjoyability: 3,
            practicality: 5,
            desc: "Just math. A lot of people prefer to go to AI lecture instead of CS (both majors study the same material). Overall, do all the exercise sheets and you'll be fine on the exam."
        },
        {
            name: "Software Design (P4)",
            difficulty: 2,
            enjoyability: 5,
            practicality: 5,
            desc: "One of the courses that gives you a lot of freedom in terms of how you want to approach/implement your project idea. Programming is done in Java and you're expected to deliver a fully working application by the end of the course."
        },
        {
            name: "Logic and Modelling (P5)",
            difficulty: 2,
            enjoyability: 1,
            practicality: 1,
            desc: ""
        },
        {
            name: "Databases (P5)",
            difficulty: 1,
            enjoyability: 3,
            practicality: 5,
            desc: "Dive into databases and SQL. Probably the course with the lowest number of lectures. If you do all the homework (most is done on an interactive platform) you're more than fine for the exam."
        },
        {
            name: "Human-Computer Interaction (P6)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: "Well, that's the only course that is completely useless and is really easy. You just write a report, so if you're good at academic writing you can expect a 10 grade. It's somewhat of a common knowledge course, so you could only enjoy it by getting an easiest 10 of your life."
        },
    ],
    [
        {
            name: "Concurrency & Multithreading (P1)",
            difficulty: 4,
            enjoyability: 3,
            practicality: 4,
            desc: ""
        },
        {
            name: "Equational Programming (P1)",
            difficulty: 3,
            enjoyability: 2,
            practicality: 2,
            desc: "Basically functional programming but from a math perspective. Programming assignments are done in Haskell. Exam mostly covers theory, but also has several questions related to haskell exercises. Since there is quite a lot of theory, it makes the exam above average in terms of difficulty to pass."
        },
        {
            name: "Secure programming (P2)",
            difficulty: 5,
            enjoyability: 5,
            practicality: 5,
            desc: "The hardest course out there. Quite a lot of theory, practical applications and a massive group assignment. Do NOT approach this course lightly, it is suppossed to take all the time you got. But since this course is an actual guide to ethical hacking, that's what makes it interesting."
        },
        {
            name: "Advanced Network Programming (P2)",
            difficulty: 4,
            enjoyability: 5,
            practicality: 5,
            desc: "A course that builds on top of Computer Networks course. Half of the material intersects with the CN course, but the rest is new. As an assignment you implement a TCP networking stack in Linux userspace. Exam is easy to pass, but assignment takes some time. Especially due to Secure Programming being a second course in that period."
        },
        {
            name: "Compiler Construction (P3)",
            difficulty: 3,
            enjoyability: 5,
            practicality: 4,
            desc: "Probably the most fun course out of all the CS major. Your job is to make a compiler for a C-like language. As a part of it you do some runtime optimizations in C++/LLVM. An awesome course, but keep in mind that it also takes quitea lot of time to make the assignments."
        },
        {
            name: "Machine Learning (P4)",
            difficulty: 2,
            enjoyability: 4,
            practicality: 4,
            desc: "Depends on how much you're into AI. The project that you have to do involves training a model (we did neural network to recognize handwritten digits) and writing a report."
        },
        {
            name: "Automata and Complexity (P4)",
            difficulty: 2,
            enjoyability: 4,
            practicality: 2,
            desc: "The fundamentals behind regex. Same as in Databases course, you do the assignments in an interactive way, but this time the number of exercises is greater."
        },
        {
            name: "Philosophy and Ethics (P5)",
            difficulty: 1,
            enjoyability: 1,
            practicality: 1,
            desc: ""
            },
    ]
]

export default courses;