async function fetchCat() {
  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=140");
    const data = await response.json();

    const factWrapper = document.querySelector("#factWrapper");

    // Create and append the h3 tag
    const heading = document.createElement("h3");
    heading.textContent = "Random Cat Fact";
    factWrapper.appendChild(heading);

    // Create and append the paragraph tag with the cat fact
    const paragraph = document.createElement("p");
    paragraph.textContent = data.fact;
    factWrapper.appendChild(paragraph);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchCat();
