var root = this;
var getUrlParams = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式
    var regOk = /^[A-Za-z0-9]+$/;
    var parURL = window.location.search;
    var r = parURL.substr(1).match(reg);
    if (r != null && regOk.test(r[2])) {
        return r[2];
    }
    return '';
}
var customConfig = function(obj) {
    if (obj instanceof customConfig) return obj;
    if (!(this instanceof customConfig)) return new customConfig(obj);
};
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = customConfig;
    }
    exports.customConfig = customConfig;
} else {
    root.customConfig = customConfig;
}
customConfig.prodDomain = 'docupload.hkbea.com';
customConfig.picUpload = '/FileUpload/picUploadService';
customConfig.picGetToken = '/FileUpload/getFileUploadToken';
customConfig.redirectURL = 'https://www.hkbea.com/html/tc/suppcard.html?' + getUrlParams("c");
customConfig.isRedirect = true;
customConfig.maxFileSize = 10;
customConfig.pageTimeout = 30;
customConfig.requestTimeout = 1;
customConfig.alertMobile = '22111211';  /* Page2點擊提交按鈕的電話號碼 */
customConfig.confirmMobile = '22111211';  /* 確認頁撥打的電話號碼 */
customConfig.showMobile = '2211 1211';  /* 確認頁顯示的電話號碼 */
customConfig.isWebview = true;      /* True 表示东亚头部    False 表示不带东亚头部 */
customConfig.shareFB = 'www.hkbea.com/isupp';
customConfig.shareWA = '立即前往 https://www.hkbea.com/isupp 申請專享全年精彩優惠！';
customConfig.videoUrl = 'https://d1e8euzdi9wou2.cloudfront.net/BEA_HKID_selfile.mp4';

customConfig.beaAppUrl = 'beahkapp://openpage/current';
customConfig.pdfUrl = {
    "dat": "./assets/pdf/declaration.pdf",
    "tnctln": "./assets/pdf/SUP_T&C.pdf",
    "ca": "./assets/pdf/eKYC-TU-consent.pdf"
};
customConfig.declarationProd = {
    "declaration":"https://www.hkbea.com/pdf/tc/credit-card/declaration.pdf",
    "allTnc":"https://www.hkbea.com/pdf/tc/credit-card/all_tnc_tc.pdf",
    "major":"https://www.hkbea.com/pdf/en/major%20tc%20of%20cc_e.pdf",
    "agrPersonal":"https://www.hkbea.com/pdf/tc/agr_personal.pdf",
    "privacyPolicy":"https://www.hkbea.com/pdf/tc/hkbea-privacy-policy-declaration.pdf",
    "suppCard":"https://www.hkbea.com/pdf/tc/supp_card_key_facts_statement_tc.pdf"
};
customConfig.declarationUat = {
    "declaration":"https://www.hkbea.com/pdf/tc/credit-card/declaration.pdf",
    "allTnc":"https://www.hkbea.com/pdf/tc/credit-card/all_tnc_tc.pdf",
    "major":"https://www.hkbea.com/pdf/en/major%20tc%20of%20cc_e.pdf",
    "agrPersonal":"https://www.hkbea.com/pdf/tc/agr_personal.pdf",
    "privacyPolicy":"https://www.hkbea.com/pdf/tc/hkbea-privacy-policy-declaration.pdf",
    "suppCard":"https://www.hkbea.com/pdf/tc/supp_card_key_facts_statement_tc.pdf"
};
customConfig.lessLoanInWithdraw = 30000;
customConfig.applyRange = [{
    "key": "1",
    "minAmount": 0,
    "maxAmount": 15000
},{
    "key": "2",
    "minAmount": 15000,
    "maxAmount": 30000
}];

customConfig.env = "online";
// customConfig.env = "local";