import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Transcription} from "../../models/transcription.model";

@Component({
  selector: "transcription-section",
  templateUrl: "./transcription.component.html"
})
export class TranscriptionComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  transcription = new Transcription();

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const transcriptionIndex = 2;
      this.transcription = <Transcription>data.resolved[transcriptionIndex];
    });
  }
}
