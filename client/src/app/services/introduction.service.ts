import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/toPromise";

import {Introduction} from "../models/introduction.model";

import {LoggerService} from "../core/logger.service";

import {ApiRootConstants as apiUrls} from "../core/app.constants";

@Injectable()
export class IntroductionService {
  constructor(private http: HttpClient,
              private logger: LoggerService) {
  }

  // private header = new Headers({"Content-Type": "applications/json"});

  getIntroduction(): Promise<any> {
    return this.http.get(apiUrls.introduction)
      .toPromise()
      .then(response => response as Introduction)
      .catch(this.logger.handleError);
  }

}
