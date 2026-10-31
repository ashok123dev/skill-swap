import { useState } from "react";
import axios from "axios";
import { addRequest } from "./Requests";

function Findskills() {

    const [search, setSearch] = useState("");

    // =========================
    // STUDENTS DATA
    // =========================

    const students = [

        {
            id: 1,
            name: "ASHOK",
            tech: "mern",
            learn: "python",
            email: "ashok@example.com",
            phone: "919999999901",
            time: "7:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 2,
            name: "RAHUL",
            tech: "java",
            learn: "react",
            email: "rahul@example.com",
            phone: "919999999902",
            time: "8:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 3,
            name: "PRIYA",
            tech: "python",
            learn: "mern",
            email: "priya@example.com",
            phone: "919999999903",
            time: "6:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 4,
            name: "ARJUN",
            tech: "react",
            learn: "nodejs",
            email: "arjun@example.com",
            phone: "919999999904",
            time: "7:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 5,
            name: "SAI",
            tech: "mern",
            learn: "java",
            email: "sai@example.com",
            phone: "919999999905",
            time: "8:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 6,
            name: "KIRAN",
            tech: "python",
            learn: "javascript",
            email: "kiran@example.com",
            phone: "919999999906",
            time: "6:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 7,
            name: "ANJALI",
            tech: "java",
            learn: "python",
            email: "anjali@example.com",
            phone: "919999999907",
            time: "7:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 8,
            name: "ROHIT",
            tech: "nodejs",
            learn: "react",
            email: "rohit@example.com",
            phone: "919999999908",
            time: "9:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 9,
            name: "DIVYA",
            tech: "html-css",
            learn: "mern",
            email: "divya@example.com",
            phone: "919999999909",
            time: "6:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 10,
            name: "VIKAS",
            tech: "mern",
            learn: "aws",
            email: "vikas@example.com",
            phone: "919999999910",
            time: "8:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 11,
            name: "NAVEEN",
            tech: "java",
            learn: "springboot",
            email: "naveen@example.com",
            phone: "919999999911",
            time: "7:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 12,
            name: "SWATHI",
            tech: "python",
            learn: "data-science",
            email: "swathi@example.com",
            phone: "919999999912",
            time: "8:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 13,
            name: "MANOJ",
            tech: "react",
            learn: "typescript",
            email: "manoj@example.com",
            phone: "919999999913",
            time: "6:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 14,
            name: "POOJA",
            tech: "javascript",
            learn: "python",
            email: "pooja@example.com",
            phone: "919999999914",
            time: "7:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 15,
            name: "AKHIL",
            tech: "mern",
            learn: "nextjs",
            email: "akhil@example.com",
            phone: "919999999915",
            time: "9:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 16,
            name: "HARISH",
            tech: "python",
            learn: "django",
            email: "harish@example.com",
            phone: "919999999916",
            time: "6:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 17,
            name: "DEEPA",
            tech: "java",
            learn: "react",
            email: "deepa@example.com",
            phone: "919999999917",
            time: "8:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 18,
            name: "VARUN",
            tech: "nodejs",
            learn: "mongodb",
            email: "varun@example.com",
            phone: "919999999918",
            time: "7:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 19,
            name: "NEHA",
            tech: "react",
            learn: "nodejs",
            email: "neha@example.com",
            phone: "919999999919",
            time: "8:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 20,
            name: "SURESH",
            tech: "c",
            learn: "java",
            email: "suresh@example.com",
            phone: "919999999920",
            time: "6:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 21,
            name: "LATHA",
            tech: "python",
            learn: "machine-learning",
            email: "latha@example.com",
            phone: "919999999921",
            time: "7:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 22,
            name: "ADITYA",
            tech: "mern",
            learn: "docker",
            email: "aditya@example.com",
            phone: "919999999922",
            time: "9:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 23,
            name: "KAVYA",
            tech: "html-css",
            learn: "javascript",
            email: "kavya@example.com",
            phone: "919999999923",
            time: "6:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 24,
            name: "TEJA",
            tech: "java",
            learn: "springboot",
            email: "teja@example.com",
            phone: "919999999924",
            time: "8:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 25,
            name: "RAVI",
            tech: "javascript",
            learn: "react",
            email: "ravi@example.com",
            phone: "919999999925",
            time: "7:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 26,
            name: "SNEHA",
            tech: "python",
            learn: "flask",
            email: "sneha@example.com",
            phone: "919999999926",
            time: "8:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 27,
            name: "GANESH",
            tech: "mern",
            learn: "typescript",
            email: "ganesh@example.com",
            phone: "919999999927",
            time: "6:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 28,
            name: "MEENA",
            tech: "react",
            learn: "tailwind",
            email: "meena@example.com",
            phone: "919999999928",
            time: "7:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 29,
            name: "ABHISHEK",
            tech: "java",
            learn: "android",
            email: "abhishek@example.com",
            phone: "919999999929",
            time: "9:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 30,
            name: "RESHMA",
            tech: "python",
            learn: "sql",
            email: "reshma@example.com",
            phone: "919999999930",
            time: "6:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 31,
            name: "KARTHIK",
            tech: "nodejs",
            learn: "express",
            email: "karthik@example.com",
            phone: "919999999931",
            time: "8:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 32,
            name: "BHAVYA",
            tech: "mern",
            learn: "graphql",
            email: "bhavya@example.com",
            phone: "919999999932",
            time: "7:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 33,
            name: "SANDEEP",
            tech: "c++",
            learn: "java",
            email: "sandeep@example.com",
            phone: "919999999933",
            time: "8:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 34,
            name: "POORNIMA",
            tech: "python",
            learn: "ai",
            email: "poornima@example.com",
            phone: "919999999934",
            time: "6:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 35,
            name: "RAJESH",
            tech: "react",
            learn: "nextjs",
            email: "rajesh@example.com",
            phone: "919999999935",
            time: "7:30 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 36,
            name: "NIKHIL",
            tech: "mern",
            learn: "devops",
            email: "nikhil@example.com",
            phone: "919999999936",
            time: "9:00 PM",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 37,
            name: "MUKUNDH",
            tech: "awp",
            learn: "dc",
            email: "mukundha@gmail.com",
            phone: "919999999937",
            time: "7:30",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 38,
            name: "ESWARI",
            tech: "dc",
            learn: "awp",
            email: "eswari@gmail.com",
            phone: "919999999938",
            time: "7:45",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 39,
            name: "ESWARI",
            tech: "AIDCS",
            learn: "awp",
            email: "eswari@gmail.com",
            phone: "919999999939",
            time: "7:45",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 40,
            name: "Lilly",
            tech: "Python",
            learn: "java",
            email: "sivakoteswari@gmail.com",
            phone: "919999999940",
            time: "9:30",
            zoomLink: "https://zoom.us/j/1234567890"
        },

        {
            id: 41,
            name: "srinu",
            tech: "dance",
            learn: "singing",
            email: "orchusrinivasarao208@gmail.com",
            phone: "919999999941",
            time: "10:00",
            zoomLink: "https://zoom.us/j/1234567890"
        }

    ];

    // =========================
    // SEARCH
    // =========================

    const filteredStudents = students.filter((student) => {

        const searchText = search.toLowerCase();

        return (
            student.name.toLowerCase().includes(searchText) ||
            student.tech.toLowerCase().includes(searchText) ||
            student.learn.toLowerCase().includes(searchText)
        );

    });

    // =========================
    // CONNECT
    // =========================

    const handleConnect = async (student) => {

        // Create WhatsApp message

        const message =
            `Hi ${student.name}, I found you on Skill Swap.\n\n` +
            `I want to connect with you to learn ${student.learn} ` +
            `and share ${student.tech}.\n\n` +
            `Available Time: ${student.time}\n\n` +
            `Join our Zoom meeting:\n` +
            `${student.zoomLink}`;

        // Create WhatsApp URL

        const whatsappURL =
            `https://wa.me/${student.phone}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );

        // Send data to backend

        try {

            const response = await axios.post(
                "http://localhost:5000/connections",
                {
                    studentId: student.id,
                    name: student.name,
                    email: student.email,
                    phone: student.phone,
                    tech: student.tech,
                    learn: student.learn,
                    time: student.time,
                    zoomLink: student.zoomLink
                }
            );

            console.log(
                "Backend response:",
                response.data
            );

            // Save request

            addRequest(student);

            alert(
                response.data.message ||
                "Connection request sent successfully"
            );

        } catch (error) {

            console.log(
                "Backend Error:",
                error
            );

            alert(
                error.response?.data?.message ||
                "WhatsApp opened, but backend connection failed."
            );
        }
    };

    // =========================
    // UI
    // =========================

    return (

        <div className="findskills">

            <h1>
                FIND MATCHING SKILLS
            </h1>

            {/* SEARCH */}

            <div className="search-wrap">

                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >

                    <circle
                        cx="11"
                        cy="11"
                        r="7"
                    />

                    <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                    />

                </svg>

                <input
                    type="text"
                    placeholder="Search name or skill..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            {/* STUDENT CARDS */}

            <div className="card-grid">

                {filteredStudents.map((student) => (

                    <div
                        className="card"
                        key={student.id}
                    >

                        <h2>
                            {student.name}
                        </h2>

                        <p>
                            Can TEACH

                            <span className="tag">
                                {student.tech}
                            </span>
                        </p>

                        <p>
                            Can LEARN

                            <span className="tag tag-alt">
                                {student.learn}
                            </span>
                        </p>

                        <p className="time-slot">
                            🕒 Available:

                            <strong>
                                {student.time}
                            </strong>
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                handleConnect(student)
                            }
                        >
                            CONNECT
                        </button>

                    </div>

                ))}

            </div>

            {/* NO RESULTS */}

            {filteredStudents.length === 0 && (

                <p
                    style={{
                        textAlign: "center",
                        marginTop: "30px"
                    }}
                >
                    No students found.
                </p>

            )}

        </div>
    );
}

export default Findskills;