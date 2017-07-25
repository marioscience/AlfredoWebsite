import {Directive, Input, Inject, Renderer2, OnInit, ElementRef} from "@angular/core";
import {SectionScrollService} from "./section-scroll.service";

import {DOCUMENT} from "@angular/common";

import * as $ from "jquery";
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

    if (this.scrollTarget) {
      /* Handle case when element is the target to be scrolled to */
      /* When the page is scrolled detect if current section is the one selected */
      this.renderer.listen(this.document, "scroll", ($event) => {
        let elementScrollTop = this.elem.nativeElement.getBoundingClientRect().top;
        let elementScrollBottom = this.elem.nativeElement.getBoundingClientRect().bottom;

        if (elementScrollTop < 0 && elementScrollBottom > 0) {
          this.sectionScrollService.targetScrolled(this.scrollTarget)
        }
      });

      /* observable that signals that an element should be scrolled to */
      this.sectionScrollService.getScrollToObservable()
        .subscribe((elementId) => {
          if (elementId === this.scrollTarget) {
            $('html, body').animate({
              scrollTop: $(this.elem.nativeElement).offset().top
            }, 500);
          }
        });
    }

    if (this.scrollTo) {
      /* Handle case when element points to element to scroll to */
      /* When an element is clicked that has scrollTo send the element identifier in the service */
      this.renderer.listen(this.elem.nativeElement, "click", () => {
        this.sectionScrollService.scrollToTarget(this.scrollTo);
      });

      /* this subcriptions signals that the navbar button should be highlighted */
      this.sectionScrollService.getTargetScrolled()
        .subscribe((target) => {

        });
    }
  }

  private findElementPosition(elem: ElementRef): number {
    let node = elem.nativeElement;
    let curtop = 0;
    let curtopScroll = 0;

    console.log(elem);

    if (node.offsetParent) {
      do {
        curtop += node.offsetTop;
        curtopScroll += node.offsetParent ? node.offsetParent.scrollTop : 0;
      } while (node = node.offsetParent);

      return curtop - curtopScroll;
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
