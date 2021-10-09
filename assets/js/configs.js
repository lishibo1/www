var root = this;
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
customConfig.picUpload = '/FileUpload/picUploadService';
customConfig.picGetToken = '/FileUpload/getFileUploadToken';
customConfig.redirectURL = 'https://www.hkbea.com/html/tc/personal-banking-consumer-loan-instalment-tax-loan.html?';
customConfig.isRedirect = true;
customConfig.maxFileSize = 10;
customConfig.pageTimeout = 30;
customConfig.requestTimeout = 1;
customConfig.alertMobile = '22111211';  /* Page2點擊提交按鈕的電話號碼 */
customConfig.confirmMobile = '22111211';  /* 確認頁撥打的電話號碼 */
customConfig.showMobile = '2211 1211';  /* 確認頁顯示的電話號碼 */
customConfig.isWebview = true;      /* True 表示东亚头部    False 表示不带东亚头部 */
customConfig.shareFB = 'www.hkbea.com/iloan';
customConfig.shareWAProdTC = '東亞銀行「勁快」分期貸款，無須現身，現金一天到手！即按www.hkbea.com/iloan 申請，可享特惠利率及回贈優惠！受條款及細則約束。借定唔借？換得到先好借！';
customConfig.shareWAUatTC = '東亞銀行「勁快」分期貸款，無須現身，現金一天到手！即按whp.hkbea.com/iloan 申請，可享特惠利率及回贈優惠！受條款及細則約束。借定唔借？換得到先好借！';
customConfig.shareWAProdEN = 'BEA “Super-Fast” Installment Loan, get a loan as fast as taking a selfie. Apply via www.hkbea.com/iloan/en to enjoy preferential interest rate and cash rebate! Terms and conditions apply. To borrow or not to borrow? Borrow only if you can repay!';
customConfig.shareWAUatEN = 'BEA “Super-Fast” Installment Loan, get a loan as fast as taking a selfie. Apply via whp.hkbea.com/iloan/en to enjoy preferential interest rate and cash rebate! Terms and conditions apply. To borrow or not to borrow? Borrow only if you can repay!';
customConfig.videoUrl = 'https://d1e8euzdi9wou2.cloudfront.net/ConsumerLoanVideo.mp4';
customConfig.beaAppUrl = 'beahkapp://openpage/current';
customConfig.pdfUrl = {
    "tncTCUat": "https://223.197.58.19/CLN/assets/pdf/CLN_DDA_T&C.pdf",
    "tncENUat": "https://whp.hkbea.com/pdf/en/iloan/DDA_T%26C_en.pdf",
    "tncTCProd": "https://docupload.hkbea.com/CLN/assets/pdf/CLN_DDA_T&C.pdf",
    "tncENProd": "https://www.hkbea.com/pdf/en/iloan/DDA_T%26C_en.pdf",
    "authorizeTCUat": "https://223.197.58.19/CLN/assets/pdf/CLN_DDA.pdf",
    "authorizeENUat": "https://whp.hkbea.com/pdf/en/iloan/DDA_en.pdf",
    "authorizeTCProd": "https://docupload.hkbea.com/CLN/assets/pdf/CLN_DDA.pdf",
    "authorizeENProd": "https://www.hkbea.com/pdf/en/iloan/DDA_en.pdf",
    "atmServiceTCUat": "https://223.197.58.19/CLN/assets/pdf/ATM_T&C.pdf",
    "atmServiceENUat": "https://whp.hkbea.com/pdf/en/cardlessatm/cardless-atm-web-en.pdf",
    "atmServiceTCProd": "https://docupload.hkbea.com/CLN/assets/pdf/ATM_T&C.pdf",
    "atmServiceENProd": "https://www.hkbea.com/pdf/en/cardlessatm/cardless-atm-web-en.pdf",
    "dat": "./assets/pdf/CLN_DEC.pdf",
    "tnctln": "./assets/pdf/CLN_T&C.pdf",
    "ca": "./assets/pdf/eKYC-TU-consent.pdf",
    "apr": "./assets/pdf/APR_Table.pdf",
};
// customConfig.datTC = 'https://www.hkbea.com/pdf/tc/iloan/iloan-declaration.pdf';
// customConfig.datEN = 'http://hkgwcmvt-18/iw/cci/meta/injection/iw-mount/default/main/PBD/WORKAREA/CCFD-Consumer_Loan/pdf/en/iloan/declaration_en.pdf';
// customConfig.tncTC = 'https://www.hkbea.com/pdf/tc/iloan/iloan-tnc.pdf';
// customConfig.tncEN = 'http://hkgwcmvt-18/iw/cci/meta/injection/iw-mount/default/main/PBD/WORKAREA/CCFD-Consumer_Loan/pdf/en/loans/bea-instalment-loan-tnc.pdf';
customConfig.apr = 'https://www.hkbea.com/pdf/tc/iloan/apr-table.pdf';
customConfig.versionLinkLanding = {
    'uatEN': 'https://223.197.58.19/CLN/index.html?language=en',
    'uatTC': 'https://223.197.58.19/CLN/index.html',
    'prodEN': 'https://docupload.hkbea.com/CLN/index.html?language=en',
    'prodTC': 'https://docupload.hkbea.com/CLN/index.html'
}

customConfig.versionLinkBranch = {
    'uatEN': 'https://223.197.58.19/CLN/branch.html?language=en',
    'uatTC': 'https://223.197.58.19/CLN/branch.html',
    'prodEN': 'https://docupload.hkbea.com/CLN/branch.html?language=en',
    'prodTC': 'https://docupload.hkbea.com/CLN/branch.html'
}

customConfig.declarationUatEN = {
    "declaration" : "https://whp.hkbea.com/pdf/en/iloan/iloan-declaration_E.pdf",
    "iloan_tnc" : "https://whp.hkbea.com/pdf/en/iloan/iloan-T&C_E.pdf",
    "PDPO_C" : "https://whp.hkbea.com/pdf/en/iloan/iloan-PDPO_E.pdf",
    "instalment" : "https://whp.hkbea.com/pdf/en/iloan/iloan-KFS_E.pdf"
}
customConfig.declarationUatTC = {
    "declaration" : "https://whp.hkbea.com/pdf/tc/iloan/iloan-declaration.pdf",
    "iloan_tnc" : "https://whp.hkbea.com/pdf/tc/iloan/iloan-tnc.pdf",
    "PDPO_C" : "https://whp.hkbea.com/pdf/tc/iloan/PDPO-C.pdf",
    "instalment" : "https://whp.hkbea.com/pdf/tc/iloan/Instalment%20Loan%20KFS-C.pdf"
}
customConfig.declarationProdEN = {
    "declaration" : "https://www.hkbea.com/pdf/en/iloan/iloan-declaration_E.pdf",
    "iloan_tnc" : "https://www.hkbea.com/pdf/en/iloan/iloan-T&C_E.pdf",
    "PDPO_C" : "https://www.hkbea.com/pdf/en/iloan/iloan-PDPO_E.pdf",
    "instalment" : "https://www.hkbea.com/pdf/en/iloan/iloan-KFS_E.pdf"
}
customConfig.declarationProdTC = {
    "declaration" : "https://www.hkbea.com/pdf/tc/iloan/iloan-declaration.pdf",
    "iloan_tnc" : "https://www.hkbea.com/pdf/tc/iloan/iloan-tnc.pdf",
    "PDPO_C" : "https://www.hkbea.com/pdf/tc/iloan/PDPO-C.pdf",
    "instalment" : "https://www.hkbea.com/pdf/tc/iloan/Instalment%20Loan%20KFS-C.pdf"
}
customConfig.appImgTop = {
    'uatTC' : 'https://whp.hkbea.com/images/tc/instalment-loan/app_imgTop.jpg',
    'uatEN' : 'https://whp.hkbea.com/images/en/instalment-loan/app_imgTop.jpg',
    'prodTC' : 'https://www.hkbea.com/images/tc/instalment-loan/app_imgTop.jpg',
    'prodEN' : 'https://www.hkbea.com/images/en/instalment-loan/app_imgTop.jpg',
}
customConfig.rule = {
    "EN": "https://www.hkbea.com/pdf/en/Rule_of_78.pdf",
    "TC": "https://www.hkbea.com/pdf/tc/Rule_of_78_c.pdf"
}
customConfig.lessLoanInWithdraw = 30000;
customConfig.applyRange = [{
    "key": "1",
    "minAmount": 0,
    "maxAmount": 15000
},{
    "key": "2",
    "minAmount": 15000,
    "maxAmount": 30000
}]

// customConfig.env = 'dev';
customConfig.env = 'prd';