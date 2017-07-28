import {Injectable, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SectionScrollService {
  @Output() scrollToEvent: EventEmitter<string> = new EventEmitter();
  @Output() targetScrolledEvent: EventEmitter<string> = new EventEmitter();
  pendingServicesCount = 0;
  pendingTargets: Array<string> = [];

  // signal that target element needs to be scrolled to
  scrollToTarget(target: string) {
    if (this.pendingServicesCount === 0) {
      this.scrollToEvent.emit(target);
    } else {
      this.pendingTargets.push(target);
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

  setServicesPending(value: boolean) {
    if (value) {
      this.pendingServicesCount++;
    } else {
      this.pendingServicesCount--;

      if (this.pendingServicesCount === 0) {
        this.pendingTargets.forEach((value) => {
          this.scrollToEvent.emit(value);
        });
        this.pendingTargets = [];
      }
    }
  }
}
