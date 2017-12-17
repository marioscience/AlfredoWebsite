import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/toPromise";

import {Music} from "../models/music.model";

import {LoggerService} from "../core/logger.service";

import {ApiRootConstants as apiUrls} from "../core/app.constants";

@Injectable()
export class MusicService {
  constructor(private http: HttpClient,
              private logger: LoggerService) {
  }

  getMusic(): Promise<any> {
    return this.http.get(apiUrls.music)
      .toPromise()
      .then(response => response as Music)
      .catch(this.logger.handleError);
  }
}
