import {Component, OnInit, Input} from "@angular/core";
import {ConcertTourboxService} from "./concerttourbox.service";

@Component({
  selector: "concert-tourbox",
  template: `
    <h1>This is the concerts</h1>
  `
})
export class ConcertTourboxComponent implements OnInit {
  @Input() apiPath: string;
  private concertData: any;

  constructor(private concertService: ConcertTourboxService) {
  }

  ngOnInit(): void {
    this.concertService.getConcerts(this.apiPath)
      .then(concerts => this.concertData = concerts);
  }
}
