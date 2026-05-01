const factions = [
    {
        name: "Soul Reaper",
        img: "iii.jpg",
        link: "soul reaper.html"
    },
    {
        name: "Hollow",
        img: "images.png",
        link: "hollow.html"
    },
    {
        name: "Quincy",
        img: "download.png",
        link: "quincy.html"
    }
];

const spinButton = document.getElementById("spinButton");
const resultArea = document.getElementById("resultArea");

spinButton.addEventListener("click", () => {

    // Add spin animation
    resultArea.classList.remove("spin-anim");
    void resultArea.offsetWidth; // reset animation
    resultArea.classList.add("spin-anim");

    // Random faction
    const pick = factions[Math.floor(Math.random() * factions.length)];

    // Delay reveal until spin finishes
    setTimeout(() => {
        resultArea.innerHTML = `
            <div class="flash-anim">
                <a href="${pick.link}">
                    <img src="${pick.img}" alt="${pick.name}">
                </a>
                <p style="color:#b8dfff; margin-top:10px; font-size:20px;">
                    You rolled: <strong>${pick.name}</strong>
                </p>
            </div>
        `;
    }, 600); // matches spinWheel duration
});
