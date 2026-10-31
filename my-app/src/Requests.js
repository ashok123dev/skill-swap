import { useState, useEffect } from "react";

// Requests.js
// Shows every "Connect" request the current user has sent, with a status
// (Pending / Accepted / Rejected). Uses localStorage so it works even
// before your backend has a real /requests endpoint — swap the
// localStorage calls for axios calls to your Express API once ready.

const STORAGE_KEY = "skillSwapRequests";

function loadRequests() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveRequests(requests) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

// Call this from Findskills.js instead of / in addition to the axios
// call, right after a successful "Connect" click:
//   import { addRequest } from "./Requests";
//   addRequest(student);
export function addRequest(student) {
    const requests = loadRequests();

    const alreadyExists = requests.some((r) => r.studentId === student.id);
    if (alreadyExists) return;

    requests.push({
        id: Date.now(),
        studentId: student.id,
        name: student.name,
        tech: student.tech,
        learn: student.learn,
        time: student.time,
        status: "Pending", // Pending | Accepted | Rejected
        sentAt: new Date().toLocaleString(),
    });

    saveRequests(requests);
}

function Requests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        setRequests(loadRequests());
    }, []);

    const updateStatus = (id, status) => {
        const updated = requests.map((r) =>
            r.id === id ? { ...r, status } : r
        );
        setRequests(updated);
        saveRequests(updated);
    };

    const statusColor = {
        Pending: "#f5a623",
        Accepted: "#2ecc71",
        Rejected: "#e74c3c",
    };

    return (
        <div className="page">
            <h1>MY REQUESTS</h1>

            {requests.length === 0 ? (
                <p>No requests sent yet. Go to "Find Skills" and connect with someone.</p>
            ) : (
                <div className="card-grid">
                    {requests.map((req) => (
                        <div className="card" key={req.id}>
                            <h2>{req.name}</h2>
                            <p>
                                Teaches <span className="tag">{req.tech}</span>
                            </p>
                            <p>
                                Learning <span className="tag tag-alt">{req.learn}</span>
                            </p>
                            <p>Sent: {req.sentAt}</p>
                            <p>
                                Status:{" "}
                                <strong style={{ color: statusColor[req.status] }}>
                                    {req.status}
                                </strong>
                            </p>

                            {req.status === "Pending" && (
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <button
                                        type="button"
                                        onClick={() => updateStatus(req.id, "Accepted")}
                                    >
                                        Mark Accepted
                                    </button>
                                    <button
                                        type="button"
                                        className="zoom-btn"
                                        onClick={() => updateStatus(req.id, "Rejected")}
                                    >
                                        Mark Rejected
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Requests;