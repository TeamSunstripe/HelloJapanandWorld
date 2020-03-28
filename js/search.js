var val = getURLVars();
var inputSearchWord = "";
var searchListArea = "";
var amazonID = "karaage1112-22";
/**
 * URL解析して、クエリ文字列を返す
 * @returns {Array} クエリ文字列
 */
function getURLVars() {
    var vars = [], max = 0, hash = "", array = "";
    var url = window.location.search;

    //?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
    hash  = url.slice(1).split('&');
    max = hash.length;
    for (var i = 0; i < max; i++) {
        array = hash[i].split('=');    //keyと値に分割。
        vars.push(array[0]);    //末尾にクエリ文字列のkeyを挿入。
        vars[array[0]] = array[1];    //先ほど確保したkeyに、値を代入。
    }

    return vars;
}

function openURLVars() {
    console.log(val);
    inputSearchWord = document.getElementById('input_search_word');
    searchListArea = document.getElementById('search_list_area');
    if (val) {
        if (val.search) {
            var searchWord = val.search;
            inputSearchWord.value = decodeURI(searchWord);
        }
    }
    displaySearchList();
}

function googleSearch() {
    var googleHTML = "https://www.google.com/search?q=" + inputSearchWord.value;
    var result = window.confirm("Google検索 で[" + inputSearchWord.value + "]一覧表示する");
    if(result){
        window.open(googleHTML, "Google検索");
    } else {

    }
    saveSearchList();
}

function googleSearchList() {
    var googleHTML = "https://www.google.com/?q=" + inputSearchWord.value;
    var result = window.confirm("Google検索 で[" + inputSearchWord.value + "]一覧表示する");
    if(result){
        window.open(googleHTML, "Google検索一覧");
    } else {

    }
    saveSearchList();
}

function googleImageSearch() {
    var googleHTML = "https://www.google.co.jp/search?tbm=isch&q=" + inputSearchWord.value;
    var result = window.confirm("Googleイメージ検索 で[" + inputSearchWord.value + "]を表示する");
    if(result){
        window.open(googleHTML, "Googleイメージ検索");
    } else {

    }
    saveSearchList();
}

function googleTranslateSearch(to) {
  var from = "hl=ja#auto";
    var googleHTML = "https://translate.google.com/?" +from + "/" + to + "/" + inputSearchWord.value;
    var result = window.confirm("Google翻訳 で[" + inputSearchWord.value + "]を表示する");
    if(result){
        window.open(googleHTML, "Google翻訳検索");
    } else {
    }
    saveSearchList();
}

function twitterSearch() {
    var features = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    var twitterHTML = "https://twitter.com/search?q=" + inputSearchWord.value;
    var result = window.confirm("Twitter で[" + inputSearchWord.value + "]を検索する");
    if(result){
        window.open(twitterHTML, "Twitter検索", features);
    } else {

    }
    saveSearchList();
}

function yahooSearch() {
    var yahooHTML = "https://search.yahoo.co.jp/search?p=" + inputSearchWord.value;
    var result = window.confirm("Yahoo! で[" + inputSearchWord.value + "]を検索する");
    if(result){
        window.open(yahooHTML, "Yahoo!検索");
    } else {

    }
    saveSearchList();
}

function wikipediaSearch() {
    var wikipediaHTML = "https://wikipedia.org/wiki/" + inputSearchWord.value;
    var result = window.confirm("Wikipedia で[" + inputSearchWord.value + "]を検索する");
    if(result){
        window.open(wikipediaHTML, "Wikipedia検索");
    } else {

    }
    saveSearchList();
}

function amazonSearch() {
    var amazonHTML = "https://www.amazon.co.jp/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=" + amazonID + "&index=aps&camp=247&creative=1211&linkCode=xm2&linkId=f2b0c2685ecd3f42eac03385d41ccb54&keywords=" + inputSearchWord.value;
    var result = window.confirm("Amazon で[" + inputSearchWord.value + "]を検索する");
    if(result){
        window.open(amazonHTML, "Amazon検索");
    } else {

    }
    saveSearchList();
}

function noteSearch() {
    var noteHTML = "https://note.com/search?context=note&mode=search&q=" + inputSearchWord.value;
    var result = window.confirm("note.com で[" + inputSearchWord.value + "]を検索する");
    if(result){
        window.open(noteHTML, "note.com検索");
    } else {

    }
    saveSearchList();
}

// 辞書系検索サイト
function wordSearch() {
  var wordHTML = "https://sakura-paris.org/dict/%E5%BA%83%E8%BE%9E%E8%8B%91/prefix/" + inputSearchWord.value;
  var result = window.confirm("辞書 で[" + inputSearchWord.value + "]を検索する");
  if(result){
      window.open(wordHTML, "辞書系検索");
  } else {

  }
  saveSearchList();
}

// 通販サイト
function mercariSearch() {
  var mercariHTML = "https://www.mercari.com/jp/search/?keyword=" + inputSearchWord.value;
  var result = window.confirm("mercari で[" + inputSearchWord.value + "]を検索する");
  if(result){
      window.open(mercariHTML, "mercari検索");
  } else {

  }
  saveSearchList();
}

// お仕事依頼サイト
function coconalaSearch() {
  var coconalaHTML = "https://coconala.com/search?keyword=" + inputSearchWord.value;
  var result = window.confirm("coconala で[" + inputSearchWord.value + "]を検索する");
  if(result){
      window.open(coconalaHTML, "coconala検索");
  } else {

  }
  saveSearchList();
}

// お仕事検索サイト
function employmentEnJapanSearch() {
  var employmentEnJapanHTML = "https://employment.en-japan.com/keyword/" + inputSearchWord.value;
  var result = window.confirm("EnJapan で[" + inputSearchWord.value + "]を検索する");
  if(result){
      window.open(employmentEnJapanHTML, "employmentEnJapan検索");
  } else {

  }
  saveSearchList();
}

function greenJapanSearch() {
  var greenJapanHTML = "https://www.green-japan.com/search_key/01?case=&key=&keyword=" + inputSearchWord.value;
  var result = window.confirm("greenJapan で[" + inputSearchWord.value + "]を検索する");
  if(result){
      window.open(greenJapanHTML, "greenJapan検索");
  } else {

  }
  saveSearchList();
}

// 支援サイト
function campFireSearch() {
  var campFireHTML = "https://camp-fire.jp/projects/search?word=" + inputSearchWord.value;
  var result = window.confirm("CampFire で[" + inputSearchWord.value + "]を検索する");
  if(result){
      window.open(campFireHTML, "CampFire検索");
  } else {

  }
  saveSearchList();
}

function saveSearchList() {
  var key = "2e8b24d2b18d7ad40ad4c2ee774401e7a91a797837bee809c65954ba19f4a4fc";
  var saveData = searchSaveList();
  var searchWord = inputSearchWord.value;
  saveData.push(searchWord);
  localStorage.setItem(key, encodeURI(JSON.stringify(saveData)));
  displaySearchList();
}

function searchSaveList() {
  var key = "2e8b24d2b18d7ad40ad4c2ee774401e7a91a797837bee809c65954ba19f4a4fc";
  var search_list = localStorage.getItem(key);
  var saveData = new Array ();
  if (search_list) {
      saveData = JSON.parse(decodeURI(search_list));
  }
  return uniq(saveData);
}

function clearSearchList() {
  var key = "2e8b24d2b18d7ad40ad4c2ee774401e7a91a797837bee809c65954ba19f4a4fc";
  removeItem(key);
  displaySearchList();
}

function selectSearchList(searchItem) {
    inputSearchWord.value = searchItem;
}

function displaySearchList() {
  var searchList = searchSaveList();
  console.log(searchList);
  var HTML = "";
  for (var i = 0;i < searchList.length;i++) {
    var searchItem = searchList[i];
    HTML += '<h1 class="search_list_item" onclick=selectSearchList(\"' + searchItem + '\");>' + searchItem + '<h1>';
  }
  searchListArea.innerHTML = HTML;
}

// localStorage

// localStorageが使用出来るかチェック
if (!window.localStorage) {
    alert("お使いのブラウザはlocalstorageに対応してません。");
}

// localStorageに値を保存
function setItem(key, val) {
    window.localStorage.setItem(key, val);
}

// localStorageから値を取得
function getItem(key) {
    return window.localStorage.getItem(key);
}

// localStorageに保存されている、あるkeyの値を削除する
function removeItem(key) {
    window.localStorage.removeItem(key);
}

// localStorageに保存されているすべての値を削除する
function localStorageClear() {
    window.localStorage.clear();
}

/// Array

function uniq(checkList) {
  const knownElements = {};
  const uniquedList = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i] in knownElements)
      continue;
    uniquedList.push(checkList[i]);
    knownElements[checkList[i]] = true;
  }
  for (var i = 0; i < uniquedList.length; i++) {
    if (uniquedList[i] in knownElements) {
      console.log("knownElements : " + uniquedList[i]);
    }
  }
  return uniquedList;
};
