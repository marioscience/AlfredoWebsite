import {Component, OnInit} from "@angular/core";
import {MusicService} from "../../services/music.service";
import {Music} from "../../models/music.model";

@Component({
  selector: "music-section",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.scss"]
})
export class MusicComponent implements OnInit {
  music = new Music();

  constructor(private musicService: MusicService) {
  }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.musicService.getMusic()
      .then(music => this.music = music);
  }

}
