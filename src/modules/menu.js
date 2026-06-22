export function renderMenu() {
    const content = document.getElementById("content");

    const section = document.createElement("section");
    const heading = document.createElement("h1");

    heading.textContent = "Our Menu";
    section.appendChild(heading);

    const menuItems = [
        {
            name: "Apple Tart",
            price: "$8",
            description: "A flaky pastry filled with fresh apples and warm spices."
        },
        {
            name: "Grilled Salmon",
            price: "$24",
            description: "Fresh Atlantic salmon served with seasonal vegetables."
        },
        {
            name: "Steak Frites",
            price: "$28",
            description: "Tender sirloin steak accompanied by crispy fries."
        },
        {
            name: "Chocolate Lava Cake",
            price: "$10",
            description: "Rich chocolate cake with a molten center."
        }
    ];



    menuItems.forEach(item => {
        const card = document.createElement("div");

        const name = document.createElement("h2");
        name.textContent = item.name;

        const price = document.createElement("h3");
        price.textContent = item.price;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(name, price, description);
        section.appendChild(card);
    });

    content.appendChild(section);
}