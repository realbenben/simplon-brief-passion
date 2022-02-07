console.log("is it linked?");
function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme = document.getElementById("light");

  // Change the value of href attribute
  // to change the css sheet.
  if (theme.getAttribute("href") == "./stylesheet/index.css") {
    theme.setAttribute("href", "./stylesheet/dark.css");
  } else {
    theme.setAttribute("href", "./stylesheet/index.css");
  }
}
