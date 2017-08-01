import {Injectable} from "@angular/core";
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";

import {IntroductionService} from "../services/introduction.service";
import {MusicService} from "../services/music.service";
import {TranscriptionService} from "../services/transcription.service";
import {BiographyService} from "../services/biography.service";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';


@Injectable()
export class HomeResolver implements Resolve<any> {
  constructor(private introductionService: IntroductionService,
              private musicService: MusicService,
              private transcriptionService: TranscriptionService,
              private biographyService: BiographyService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return Observable.combineLatest(
      this.introductionService.getIntroduction(),
      this.musicService.getMusic(),
      this.transcriptionService.getTranscription(),
      this.biographyService.getBiography()
    );
  }
}
