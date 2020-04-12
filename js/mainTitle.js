function selectObjectiveCFoundation(base_key) {
  if (ObjectiveCFoundationList) {
    var list = ObjectiveCFoundationList;
    var items = "";
    for (var i = 0; i < list.length; i++) {
      if (list[i].header.base == base_key) {
        return list[i];
      }
    }
  }
  alert(ObjectiveCFoundationList);
}

function displayObjectiveCFoundationTitle(base_key,search_key) {
  var HTML = "";
  if (ObjectiveCFoundationList) {

    var list = ObjectiveCFoundationList;
    var items = "";
    for (var i = 0; i < list.length; i++) {
      if (list[i].header.base == base_key) {
        if (search_key == "header") {
          var headerInfo = list[i].header;
          HTML += '<h1 id="main_title" class="title py20x40">';
          HTML += list[i].title;
          HTML += '</h1>';
          HTML += '<section class="backgroundBaseColor">';
          HTML += '<h3>Global Variable</h3>';
          HTML += '<a alt="';
          HTML += headerInfo.details;
          HTML += '" title="';
          HTML += headerInfo.details;
          HTML += '">';
          HTML += '<h2>';
          HTML += headerInfo.description;
          HTML += '</h2>';
          HTML += '</a>';
          HTML += '<p>';
          HTML += headerInfo.details;
          HTML += '</p>';
          HTML += '</section>';
          HTML += '</section>';
          return HTML;
        }
        items = list[i].items;
        break;
      }
    }

    var articleList = items[0].article;
    for (var i = 0; i < items.length; i++) {
      if (items[i].title == base_key) {
        articleList = items[i];
        break;
      }
    }

    var info = "";
    for (var i = 0; i < articleList.length; i++) {
      if (articleList[i].title == search_key) {
        info = articleList[i];
        break;
      }
    }

    if (info != "") {
      HTML += '<h1 id="main_title" class="title py20x40">';
      HTML += info.title;
      HTML += '</h1>';
      HTML += '<section class="backgroundBaseColor">';
      if (info.type) {
        HTML += '<h3>';
        HTML += info.type;
        HTML += '</h3>';
      } else {
        HTML += '<h3>Global Variable</h3>';
      }
      HTML += '<a alt="';
      HTML += info.details;
      HTML += '" title="';
      HTML += info.details;
      HTML += '">';
      HTML += '<h2>';
      HTML += info.description;
      HTML += '</h2>';
      HTML += '</a>';
      HTML += '<p>';
      HTML += info.details;
      HTML += '</p>';
      HTML += '</section>';
      HTML += '</section>';
    }
  }

  return HTML;
}
