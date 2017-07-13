import {Component, OnInit} from "@angular/core";
import {TranscriptionService} from "../../services/transcription.service";
import {Transcription} from "../../models/transcription.model";

@Component({
  selector: "transcription-section",
  templateUrl: "./transcription.component.html"
})
export class TranscriptionComponent implements OnInit {
  constructor(private transcriptionService: TranscriptionService) {
  }

  transcription = new Transcription();

  ngOnInit(): void {
    this.transcriptionService.getTranscription()
      .then(transcription => this.transcription = transcription);
  }
}
