import {Component, Input} from "@angular/core";
import {TranscriptionItem} from "../../models/transcription.model"

@Component({
  selector: "transcription-item",
  templateUrl: "./transcription-item.component.html",
  styleUrls: ["./transcription-item.component.scss"]
})
export class TranscriptionItemComponent {
  @Input() transcription: TranscriptionItem;
}

