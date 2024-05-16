const about = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.add("white-bg");

    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("menu-title");
    aboutTitle.textContent = "About";
    contentDiv.appendChild(aboutTitle);

    const line = document.createElement("div");
    line.classList.add("line");
    contentDiv.appendChild(line);

    const aboutPara = document.createElement("p");
    aboutPara.classList.add("about-paragraph");
    aboutPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lobortis diam. Proin vulputate risus nec mi porttitor, non tincidunt augue tempor. Aenean faucibus cursus metus. Phasellus eget elementum urna. Maecenas eget mauris purus. Aliquam pharetra efficitur elementum. Sed sed tempor risus, quis laoreet magna. Nam eget elementum metus. Nullam sollicitudin purus mi, vestibulum maximus erat venenatis id. Donec a velit nunc. Praesent eleifend risus sit amet lorem iaculis, sit amet convallis arcu rutrum";
    contentDiv.appendChild(aboutPara);
}

export default about;