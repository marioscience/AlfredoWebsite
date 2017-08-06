import {Component, OnInit, Input} from "@angular/core";
import {ConcertTourboxService} from "./concerttourbox.service";

@Component({
  selector: "concert-tourbox",
  templateUrl: "./concerttourbox.component.html"
})
export class ConcertTourboxComponent implements OnInit {
  /* This variable is supposed to receive an api endpoint to call. Then the server makes the call to songkick using the
  * artistId and apiKey. That's to protect the apiKey from being stolen and abused. */
  @Input() apiPath: string;
  private concertData: any;

  constructor(private concertService: ConcertTourboxService) {
  }

  ngOnInit(): void {
    this.concertService.getConcerts(this.apiPath)
      .then(concerts => this.concertData = concerts.resultsPage.results.event);
  }
}
