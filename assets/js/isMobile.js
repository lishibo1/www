function browserRedirect() {
  var tablet = ["ipad", "xoom", "sch-i800", "playbook", "tablet", "kindle"];
  var mobile = ["mobile", "iphone", "ipod", "blackberry", "windows phone", "palm", "smartphone", "iemobile", "nokia"];
  var IOS = ["iphone", "ipod", "ipad"];
  var isTablet = false, isMobile = false, isIOS = false;
  var sUserAgent = navigator.userAgent.toLowerCase();
  for (index in tablet) {
    isTablet = sUserAgent.indexOf(tablet[index]) != -1;
    if (isTablet) break;
  }
  for (index in mobile) {
    isMobile = sUserAgent.indexOf(mobile[index]) != -1;
    if (isMobile) break;
  }
  for (index in IOS) {
    isIOS = sUserAgent.indexOf(IOS[index]) != -1;
    if (isIOS) break;
  }
  if (!(isTablet || isMobile || isIOS)) {
    var cCode = getUrlParams('c');
    var url = '';
    if (cCode) {
      url = customConfig.redirectURL + '?' + cCode + '&' + window.location.search.substr(1);
    } else {
      url = customConfig.redirectURL + window.location.search;
    }
    window.location.href = url;
  }
}
function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式
    var regOk = /^[A-Za-z0-9\%\-\.\:\/]+$/;
    var parURL = window.location.search;
    var r = parURL.substr(1).match(reg);
    if (r != null && regOk.test(r[2])) {
        return r[2];
    }
    return '';
}

browserRedirect();
window.onload = function () {
  var lastTime = new Date();
  document.addEventListener('touchstart', function (event) {
    var data = new Date();
    if ((data - lastTime) > customConfig.pageTimeout * 60 * 1000) {
      window.location.reload();
      event.returnValue = false;
    }
    lastTime = data;
  }, false);
};
