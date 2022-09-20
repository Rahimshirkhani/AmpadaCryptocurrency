import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HttpRequestResult} from "../../models/http-request-result";
import {Coin} from "../../models/coin";


const baseUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(): Observable<HttpRequestResult<Coin[]>> {
    // debugger;
    const requestUrl: string =
      baseUrl+`/tickers`;
    // debugger;
    const requestData = null;


    return this.http.get<HttpRequestResult<Coin[]>>
    (requestUrl)
      .pipe(map(result => {
        return result;
      }));
  }

  public getById(id: number): Observable<HttpRequestResult<Coin>> {
    const requestUrl: string =
      baseUrl + `/ticker/?id=${id}`;
    const requestData = null;
    // debugger;
    return this.http.get<HttpRequestResult<Coin>>
    (requestUrl)
      .pipe(map(result => {
        return result;
      }));
  }
}
