


export function renderAbout() {
    const content = document.getElementById("content");

    const section = document.createElement("section");

    const heading = document.createElement("h1");
    heading.textContent = "About Our Restaurant";

    const intro = document.createElement("p");
    intro.textContent =
        "Founded in 2010, our restaurant has been dedicated to bringing exceptional food and warm hospitality to our community. We believe that great meals are best enjoyed in the company of family and friends.";

    const missionHeading = document.createElement("h2");
    missionHeading.textContent = "Our Mission";

    const mission = document.createElement("p");
    mission.textContent =
        "We strive to create memorable dining experiences through fresh ingredients, creative recipes, and attentive service. Every dish is prepared with care and a passion for culinary excellence.";

    const valuesHeading = document.createElement("h2");
    valuesHeading.textContent = "What We Value";

    const values = document.createElement("ul");

    [
        "Locally sourced ingredients",
        "Exceptional customer service",
        "A welcoming atmosphere",
        "Innovative and seasonal menus"
    ].forEach(text => {
        const item = document.createElement("li");
        item.textContent = text;
        values.appendChild(item);
    });

    section.append(
        heading,
        intro,
        missionHeading,
        mission,
        valuesHeading,
        values
    );

    content.appendChild(section);
}
