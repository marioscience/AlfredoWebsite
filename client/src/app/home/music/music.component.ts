import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Music} from "../../models/music.model";
import {DomSanitizer} from "@angular/platform-browser";

import {SectionScrollService} from "../../framework/sectionscroll/section-scroll.service";

@Component({
  selector: "music-section",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.scss"]
})
export class MusicComponent implements OnInit {
  music = new Music();
  safeUrl: any;

  constructor(private route: ActivatedRoute,
              private sectionScrollService: SectionScrollService,
              private _sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.route.data.subscribe(data => {
      const musicIndex = 1;
      this.music = <Music>data.resolved[musicIndex];
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.music.videoUrl);
    })
  }

  videoLoaded(videoSize): void {
    this.sectionScrollService.resolvePendingTargets();
  }
}
