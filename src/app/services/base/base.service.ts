import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from 'rxjs/operators';

export class BaseService {

    constructor(public http: HttpClient, public api) {
    }

    sendFile(file: any): Observable<any> {
        const url = `${this.service()}/${this.api}`;
        return this.http.post(url, file, { responseType: 'text' })
            .pipe(tap(), catchError(this.handleError<any>('base service add')));
    }

    protected log(message: string) {
        message = message;
    }

    @param operation - name of the operation that failed
    @param result - optional value to return as the observable result
     
    protected handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

        console.error(error);

        this.log(`${operation} failed: ${error.message}`);

        return of(result as T);
    };
}

service(): string {
    var url = environment.endpoint.endsWith("/") ?
        environment.endpoint.substring(0, environment.endpoint.length - 1) : environment.endpoint;

    return url;
}
}