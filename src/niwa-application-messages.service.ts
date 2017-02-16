import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Response, Http} from '@angular/http';
import {Message} from './message';


@Injectable()
export class NiwaApplicationMessagesService {
    private baseUrl:string;

    constructor(private http: Http) {
        this.baseUrl = '/status/message';
    }

    public getMessage():Observable<any> {
        return this.http.get(this.baseUrl)
            .map(this.mapResponse)
            .catch(this.handleError);
    }


    private handleError(error:any) {
        return Observable.throw(error || 'Server Error');
    }

    private mapResponse(res:Response):any {
        let xml = res.text();
        var oParser = new DOMParser();
        var xmlDoc = oParser.parseFromString(xml, "text/xml");

        let appMessageContainer = xmlDoc.getElementsByTagName("app_message");
        var appstatus = appMessageContainer[0].getAttribute('status');
        var text = appMessageContainer[0].getElementsByTagName("status_text")[0].childNodes[0].nodeValue;


        let message = new Message(appstatus, text);

        return message;
    }
}