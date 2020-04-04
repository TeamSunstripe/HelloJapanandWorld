function facebookShare(shareURL) {
  var arr = shareURL.match(/https?/);
  if (arr) {
    var facebookShareURL = "https://www.facebook.com/share.php?u=" + shareURL;
    var result = window.confirm("Facebook でシェアしますか？");
    if (result) {
      window.open(facebookShareURL, "Facebookシェア");
    } else {

    }
  } else {
    if (alertMessage) {
      alertMessage(shareURL,"シェアができる方式ではありませんでした。");
    }
    facebookShare("http://sunstripe.main.jp/");
  }
}
