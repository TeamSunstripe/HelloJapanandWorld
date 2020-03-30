
function openURL(url,title) {
    var result = window.confirm(title + "\n[" + url + "]\n" + "を外部ファイルで開きますか");
    if(result){
        window.open(url, title);
    } else {

    }
}

var programmingList = [
  {
    baseDir:"PHP",
    baseURL:"index.html",
    hidden:true,
  },
  {
    baseDir:"Python",
    baseURL:"index.html",
  },
  {
    baseDir:"Ruby",
    baseURL:"index.html",
  },
  {
    baseDir:"HTML",
    baseURL:"index.html",
    hidden:true,
  },
  {
    baseDir:"Java",
    baseURL:"index.html",
    hidden:true,
},
  {
    baseDir:"JavaScript",
    baseURL:"index.html",
    hidden:true,
},
  {
    baseDir:"iOS/ObjectiveC",
    baseURL:"index.html",
    hidden:true,
  },
  {
    baseDir:"iOS/Swift",
    baseURL:"index.html",
    hidden:true,
  },
  {
    baseDir:"ShellScript",
    baseURL:"index.html",
  },
  {
    baseDir:"Android/Java",
    baseURL:"index.html",
    hidden:true,
  },
];

function displayProgrammingList(htmlURL) {
  var HTML = "";
  for (var p = 0; p < programmingList.length; p++) {
    if (programmingList[p].hidden == true) {
      continue;
    }
    if (htmlURL) {
      HTML += '<a class="chalkColor" href="../' + programmingList[p].baseDir + '/' + htmlURL + '">';
    } else {
      HTML += '<a class="chalkColor" href="../' + programmingList[p].baseDir + '/' + programmingList[p].baseURL + '">';
    }
    HTML += '<h4 style="display:inline;padding:20px 20px;">' + programmingList[p].baseDir + '</h4>';
    HTML += '</a>';
  }
  return HTML;
}
