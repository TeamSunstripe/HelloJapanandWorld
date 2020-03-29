
function openURL(url,title) {
    var result = window.confirm(title + "\n[" + url + "]\n" + "を外部ファイルで開きますか");
    if(result){
        window.open(url, title);
    } else {

    }
}
