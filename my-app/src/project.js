import { useState } from "react";
import axios from "axios";
import { addRequest } from "./Requests";

function Findprojects() {
    const [search, setSearch] = useState("");

    const projects = [
        { id: 1, name: "SKILL SWAP PLATFORM", owner: "ASHOK", stack: "mern", lookingFor: "ui-designer", email: "ashok@example.com", github: "https://github.com/ashok/skill-swap" },
        { id: 2, name: "EXPENSE TRACKER", owner: "RAHUL", stack: "java", lookingFor: "frontend-dev", email: "rahul@example.com", github: "https://github.com/rahul/expense-tracker" },
        { id: 3, name: "AI RESUME BUILDER", owner: "PRIYA", stack: "python", lookingFor: "mern-dev", email: "priya@example.com", github: "https://github.com/priya/ai-resume-builder" },
        { id: 4, name: "CAMPUS EVENT APP", owner: "ARJUN", stack: "react", lookingFor: "backend-dev", email: "arjun@example.com", github: "https://github.com/arjun/campus-events" },
        { id: 5, name: "JOB MATCHER AI", owner: "SAI", stack: "mern", lookingFor: "ml-engineer", email: "sai@example.com", github: "https://github.com/sai/jobfit-ai" },
        { id: 6, name: "WEATHER DASHBOARD", owner: "KIRAN", stack: "python", lookingFor: "javascript-dev", email: "kiran@example.com", github: "https://github.com/kiran/weather-dashboard" },
        { id: 7, name: "CHAT APPLICATION", owner: "ANJALI", stack: "java", lookingFor: "python-dev", email: "anjali@example.com", github: "https://github.com/anjali/chat-app" },
        { id: 8, name: "TASK MANAGER", owner: "ROHIT", stack: "nodejs", lookingFor: "react-dev", email: "rohit@example.com", github: "https://github.com/rohit/task-manager" },
        { id: 9, name: "PORTFOLIO BUILDER", owner: "DIVYA", stack: "html-css", lookingFor: "mern-dev", email: "divya@example.com", github: "https://github.com/divya/portfolio-builder" },
        { id: 10, name: "CLOUD FILE SHARE", owner: "VIKAS", stack: "mern", lookingFor: "aws-engineer", email: "vikas@example.com", github: "https://github.com/vikas/cloud-file-share" }
    ];

    // SEARCH
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.owner.toLowerCase().includes(search.toLowerCase()) ||
        project.stack.toLowerCase().includes(search.toLowerCase()) ||
        project.lookingFor.toLowerCase().includes(search.toLowerCase())
    );

    // CONNECT TO BACKEND
    const handleConnect = async (project) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/connections",
                {
                    projectId: project.id,
                    name: project.name,
                    owner: project.owner,
                    email: project.email,
                    stack: project.stack,
                    lookingFor: project.lookingFor
                }
            );

            alert(response.data.message);
            addRequest(project); // track this request on the "My Requests" page

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Connection failed"
            );
        }
    };

    // OPEN GITHUB REPO
    const handleGithub = (project) => {
        window.open(project.github, "_blank");
    };

    return (
        <div className="findprojects">

            <h1>FIND PROJECTS TO CONTRIBUTE</h1>

            {/* SEARCH */}
            <div className="search-wrap">

                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="7" />
                    <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                    />
                </svg>

                <input
                    type="text"
                    placeholder="Search project, owner or stack..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {/* PROJECT CARDS */}
            <div className="card-grid">

                {filteredProjects.map((project) => (

                    <div className="card" key={project.id}>

                        <h2>{project.name}</h2>

                        <p>
                            Owner <span className="tag">{project.owner}</span>
                        </p>

                        <p>
                            Built with <span className="tag">{project.stack}</span>
                        </p>

                        <p>
                            Looking for <span className="tag tag-alt">{project.lookingFor}</span>
                        </p>

                        <button
                            type="button"
                            onClick={() => handleConnect(project)}
                        >
                            CONNECT
                        </button>

                        <button
                            type="button"
                            className="github-btn"
                            onClick={() => handleGithub(project)}
                        >
                            🔗 VIEW ON GITHUB
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Findprojects;