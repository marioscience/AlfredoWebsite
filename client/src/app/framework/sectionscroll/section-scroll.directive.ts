import {Directive, Input, Inject, Renderer2, OnInit, ElementRef} from "@angular/core";
import {SectionScrollService} from "./section-scroll.service";

import {DOCUMENT} from "@angular/common";

@Directive({
  selector: "[alfSectionScroll]"
})
export class SectionScrollDirective implements OnInit {
  @Input() scrollTo: any;
  @Input() scrollTarget: any;

  constructor(private elem: ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document,
              private sectionScrollService: SectionScrollService) {
  }

  ngOnInit(): void {
    this.handleScrollTo();
    this.handleScrollTarget();
  }

  private handleScrollTo(): void {
    /* Handle case when element is the target to be scrolled to */
    if (this.scrollTarget) {

      /* observable that signals that an element should be scrolled to */
      this.sectionScrollService.getScrollToObservable()
        .subscribe((elementId) => {
          console.log(elementId);
        });

      /* When the page is scrolled detect if current section is the one selected */
      this.renderer.listen(this.document, "scroll", ($event) => {
        console.log("scrolling...", $event.srcElement.body.scrollTop);
        console.log("windowSize: ", $event.srcElement.body)
      });
    }
  }

  private handleScrollTarget(): void {
    /* Handle case when element points to element to scroll to */
    if (this.scrollTo) {
      /* When an element is clicked that has scrollTo send the element identifier in the service */
      this.renderer.listen(this.elem.nativeElement, "click", () => {
        this.sectionScrollService.scrollToTarget(this.scrollTo);
      });
    }
  }
}


/*
*
* This directive is to accomplish the following:
* 1. Components that will let buttons know that they match scrollTop (with certain margin, maybe the size of the window to reflect that it's into view)
* 2. Buttons that can trigger an element scrolling to the top.
*
* Note: if this directive grows out of proportions it should be divided into two directives for to and target and possibly a service.
*
* Idea for Implementation:
*
* Have a single directive scrollSection for all elements, then have two attributes scrollTo and scrollTarget.
* scrollTo: takes an identifier to scroll to.
* scrollTarget: takes an identifier and scroll to it when necessary
*
*
* */
