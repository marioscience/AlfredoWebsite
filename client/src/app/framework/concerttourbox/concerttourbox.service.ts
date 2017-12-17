import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {LoggerService} from "../../core/logger.service";

@Injectable()
export class ConcertTourboxService {

  constructor(private http: HttpClient,
              private logger: LoggerService) {
  }

  getConcerts(url): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(response => response)
      .catch(this.logger.handleError);
  };
}
