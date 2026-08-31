function discord() {
    window.open("https://discord.gg/DGSvdQ6X4y", "_blank")
}
function youtube() {
    window.open("https://www.youtube.com/@KanaGMD", "_blank")
}

const d_w = 1920;
const d_h = 1080;

function resize() {
    const scale = Math.min(
        window.innerWidth / d_w,
        window.innerHeight / d_h
    );
    document.documentElement.style.setProperty(
        "--scale",
        scale
    );
}

window.addEventListener("resize", resize);
resize();