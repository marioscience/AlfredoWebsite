import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {toPromise} from "rxjs/operator/toPromise";

import {LoggerService} from "../../core/logger.service";

@Injectable()
export class ConcertTourboxService {

  constructor(private http: Http,
              private logger: LoggerService) {
  }

  getConcerts(url): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.logger.handleError);
  };
}
