function Navbar({ page, setPage }) {
    return (
        <div className="Navbar">
            <h2>skill swap</h2>
            <nav>
                <button
                    className={page === "home" ? "active" : ""}
                    onClick={() => setPage("home")}
                >
                    HOME
                </button>

                <button
                    className={page === "find" ? "active" : ""}
                    onClick={() => setPage("find")}
                >
                    find skills
                </button>

                <button
                    className={page === "findprojects" ? "active" : ""}
                    onClick={() => setPage("findprojects")}
                >
                    find projects
                </button>

                <button
                    className={page === "resume" ? "active" : ""}
                    onClick={() => setPage("resume")}
                >
                    find resume
                </button>

                <button
                    className={page === "match" ? "active" : ""}
                    onClick={() => setPage("match")}
                >
                    SKILL MATCHES
                </button>

                <button className={page === "requests" ? "active" : ""} onClick={() => setPage("requests")}>
                    MY REQUESTS
                </button>
                <button className={page === "dashboard" ? "active" : ""} onClick={() => setPage("dashboard")}>
                    DASHBOARD
                </button>
            </nav>
        </div>
    );
}

export default Navbar;