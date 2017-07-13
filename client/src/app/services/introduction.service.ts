import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/toPromise";

import {Introduction} from "../models/introduction.model";

import {LoggerService} from "../core/logger.service";

import {ApiRootConstants as apiUrls} from "../core/api-roots.constant";

@Injectable()
export class IntroductionService {
  constructor(private http: Http,
              private logger: LoggerService) {
  }

  // private header = new Headers({"Content-Type": "applications/json"});

  getIntroduction(): Promise<Introduction> {
    return this.http.get(apiUrls.introduction)
      .toPromise()
      .then(response => response.json() as Introduction)
      .catch(this.logger.handleError)
  }

}
