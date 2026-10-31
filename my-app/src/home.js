function Home({ setPage }) {
    return (
        <div className="HERO">

            <h1>SKILL SWAP 🚀</h1>

            <h2>
                Learn Skills <span>GROW</span>
            </h2>

            <p>
                Exchange skills with students, not money.
            </p>
            <p>
                feel free to learn
            </p>

            <button onClick={() => setPage("register")}>
                GET REGISTERED
            </button>

        </div>
    );
}

export default Home;