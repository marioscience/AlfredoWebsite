import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Music} from "../../models/music.model";

@Component({
  selector: "music-section",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.scss"]
})
export class MusicComponent implements OnInit {
  music = new Music();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.route.data.subscribe(data => {
      const musicIndex = 1;
      this.music = <Music>data.resolved[musicIndex];
    })
  }

}
