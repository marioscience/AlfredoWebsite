import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/toPromise";

import {Music} from "../models/music.model";

import {LoggerService} from "../core/logger.service";

import {ApiRootConstants as apiUrls} from "../core/app.constants";

@Injectable()
export class MusicService {
  constructor(private http: Http,
              private logger: LoggerService) {
  }

  getMusic(): Promise<Music> {
    return this.http.get(apiUrls.music)
      .toPromise()
      .then(response => response.json() as Music)
      .catch(this.logger.handleError)
  }
}
