import { useState, useEffect } from "react";

// Dashboard.js
// Reads the same "skillSwapRequests" localStorage data that Requests.js
// writes to, and shows quick stats: total requests sent, accepted swaps,
// pending count, and the most popular skills people want to learn.
// No chart library needed — bars are plain divs sized with %.

const STORAGE_KEY = "skillSwapRequests";

function loadRequests() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function Dashboard() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        setRequests(loadRequests());
    }, []);

    const total = requests.length;
    const accepted = requests.filter((r) => r.status === "Accepted").length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const rejected = requests.filter((r) => r.status === "Rejected").length;

    // Count how often each "learn" skill appears, to find what's popular
    const skillCounts = requests.reduce((acc, r) => {
        const skill = (r.learn || "unknown").toLowerCase();
        acc[skill] = (acc[skill] || 0) + 1;
        return acc;
    }, {});

    const topSkills = Object.entries(skillCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const maxCount = topSkills.length > 0 ? topSkills[0][1] : 1;

    return (
        <div className="page">
            <h1>DASHBOARD</h1>

            <div className="card-grid">
                <div className="card">
                    <h2>{total}</h2>
                    <p>Total Requests Sent</p>
                </div>
                <div className="card">
                    <h2>{accepted}</h2>
                    <p>Accepted Swaps</p>
                </div>
                <div className="card">
                    <h2>{pending}</h2>
                    <p>Pending</p>
                </div>
                <div className="card">
                    <h2>{rejected}</h2>
                    <p>Rejected</p>
                </div>
            </div>

            <h2 style={{ marginTop: "32px" }}>Most Wanted Skills</h2>

            {topSkills.length === 0 ? (
                <p>No data yet — send some connect requests first.</p>
            ) : (
                <div style={{ marginTop: "12px" }}>
                    {topSkills.map(([skill, count]) => (
                        <div key={skill} style={{ marginBottom: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>{skill}</span>
                                <span>{count}</span>
                            </div>
                            <div
                                style={{
                                    background: "#eee",
                                    borderRadius: "6px",
                                    overflow: "hidden",
                                    height: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        width: `${(count / maxCount) * 100}%`,
                                        background: "#FF6464",
                                        height: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dashboard;