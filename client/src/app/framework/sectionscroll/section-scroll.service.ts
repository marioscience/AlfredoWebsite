import {Injectable, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SectionScrollService {
  @Output() scrollToEvent: EventEmitter<string> = new EventEmitter();
  @Output() targetScrolledEvent: EventEmitter<string> = new EventEmitter();

  // signal that target element needs to be scrolled to
  scrollToTarget(target: string) {
    this.scrollToEvent.emit(target);
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
