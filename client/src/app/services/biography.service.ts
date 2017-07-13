import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Biography} from "../models/biography.model";

import "rxjs/add/operator/toPromise";

import {ApiRootConstants as apiUrls} from "../core/api-roots.constant";
import {LoggerService} from "../core/logger.service";

@Injectable()
export class BiographyService {
  constructor(private http: Http,
              private logger: LoggerService) {
  }

  getBiography(): Promise<Biography> {
    return this.http.get(apiUrls.biography)
      .toPromise()
      .then(response => response.json() as Biography)
      .catch(this.logger.handleError)
  }
}
