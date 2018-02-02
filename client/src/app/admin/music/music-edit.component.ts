import {Component} from "@angular/core";
import {Music, Song} from "../../models/music.model";
import {MusicService} from "../../services/music.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: "music-edit",
  templateUrl: "./music-edit.component.html",
  styleUrls: ["./music-edit.component.scss"]
})
export class MusicEditComponent {

  music = new Music();
  editMode: boolean = false;
  songToEdit: Song;
  addMode: boolean = false;
  newSong: Song = new Song();

  constructor(private musicService: MusicService, private snackBar: MatSnackBar) {
    this.musicService.getMusic()
      .then((data) => {
        this.music = data;
      });
  }

  editSong(song): void {
    this.editMode = true;
    this.songToEdit = Object.assign({}, song);
  }

  cancelSongEdit(): void {
    this.editMode = false;
  }

  addNewSong(): void {
    this.addMode = true;
  }

  cancelSongAdd(): void {
    this.addMode = false;
  }

  saveVideo(): void {
    this.musicService.saveVideo(this.music)
      .then(() => {
        this.snackBar.open("Video URL Updated successfully", "", {duration: 2000});
      })
      .catch(() => {
        this.snackBar.open("Video URL Updated successfully", "!!!", {duration: 2000});
      });

  }

  saveEdit(): void {

  }

  saveNewSong(): void {

  }

}
