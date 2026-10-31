import { useState } from "react";

function Matches() {
    const [search, setSearch] = useState("");

    const matches = [
        {
            id: 1,
            name: "ashok",
            tech: "mern",
            learn: "python",
            mobile: 9000000001,
            score: 95
        },
        {
            id: 2,
            name: "rahul",
            tech: "java",
            learn: "react",
            mobile: 9000000002,
            score: 88
        },
        {
            id: 3,
            name: "priya",
            tech: "python",
            learn: "mern",
            mobile: 9000000003,
            score: 92
        },
        {
            id: 4,
            name: "arjun",
            tech: "react",
            learn: "nodejs",
            mobile: 9000000004,
            score: 85
        },
        {
            id: 5,
            name: "sai",
            tech: "nodejs",
            learn: "java",
            mobile: 9000000005,
            score: 90
        },
        {
            id: 6,
            name: "kiran",
            tech: "python",
            learn: "javascript",
            mobile: 9000000006,
            score: 87
        },
        {
            id: 7,
            name: "anjali",
            tech: "java",
            learn: "python",
            mobile: 9000000007,
            score: 94
        },
        {
            id: 8,
            name: "rohit",
            tech: "javascript",
            learn: "react",
            mobile: 9000000008,
            score: 82
        },
        {
            id: 9,
            name: "divya",
            tech: "html",
            learn: "mern",
            mobile: 9000000009,
            score: 89
        },
        {
            id: 10,
            name: "vikas",
            tech: "mern",
            learn: "aws",
            mobile: 9000000010,
            score: 96
        },
        {
            id: 11,
            name: "naveen",
            tech: "java",
            learn: "springboot",
            mobile: 9000000011,
            score: 91
        },
        {
            id: 12,
            name: "swathi",
            tech: "python",
            learn: "data science",
            mobile: 9000000012,
            score: 93
        },
        {
            id: 13,
            name: "manoj",
            tech: "react",
            learn: "typescript",
            mobile: 9000000013,
            score: 86
        },
        {
            id: 14,
            name: "pooja",
            tech: "javascript",
            learn: "python",
            mobile: 9000000014,
            score: 84
        },
        {
            id: 15,
            name: "akhil",
            tech: "mern",
            learn: "nextjs",
            mobile: 9000000015,
            score: 97
        },
        {
            id: 16,
            name: "harish",
            tech: "python",
            learn: "django",
            mobile: 9000000016,
            score: 88
        },
        {
            id: 17,
            name: "deepa",
            tech: "java",
            learn: "react",
            mobile: 9000000017,
            score: 90
        },
        {
            id: 18,
            name: "varun",
            tech: "nodejs",
            learn: "mongodb",
            mobile: 9000000018,
            score: 85
        },
        {
            id: 19,
            name: "neha",
            tech: "react",
            learn: "nodejs",
            mobile: 9000000019,
            score: 92
        },
        {
            id: 20,
            name: "suresh",
            tech: "c++",
            learn: "java",
            mobile: 9000000020,
            score: 80
        },
        {
            id: 21,
            name: "latha",
            tech: "python",
            learn: "machine learning",
            mobile: 9000000021,
            score: 95
        },
        {
            id: 22,
            name: "aditya",
            tech: "mern",
            learn: "docker",
            mobile: 9000000022,
            score: 89
        },
        {
            id: 23,
            name: "kavya",
            tech: "html",
            learn: "javascript",
            mobile: 9000000023,
            score: 87
        },
        {
            id: 24,
            name: "teja",
            tech: "java",
            learn: "springboot",
            mobile: 9000000024,
            score: 93
        },
        {
            id: 25,
            name: "ravi",
            tech: "javascript",
            learn: "react",
            mobile: 9000000025,
            score: 91
        }
    ];

    // SEARCH
    const filteredMatches = matches.filter((match) =>
        match.name.toLowerCase().includes(search.toLowerCase()) ||
        match.tech.toLowerCase().includes(search.toLowerCase()) ||
        match.learn.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">

            <h1>MATCHING SKILLS</h1>

            <input
                type="text"
                placeholder="Search name or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredMatches.length === 0 ? (
                <p>No matching skills found.</p>
            ) : (
                filteredMatches.map((match) => (
                    <div className="card" key={match.id}>

                        <h2>{match.name}</h2>

                        <p>
                            You can learn from me: {match.tech}
                        </p>

                        <p>
                            I can learn from you: {match.learn}
                        </p>

                        <p>
                            Score: {match.score}%
                        </p>

                        <p>
                            Mobile: {match.mobile}
                        </p>

                    </div>
                ))
            )}

        </div>
    );
}

export default Matches;