const home = () => {
    const contentDiv = document.getElementById("content");

    const welcome = document.createElement("p");
    welcome.id = "welcome";
    welcome.textContent = "Bienvenuti";
    contentDiv.appendChild(welcome);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "La Pizzeria";
    contentDiv.appendChild(title);

    const line = document.createElement("div");
    line.id = "line";
    contentDiv.appendChild(line);

    const slogan = document.createElement("p");
    slogan.classList.add("slogan");
    slogan.textContent = "Fatto con passione!";
    contentDiv.appendChild(slogan);

    const menuBtn = document.createElement("btn");
    menuBtn.id = "menu-btn";
    menuBtn.classList.add("page-btn");
    menuBtn.textContent = "View Menu";
    contentDiv.appendChild(menuBtn);
}

export default home;