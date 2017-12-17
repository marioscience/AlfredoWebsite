import {Injectable, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/filter";

import {Router, NavigationEnd, NavigationStart} from "@angular/router";

@Injectable()
export class SectionScrollService {
  @Output() scrollToEvent: EventEmitter<string> = new EventEmitter();
  @Output() targetScrolledEvent: EventEmitter<string> = new EventEmitter();

  private pendingTargets: Array<string> = [];
  private isNavigating: boolean = false;

  constructor(private router: Router,) {
    let navigationStartEvents = this.router.events.filter(event => event instanceof NavigationStart);
    let navigationEndEvents = this.router.events.filter(event => event instanceof NavigationEnd);

    navigationStartEvents.subscribe(val => {
      this.isNavigating = true;
    });

    navigationEndEvents.subscribe(val => {
      this.isNavigating = false;
    });
  }

  /* This function should be called when navigation is done. When you are sure that
  * rendering of component is done. For example when the video tag renders and there's
  * no way to know that it finished. When the component's heigh get adjusted the scroll
  * position is off. */
  resolvePendingTargets(): void {
    if (this.pendingTargets) {
      this.scrollToTarget(this.pendingTargets.pop());
    }
  }

  // signal that target element needs to be scrolled to
  scrollToTarget(target: string) {
    if (this.isNavigating) {
      this.pendingTargets.push(target);
    } else {
      this.scrollToEvent.emit(target);
    }
  }

  getScrollToObservable(): Observable<string> {
    return this.scrollToEvent;
  }

  // signal that target element was scrolled
  targetScrolled(target: string) {
    this.targetScrolledEvent.emit(target);
  }

  getTargetScrolled(): Observable<string> {
    return this.targetScrolledEvent;
  }
}
