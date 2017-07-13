import {Component, OnInit} from "@angular/core";
import {TranscriptionService} from "../../services/transcription.service";
import {Transcription} from "../../models/transcription.model";

@Component({
  selector: "transcription-section",
  template: `
    <h1> This is the transcription. put something here come on man</h1>
    <h2>Transcriptions</h2>
    <p>{{ transcription.description }}</p>
    {{transcription.description}}
    <div>
      <div style="border: 2px solid black" *ngFor="let transcriptionItem of transcription.transcriptions">
        <h2>{{ transcriptionItem.title }}</h2>
        <p>videoL {{ transcriptionItem.videoUrl }}</p>
        <p>{{ transcriptionItem.description }}</p>
        <p style="text-decoration: underline">{{ transcriptionItem.pdfUrl }}</p>
      </div>
    </div>
  `
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
