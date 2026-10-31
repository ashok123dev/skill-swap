import { useState } from "react";

function Findresume() {
    const [search, setSearch] = useState("");

    const templates = [
        { id: 1, role: "AI ENGINEER", tags: "machine-learning, python, tensorflow", level: "Fresher/Experienced", preview: "https://www.canva.com/resumes/templates/ai-engineer/", download: "https://www.canva.com/resumes/templates/ai-engineer/" },
        { id: 2, role: "MERN STACK DEVELOPER", tags: "mongodb, express, react, nodejs", level: "Fresher", preview: "https://www.canva.com/resumes/templates/mern-developer/", download: "https://www.canva.com/resumes/templates/mern-developer/" },
        { id: 3, role: "DATA SCIENTIST", tags: "python, pandas, sql, statistics", level: "Experienced", preview: "https://www.canva.com/resumes/templates/data-scientist/", download: "https://www.canva.com/resumes/templates/data-scientist/" },
        { id: 4, role: "FRONTEND DEVELOPER", tags: "react, javascript, css, html", level: "Fresher", preview: "https://www.canva.com/resumes/templates/frontend-developer/", download: "https://www.canva.com/resumes/templates/frontend-developer/" },
        { id: 5, role: "BACKEND DEVELOPER", tags: "nodejs, java, springboot, api", level: "Experienced", preview: "https://www.canva.com/resumes/templates/backend-developer/", download: "https://www.canva.com/resumes/templates/backend-developer/" },
        { id: 6, role: "JAVA DEVELOPER", tags: "java, springboot, oop", level: "Fresher/Experienced", preview: "https://www.canva.com/resumes/templates/java-developer/", download: "https://www.canva.com/resumes/templates/java-developer/" },
        { id: 7, role: "PYTHON DEVELOPER", tags: "python, django, flask", level: "Fresher", preview: "https://www.canva.com/resumes/templates/python-developer/", download: "https://www.canva.com/resumes/templates/python-developer/" },
        { id: 8, role: "UI/UX DESIGNER", tags: "figma, wireframing, prototyping", level: "Fresher/Experienced", preview: "https://www.canva.com/resumes/templates/ux-designer/", download: "https://www.canva.com/resumes/templates/ux-designer/" },
        { id: 9, role: "DEVOPS ENGINEER", tags: "docker, kubernetes, aws, ci-cd", level: "Experienced", preview: "https://www.canva.com/resumes/templates/devops-engineer/", download: "https://www.canva.com/resumes/templates/devops-engineer/" },
        { id: 10, role: "CLOUD ENGINEER", tags: "aws, azure, gcp, networking", level: "Experienced", preview: "https://www.canva.com/resumes/templates/cloud-engineer/", download: "https://www.canva.com/resumes/templates/cloud-engineer/" },
        { id: 11, role: "ANDROID DEVELOPER", tags: "kotlin, java, android-studio", level: "Fresher", preview: "https://www.canva.com/resumes/templates/android-developer/", download: "https://www.canva.com/resumes/templates/android-developer/" },
        { id: 12, role: "FULL STACK DEVELOPER", tags: "mern, mean, java-full-stack", level: "Fresher/Experienced", preview: "https://www.canva.com/resumes/templates/full-stack-developer/", download: "https://www.canva.com/resumes/templates/full-stack-developer/" }
    ];

    // SEARCH
    const filteredTemplates = templates.filter((template) =>
        template.role.toLowerCase().includes(search.toLowerCase()) ||
        template.tags.toLowerCase().includes(search.toLowerCase())
    );

    // PREVIEW TEMPLATE
    const handlePreview = (template) => {
        window.open(template.preview, "_blank");
    };

    // DOWNLOAD / USE TEMPLATE
    const handleDownload = (template) => {
        window.open(template.download, "_blank");
    };

    return (
        <div className="findresume">

            <h1>FIND RESUME TEMPLATES</h1>

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
                    placeholder="Search role e.g. AI Engineer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {/* TEMPLATE CARDS */}
            <div className="card-grid">

                {filteredTemplates.map((template) => (

                    <div className="card" key={template.id}>

                        <h2>{template.role}</h2>

                        <p>
                            Skills <span className="tag">{template.tags}</span>
                        </p>

                        <p>
                            Level <span className="tag tag-alt">{template.level}</span>
                        </p>

                        <button
                            type="button"
                            onClick={() => handlePreview(template)}
                        >
                            PREVIEW
                        </button>

                        <button
                            type="button"
                            className="github-btn"
                            onClick={() => handleDownload(template)}
                        >
                            📄 USE TEMPLATE
                        </button>

                    </div>

                ))}

                {filteredTemplates.length === 0 && (
                    <p className="no-results">No templates found for "{search}"</p>
                )}

            </div>

        </div>
    );
}

export default Findresume;