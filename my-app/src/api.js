const BASE_URL = "http://localhost:5000/skills";

export const getSkills = async (search = "") => {
    const res = await fetch(`${BASE_URL}?search=${search}`);
    return res.json();
};

export const getMatches = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}/matches`);
    return res.json();
};

export const registerSkill = async (data) => {
    const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const connectRequest = async (id) => {
    const res = await fetch(`${BASE_URL}/connect/${id}`, {
        method: "POST",
    });
    return res.json();
};

export const updateSkill = async (id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deleteSkill = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });
    return res.json();
};

const api = {
    getSkills,
    getMatches,
    registerSkill,
    connectRequest,
    updateSkill,
    deleteSkill,
};

export default api;