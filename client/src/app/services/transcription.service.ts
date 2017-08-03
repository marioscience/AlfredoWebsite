import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Transcription} from "../models/transcription.model";

import {LoggerService} from "../core/logger.service";
import {ApiRootConstants as apiUrls} from "../core/app.constants";

import "rxjs/add/operator/toPromise";

@Injectable()
export class TranscriptionService {
  constructor(private http: Http,
              private logger: LoggerService) {
  }

  getTranscription(): Promise<Transcription> {
    return this.http.get(apiUrls.transcription)
      .toPromise()
      .then(response => response.json()[0] as Transcription) // TODO: Find out why that one needs an index
      .catch(this.logger.handleError)
  }
}
