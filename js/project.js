var projectList = [
  {
    header : {
      title:"結髪協会",
      baseDir:"Android/Java",
    }
    items:[
      /* item0 start */
      {
        title:"結髪協会",
        openURL:"https://note.com/thecardgame/m/m62e8ba86fbb4",
        baseURL:"index.html",
        hidden:false,
      },
      /* item0 start */
    ],
  },
  /*
  {
    title:"結髪協会",
    baseDir:"Android/Java",
    openURL:"https://note.com/thecardgame/m/m62e8ba86fbb4",
    baseURL:"index.html",
    hidden:false,
  },
  */
];

function displayProjectList(linkcolor,htmlURL) {
  var HTML = "";
  var headerInfo = projectList.header;
  var itemList = projectList.items;
  for (var p = 0; p < itemList.length; p++) {
    if (itemList[p].hidden == true) {
      continue;
    }
    var openURL = itemList[p].openURL;
    if (openURL) {
      var arr = openURL.match(/https?/);
      if (arr) {
        HTML += '<a class="'+ linkcolor +'" href="' + openURL + '" target="_blank">';
      } else {
        HTML += '<a class="'+ linkcolor +'" href="' + '../' + headerInfo.baseDir + '/' + itemList[p].baseURL + '">';
      }
    } else {
      var arr = htmlURL.match(/https?/);
      if (arr) {
      } else {
        HTML += '<a class="'+ linkcolor +'" href="' + '../' + headerInfo.baseDir + '/' + itemList[p].baseURL + '">';
      }
    }
    HTML += '<h4 class="chalk">' + itemList[p].title + '</h4>';
    HTML += '</a>';
  }
  return HTML;
}
