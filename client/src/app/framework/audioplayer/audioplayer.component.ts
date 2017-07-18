/* Divide concern of playlist handing and audio play management if file grows. stay SOLID! */
import {Component, Input, OnInit} from "@angular/core";
import {Song} from "../../models/music.model";

import {Howl} from "howler";

@Component({
  selector: "audio-player",
  templateUrl: "./audioplayer.component.html",
  styleUrls: ["./audioplayer.component.scss"]
})
export class AudioplayerComponent implements OnInit {
  @Input() playList: Array<Song>;
  private currentSong: Song;
  private howlPlayer: Howl;
  private isPlaying: boolean;

  ngOnInit(): void {
    // initialize current song using first in playlist
    this.currentSong = this.playList[0];
    this.howlPlayer = new Howl({
      src: this.currentSong.songUrl
    });
    this.isPlaying = false;
  }

  selectSong(song: Song): void {
    this.currentSong = song;
    this.howlPlayer.stop();
    // javascript is garbage collected. \o/
    this.howlPlayer = new Howl({
      src: this.currentSong.songUrl
    });

    if (this.isPlaying) {
      this.howlPlayer.play();
    }
  }

  playPauseCurrentSong(): void {
    if (this.howlPlayer.playing()) {
      this.howlPlayer.pause();
    } else {
      this.howlPlayer.play();
    }

    this.isPlaying = !this.isPlaying;
  }

  // before implementing this update the view to refresh to changes of selected songs
  playPrevious(): void {
    let currentSongIndex = this.playList.indexOf(this.currentSong);

    //check if player progress is more than 5% then just restart current song and return
    //check if first then do nothing
    if (currentSongIndex === 0) {
      return;
    }

    this.howlPlayer.pause();
    //replace current song by doing index of old -1
    this.currentSong = this.playList[currentSongIndex - 1];
    //change player object to current song and play
    this.howlPlayer = new Howl({
      src: this.currentSong.songUrl
    });

    if (this.isPlaying) {
      this.howlPlayer.play();
    }
  }

  playNext(): void {
    let playListSize = this.playList.length;
    let currentSongIndex = this.playList.indexOf(this.currentSong);

    //check if last then do nothing
    if (currentSongIndex === (playListSize - 1)) {
      return;
    }

    this.howlPlayer.pause();
    //replace current song by doing index of old +1
    this.currentSong = this.playList[currentSongIndex + 1];
    //change player object to current song and play
    this.howlPlayer = new Howl({
      src: this.currentSong.songUrl
    });
    if (this.isPlaying) {
      this.howlPlayer.play();
    }
  }
}
