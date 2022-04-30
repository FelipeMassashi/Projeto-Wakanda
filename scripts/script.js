const html = document.querySelector("html");

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style);


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    bgPrincipal: getStyle(html, "--bg-principal"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#171C26",
    bgPanel: "black",
    bgPrincipal: "#293040",
    colorHeadings: "#5E6D8C",
    colorText: "rgb(150, 100, 179)"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    );
}

const checkbox = document.querySelector('input[name=theme]');

const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'));

if (checkboxColorMode) {
  checkbox.checked = checkboxColorMode
  changeColors(darkMode);
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);

    localStorage.setItem('color-mode', target.checked);
})