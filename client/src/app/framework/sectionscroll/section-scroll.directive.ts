import {Directive, Input, Inject, Renderer2, OnInit, OnDestroy, ElementRef} from "@angular/core";
import {SectionScrollService} from "./section-scroll.service";

import {DOCUMENT} from "@angular/common";

import * as $ from "jquery";

import {Subscription} from "rxjs/Subscription";
import "rxjs/add/operator/sample";

@Directive({
  selector: "[alfSectionScroll]"
})
export class SectionScrollDirective implements OnInit, OnDestroy {
  @Input() scrollTo: any;
  @Input() scrollTarget: any;

  private scrollToSubscription: Subscription;
  private targetScrolledSubscription: Subscription;

  constructor(private elem: ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document,
              private sectionScrollService: SectionScrollService) {
  }

  ngOnInit(): void {
    let navbar = $('navbar');

    if (this.scrollTarget) {
      this.renderer.listen(this.document, "scroll", ($event) => {
        let elementScrollTop = this.elem.nativeElement.getBoundingClientRect().top;
        let elementScrollBottom = this.elem.nativeElement.getBoundingClientRect().bottom;

        if ((elementScrollTop < navbar.height()) && (elementScrollBottom > navbar.height())) {
          this.sectionScrollService.targetScrolled(this.scrollTarget)
        }
      });

      let scrollToObservable = this.sectionScrollService.getScrollToObservable();

      this.scrollToSubscription = scrollToObservable
        .subscribe(elementId => {
          if (elementId === this.scrollTarget) {
            $('html, body').animate({
              scrollTop: this.elem.nativeElement.offsetTop - navbar.height() + 1
            }, 500);

            /* This is a no no in angular, but at least it replaces jQuery, which is another no no. They still don't say
            * much about the yes yeses */
            //window.scrollTo({top: this.elem.nativeElement.offsetTop, left: 0, behavior: "smooth"})
          }
        });
    }

    if (this.scrollTo) {
      this.renderer.listen(this.elem.nativeElement, "click", () => {
        this.sectionScrollService.scrollToTarget(this.scrollTo);
      });

      this.targetScrolledSubscription = this.sectionScrollService.getTargetScrolled()
        .subscribe((target) => {
          $(this.elem.nativeElement).removeClass("highlight");
          if (target === this.scrollTo) {
            $(this.elem.nativeElement).addClass("highlight");
          }
        });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollToSubscription) {
      this.scrollToSubscription.unsubscribe();
    }

    if (this.targetScrolledSubscription) {
      this.targetScrolledSubscription.unsubscribe();
    }
  }
}
