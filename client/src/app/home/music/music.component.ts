import {Component, OnInit} from "@angular/core";
import {MusicService} from "../../services/music.service";
import {Music} from "../../models/music.model";

@Component({
  selector: "music-section",
  template: `
    <h1> This is the music. put something here come on man</h1>
    <div>
      <p>Video link: {{ music.videoUrl }}</p>
      <div *ngFor="let song of music.musicPlaylist">
        <h2>{{ song.artist }}</h2>
        <h1>{{ song.songName }}</h1>
        <h3>{{ song.songUrl }}</h3>
      </div>
    </div>
  `
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
