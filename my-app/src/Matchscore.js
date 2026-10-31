// matchScore.js
// Implements the Skill Swap scoring rule shown in the Round 1 pitch deck:
//   +60 -> they teach what I want to learn
//   +40 -> I teach what they want to learn
//   +10 -> we share the same core tech stack (both teach the same skill)
// Returns a score out of 100.

export function calculateMatchScore(me, other) {
    if (!me || !other) return 0;

    let score = 0;

    const myTeach = (me.tech || "").toLowerCase().trim();
    const myLearn = (me.learn || "").toLowerCase().trim();
    const otherTeach = (other.tech || "").toLowerCase().trim();
    const otherLearn = (other.learn || "").toLowerCase().trim();

    // They teach what I want to learn
    if (otherTeach && myLearn && otherTeach === myLearn) {
        score += 60;
    }

    // I teach what they want to learn
    if (myTeach && otherLearn && myTeach === otherLearn) {
        score += 40;
    }

    // Shared core tech stack (both teach the same thing)
    if (myTeach && otherTeach && myTeach === otherTeach) {
        score += 10;
    }

    return Math.min(score, 100);
}

// Ranks a list of candidate students against "me" and returns them
// sorted by score, descending, with a `score` field attached.
export function rankMatches(me, candidates) {
    return candidates
        .map((c) => ({ ...c, score: calculateMatchScore(me, c) }))
        .filter((c) => c.score > 0)
        .sort((a, b) => b.score - a.score);
}