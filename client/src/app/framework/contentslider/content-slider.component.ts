import {Component, Input, AfterContentInit, OnDestroy, ElementRef} from "@angular/core";
import * as $ from "jquery";
import "slick-carousel";

@Component({
  selector: "content-slider",
  templateUrl: "./content-slider.component.html",
  styleUrls: ["./content-slider.component.scss"]
})
export class ContentSliderComponent implements AfterContentInit, OnDestroy {
  @Input() public config: any; // there's probably a type for this in slick typings

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    $(this.el.nativeElement).slick();
  }

  ngOnDestroy(): void {

  }
}
