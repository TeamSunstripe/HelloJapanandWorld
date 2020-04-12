
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
    HTML += '<h4 class="chalk">' + programmingList[p].baseDir + '</h4>';
    HTML += '</a>';
  }
  return HTML;
}

var sideNav;
var footerDiv;

window.onload = function() {
  sideNav = document.getElementById("side-nav");
  footerDiv = document.getElementById("footer");
}

window.onscroll = function() {
  if (sideNav && footerDiv) {

    var startOffsetTop = sideNav.offsetTop;
    var footerOffsetTop = footerDiv.offsetTop;

    var scrollTop = document.documentElement.scrollTop || // IE、Firefox、Opera
    document.body.scrollTop;              // Chrome、Safari
      if (startOffsetTop < scrollTop && footerOffsetTop - sideNav.clientHeight> scrollTop) {
          if (sideNav) {
            sideNav.style.position = "fixed";
            sideNav.style.top = "0" + "px";
          }
      } else {
        if (sideNav) {
          sideNav.style.position = "static";
        }
      }
    }
}

//

function displaySideMenuNavList (baseDir,imgDir,sideMenuNavList) {
  var HTML = "";
  for (var snh = 0;snh < sideMenuNavList.length;snh++) {
    var headerInfo = sideMenuNavList[snh].header;
    HTML += '<li class="side_header">';
    HTML += '<h4 class="side_text">';
    var headerImageURL = imgDir + headerInfo.img;
    if (!headerImageURL) {
      headerImageURL = imgDir + "school.png";
    }
    HTML += '<img src="';
    HTML += headerImageURL;
    HTML += '" class="side_image" alt="';
    HTML += headerInfo.title;
    HTML += '" title="';
    HTML += headerInfo.title;
    HTML += '"/>';
    HTML += '<span class="side_title">';
    HTML += headerInfo.title;
    HTML += '</span>';
    HTML += '</h4>';
    HTML += '</li>';
    var menuItems = sideMenuNavList[snh].items;
    for (var snm = 0;snm < menuItems.length;snm++) {
      var menuItem = menuItems[snm];
      HTML += '<li class="side_hover';
      if (menuItem.hidden == true) {
        HTML += ' display_none';
      }
      HTML += '">';
      var itemHrefURL = baseDir + menuItem.href;
      if (!itemHrefURL) {
        itemHrefURL = "#";
      }
      HTML += '<a href="';
      HTML += itemHrefURL;
      HTML += '">';
      HTML += '<h4 class="side_text">';
      var itemImageURL = imgDir + menuItem.img;
      if (!itemImageURL) {
        itemImageURL = imgDir + "school.png";
      }
      HTML += '<img src="';
      HTML += itemImageURL;
      HTML += '" class="side_image" alt="';
      HTML += menuItem.title;
      HTML += '" title="';
      HTML += menuItem.title;
      HTML += '"/>';
      HTML += '<span class="side_title">';
      HTML += menuItem.title;
      HTML += '</span>';
      HTML += '</h4>';
      HTML += '</a>';
      HTML += '</li>';
    }
  }
  return HTML;
}

function createList(list) {
  var HTML = "";
  for (var i = 0; i < list.length; i++) {
    HTML += '<a href="';
    HTML += list[ i ].href;
    HTML += '" target="';
    var target = list[ i ].target;
    if (!target) {
      target = "_blank";
    }
    HTML += target;
    HTML += '">';
    HTML += '<h5>';
    HTML += list[ i ].title;
    HTML += '</h5>';
    HTML += '</a>';
  }
  return HTML;
}

function displayList(list) {
   document.write(createList(list));
}

function createSectionList(list) {
  var HTML = "";
  for (var s = 0; s < list.length; s++) {
    if (list[s].header.title) {
      if (list[s].identifier) {
        HTML += '<h1 id="';
        HTML += list[s].identifier;
        HTML += '" class="title py20x40">';
      } else {
        HTML += '<h1 class="title py20x40">';
      }
      HTML += list[s].header.title;
      HTML += '</h1>';
    }
    var items = list[s].items;
    for (var i = 0; i < items.length; i++) {
      HTML += '<section>';

      HTML += '<h1 class="title" style="padding:10px;background-color:rgba(0,0,0,0.3);">';
      HTML += items[i].title;
      HTML += '</h1>';
      var article = items[i].article;
      for (var a = 0; a < article.length; a++) {
        HTML += '<article>';
        HTML += '<details open>';
        HTML += '<summary>';
        HTML += article[a].title;
        HTML += '</summary>';
        if (article[a].href) {
          HTML += '<a href="';
          HTML += article[a].href;
          HTML += '" alt="';
          HTML += article[a].title;
          HTML += '" title="';
          HTML += article[a].title;
          HTML += '">';
          HTML += '<h3 style="display:inline;" class="subtitle py20x40">';
          HTML += article[a].title;
          HTML += '</h3>';
          HTML += '</a>';
        }
        if (article[a].appleURL) {
          HTML += '<a href="';
          HTML += article[a].appleURL;
          HTML += '" alt="';
          HTML += article[a].title;
          HTML += '" title="';
          HTML += article[a].title;
          if (article[a].appleURL) {
            HTML += '" target="';
            HTML += "_blank";
          }
          HTML += '">';
          HTML += '<h3 style="display:inline;" class="subtitle py20x40">';
          HTML += "appleURL";
          HTML += '</h3>';
          HTML += '</a>';
        }

        if (article[a].description) {
          HTML += '<h4 class="subtitle py20x40">';
          HTML += article[a].description;
          HTML += '</h4>';
        }

        if (article[a].details) {
          HTML += '<p class="backgroundWhiteColor">';
          HTML += article[a].details;
          HTML += '</p>';
        }
        HTML += '</details>';
        HTML += '</article>';
      }

      HTML += '</section>';
    }
  }
  return HTML;
}

function displaySectionList(elementID,list) {
  var element = document.getElementById(elementID);
  element.innerHTML = createSectionList(list);
}

function createListWithTag(tag,list) {
  var HTML = "";
  for (var i = 0; i < list.length; i++) {
    HTML += '<a href="';
    HTML += list[ i ].href;
    HTML += '" target="';
    var target = list[ i ].target;
    if (!target) {
      target = "_blank";
    }
    HTML += target;
    HTML += '">';
    HTML += tag.start;
    HTML += '<img style="width:20%;max-width:200px;" src="';
    HTML += list[ i ].img;
    HTML += '" alt="';
    HTML += list[ i ].title;
    HTML += '" title="';
    HTML += list[ i ].title;
    HTML += '"/>';
    if (list[ i ].title_hidden != true) {
      HTML += list[ i ].title;
    }
    HTML += tag.end;
    HTML += '</a>';
  }
  return HTML;
}

function displayListWithTag(tag,list) {
  document.write(createListWithTag(tag,list));
}

/// Alert / Popup

function closeAlert() {
	// 要素の削除
	const alertBaseDiv = document.getElementById("alertPopupSection");
  if (alertBaseDiv) {
    document.body.removeChild(alertBaseDiv);
  }
}

function alertMessage(title,message,handler) {
  if (!handler) {
    handler = function () {
      closeAlert();
    }
      alert(handler);
  }
	const alertPopupDiv = document.createElement("div");
  alertPopupDiv.id = "alertPopup";
  alertPopupDiv.style.backgroundColor = "rgba(255,255,255,0.8)";
  alertPopupDiv.style.width = ((document.body.clientWidth - 100) + "px");
	const alertBaseDiv = document.createElement("section");
  alertBaseDiv.id = "alertPopupSection";
  alertBaseDiv.style.position = "fixed";
  alertBaseDiv.style.top = (0 + "px");
  alertBaseDiv.style.left = (0 + "px");
  alertBaseDiv.style.width = (document.body.clientWidth + "px");
  alertBaseDiv.style.height = (document.body.clientHeight + "px");
  alertBaseDiv.style.backgroundColor = "rgba(0,0,0,0.3)";
  var alertHTML = "";
  alertHTML += "<h1>";
  alertHTML += title;
  alertHTML += "</h1>";
  alertHTML += "<h3>";
  alertHTML += message;
  alertHTML += "</h3>";
  alertHTML += "<button onclick=handler>";
  alertHTML += "ボタン";
  alertHTML += "</button>";
  /* const alertHTMLChild = document.createTextNode(alertHTML);*/
	alertPopupDiv.innerHTML = alertHTML;
  alertBaseDiv.appendChild(alertPopupDiv);
	document.body.appendChild(alertBaseDiv);
}


  function showNoticePopup(message) {
    var noticePopupSection = document.getElementById("noticePopupSection");
    var noticePopupMessage = document.getElementById("noticePopupMessage");
    // タイトルとメッセージをセットする
    message = message.replace(/\n/g, "<br />");
    noticePopupMessage.innerHTML = message;
    // いったん上端に移動する
    var noticePopupX = 0;
    var noticePopupY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
    noticePopupSection.style.top = -1 * noticePopupY + "px"; // (適当な計算)
    // 中央に移動する
    var noticePopupXs = document.body.scrollLeft;
    var noticePopupYs = document.body.scrollTop;
    noticePopupX = (window.innerWidth !== undefined) ? window.innerWidth : document.body.clientWidth;
    noticePopupY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
    noticePopupSection.style.left = (noticePopupX - noticePopupSection.clientWidth)/ 2 + "px";
    noticePopupSection.style.top = 0 + noticePopupYs + "px"; // (適当な計算)

    // 警告画面を表示
    noticePopupSection.style.visibility = "visible";
    // フェードイン
    noticePopupSection.className = "fadein";
  }
  function closeNoticePopup() {
    var noticePopupSection = document.getElementById("noticePopupSection");
    // 上端に移動する
    var noticePopupY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
    noticePopupSection.style.top = -1 * noticePopupY + "px"; // (適当な計算)

    // フェードアウト
    noticePopupSection.className = "fadeout";

    // 警告画面を隠す
    noticePopupSection.style.visibility = "hidden";
  }

  function alertMessage(title, message){
    var alertTitleDiv = document.getElementById("alertTitle");
    var alertMessageDiv = document.getElementById("alertMessage");
    var alertPopupSection = document.getElementById("alertPopupSection");
  // タイトルとメッセージをセットする
  message = message.replace(/\n/g, "<br />");
  alertTitleDiv.innerHTML = title;
  alertMessageDiv.innerHTML = message;
  // いったん上端に移動する
  var alertX = 0;
  var alertY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
  alertPopupSection.style.top = -1 * alertY + "px"; // (適当な計算)

  // 中央に移動する
  var alertXs = document.body.scrollLeft;
  var alertYs = document.body.scrollTop;
  alertX = (window.innerWidth !== undefined) ? window.innerWidth : document.body.clientWidth;
  alertY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
  alertPopupSection.style.left = (alertX - alertPopupSection.clientWidth)/ 2 + "px";
  alertPopupSection.style.top = (alertY - alertPopupSection.clientHeight)/ 2 + "px"; // (適当な計算)

  // 警告画面を表示
  alertPopupSection.style.visibility = "visible";

  // フェードイン
  alertPopupSection.className = "fadein";
  }
  function alertMessageClose(){
  // 上端に移動する
  var alertY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
  alertPopupSection.style.top = -1 * alertY + "px"; // (適当な計算)

  // フェードアウト
  alertPopupSection.className = "fadeout";

  // 警告画面を隠す
  alertPopupSection.style.visibility = "hidden";
  }

  /// 文字処理
  function replaceAll(text) {
    const startText = text.replace(/</g, '&lt;');
    const endText = startText.replace(/>/g, '&gt;');
    return endText;
  }
