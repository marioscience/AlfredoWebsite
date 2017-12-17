import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Biography} from "../models/biography.model";

import "rxjs/add/operator/toPromise";

import {ApiRootConstants as apiUrls} from "../core/app.constants";
import {LoggerService} from "../core/logger.service";

@Injectable()
export class BiographyService {
  constructor(private http: HttpClient,
              private logger: LoggerService) {
  }

  getBiography(): Promise<any> {
    return this.http.get(apiUrls.biography)
      .toPromise()
      .then(response => response as Biography)
      .catch(this.logger.handleError)
  }
}
