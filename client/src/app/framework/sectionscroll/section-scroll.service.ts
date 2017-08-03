import {Injectable, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";

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

  getPendingTarget(): Array<string> {
    return this.pendingTargets;
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
