import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from 'rxjs/operators';
import { LoteTrackerError } from "src/app/Models/LoteTrackerError";
import { throwError } from "rxjs";

export class BaseService {

    constructor(
        public http: HttpClient,
        public api
    ) {

    }

    sendFile(file: any): Observable<any | LoteTrackerError> {
        const url = `${this.service()}/${this.api}`;
        return this.http.post(url, file, { responseType: 'text' })
            .pipe(
                tap(),
                catchError(error => this.handleHttpError(error))
            );
    }

    private handleHttpError(error: HttpErrorResponse): Observable<LoteTrackerError> {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            let dataError = new LoteTrackerError();
            dataError.errorNumber = 100;
            dataError.message = JSON.parse(error.error);
            dataError.friendlyMessage = "An error occurred while trying to import file. Try again.";
            return throwError(dataError);
        }
    }

    protected log(message: string) {
        message = message;
    }

    service(): string {
        var url = environment.endpoint.endsWith("/") ?
            environment.endpoint.substring(0, environment.endpoint.length - 1) : environment.endpoint;

        return url;
    }
}