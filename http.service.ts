import { Injectable } from "@angular/core";
import { Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
declare let customConfig: any;

@Injectable()
export class HttpService {
    userType: string = 'Tc';
    sendData: object;
    isHK: string = 'Y';
    isCustomer: boolean = false;
    isHomeWork: boolean = false;
    hasATMService: boolean = false;
    loanAmount: number = 0;
    isScroll: boolean = false;
    scrollTo: string = '';
    maxAmount: number = 0;

    private service:object;
    private localService:object;

    constructor(public http: Http) {
        this.service = {
            "getgiftsservice": "/SUP/getGifts",
            "getidentityservice": "/SUP/getIdentity",
            "getnationalityservice":"/SUP/getNationality",
            "pe3service": "/SUP/pe3Service",
            "saveprincipalcardservice":"/SUP/savePrincipalCard",
            "deleteinfoservice":"/SUP/deleteInfo",
            "sendsmsservice":"/SUP/sendSMS",
            "checksmsservice":"/SUP/checkSMS",
            "savecardlimitservice":"/SUP/saveCardLimit",
            "saveBasicInfo": "/SUP/saveBasicInfo",
            "getpictureservice": "/SUP/getPicture",
            "deletepictureservice":"/SUP/deletePicture",
            "callEKYC":"/SUP/callEKYC",
            "getemploymentservice": "/SUP/getEmployment",
            "getoccupationservice": "/SUP/getOccupation",
            "getbeapositionservice": "/SUP/getBEAPosition",
            "getpositionservice": "/SUP/getPosition",
            "confirminfoservice": "/SUP/confirmInfo",
            "updatebasicinfoservice": "/SUP/updateBasicInfo",
            "getrelationservice": "/SUP/getRelation",
            "getResultService":"/SUP/confirm",
            "savelandingcodeservice": "/SUP/toPrincipalCard",
            "openApiSignatureValidate": "/SUP/openApiSignatureValidate"
        };
        this.localService = {
            "getgiftsservice": "assets/getGiftsService.json",
            "getidentityservice": "assets/getIdentityService.json",
            "getnationalityservice":"assets/getNationalityService.json",
            "pe3service": "assets/pe3Service.json",
            "saveprincipalcardservice":"assets/savePrincipalCardService.json",
            "deleteinfoservice": "assets/deleteInfoService.json",
            "sendsmsservice":"assets/sendSMSService.json",
            "checksmsservice":"assets/checkSMSService.json",
            "savecardlimitservice":"assets/savecardlimitservice.json",
            "saveBasicInfo": "assets/saveBasicInfoService.json",
            "getpictureservice": "assets/getPictureService.json",
            "deletepictureservice":"assets/deletePictureService.json",
            "callEKYC":"assets/callEKYC.json",
            "getemploymentservice": "assets/getEmploymentService.json",
            "getoccupationservice": "assets/getOccupationService.json",
            "getbeapositionservice": "assets/getBeaPositionService.json",
            "getpositionservice": "assets/getPositionService.json",
            "confirminfoservice":"assets/confirmInfoService.json",
            "updatebasicinfoservice": "assets/updateBasicInfoService.json",
            "getrelationservice": "assets/getRelationService.json",
            "getResultService":"assets/getResultService.json",
            "savelandingcodeservice": "assets/savelandingcodeservice.json",
            "openApiSignatureValidate": "assets/openApiSignatureValidate.json"
        };
    }

    setData(data){
        this.sendData = data;
    }
    
    httpRequest(service:string, sendData ?: object): Promise<any> {
        // console.log(JSON.stringify(sendData));
        let timeRate = service == 'callEKYC' ? 2 :  1;
        let serve;
        if (customConfig.env == "online") {
            serve = this.http.post(this.service[service],JSON.stringify(sendData));
        } else {
            serve = this.http.get(this.localService[service]);
        }
        return serve.timeout(customConfig.requestTimeout*timeRate*60*1000).toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    imgUpload(data): Promise<any> {
        let serve;
        if (customConfig.env == "online") {
            serve = this.http.post(customConfig.picUpload, JSON.stringify(data));
        } else {
            serve = this.http.get("assets/uploadpic.json",JSON.stringify(data));
        }
        return serve.timeout(customConfig.requestTimeout*60*1000).toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    imgToken(): Promise<any> {
        let serve;
        if (customConfig.env == "online") {
            serve = this.http.post(customConfig.picGetToken, '');
        } else {
            serve = this.http.get("assets/getFileUploadToken.json",'');
        }
        return serve.timeout(customConfig.requestTimeout*60*1000).toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
