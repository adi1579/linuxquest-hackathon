let challenges = [
    { title: "Challenge 1", desc: "Use `ls` to list files in the current directory." },
    { title: "Challenge 2", desc: "Use `pwd` to print the current directory." },
    { title: "Challenge 3", desc: "Use `cd /tmp` to change to the /tmp directory." }
];

let current = 0;
let score = 0;
let streak = 0;

function loadNextChallenge() {
    if (current < challenges.length - 1) {
        current++;
        streak++;
        score += 10;
    } else {
        streak = 0;
    }

    document.getElementById("challenge-title").innerText = challenges[current].title;
    document.getElementById("challenge-desc").innerText = challenges[current].desc;
    document.getElementById("current-level").innerText = current + 1;
    document.getElementById("score").innerText = score;
    document.getElementById("streak").innerText = streak;

    let progress = ((current + 1) / challenges.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

document.getElementById("total-levels").innerText = challenges.length;