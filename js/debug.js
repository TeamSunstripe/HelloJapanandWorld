let consoleCode = document.getElementById('consoleCode');
consoleCode.innerHTML = "<br />";

function displayConsole(HTML) {
  if (consoleCode) {
    consoleCode.innerHTML += "$ " + HTML + "<br />";
  } else {
    alert("id : consoleCode HTMLに設定してください");
  }
}
