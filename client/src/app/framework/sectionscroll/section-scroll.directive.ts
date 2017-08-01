import {Directive, Input, Inject, Renderer2, OnInit, OnDestroy, ElementRef} from "@angular/core";
import {SectionScrollService} from "./section-scroll.service";

import {Router, NavigationEnd} from "@angular/router";

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
              private router: Router,
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
      let navigationEndEvents = this.router.events.filter(event => event instanceof NavigationEnd);

      scrollToObservable
        .sample(navigationEndEvents)
        .subscribe(elementId => {
          console.log(this.elem.nativeElement.offsetTop);
          if (elementId === this.scrollTarget) {
            console.log(this);
            setTimeout(() => {
              console.log(this.elem.nativeElement.offsetTop);
            }, 1000);

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
