const menu = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.add("menu-content");
    
    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";
    contentDiv.appendChild(menuTitle);

    const line = document.createElement("div");
    line.classList.add("line");
    contentDiv.appendChild(line);

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    contentDiv.appendChild(gridContainer);

    const items = ["Bella Napoli Pizza", "Amalfi Coast Pizza", "Vesuvio Pizza", "Capri Pizza", "Toscana Pizza", "Roma Rustica Pizza"];

    items.forEach(title => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        gridContainer.appendChild(menuItem);

        const itemTitle = document.createElement("h2");
        itemTitle.textContent = title;
        menuItem.appendChild(itemTitle);
        
        const itemDescription = document.createElement("p");
        itemDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement("h2");
        itemPrice.textContent = "$25";
        menuItem.appendChild(itemPrice);
    });
}

export default menu;