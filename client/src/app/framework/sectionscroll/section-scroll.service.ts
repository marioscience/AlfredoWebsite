import {Injectable, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SectionScrollService {
  @Output() scrollToEvent: EventEmitter<string> = new EventEmitter();
  @Output() targetScrolledEvent: EventEmitter<string> = new EventEmitter();

  scrollToTarget(target: string) {
    this.scrollToEvent.emit(target);
  }

  getScrollToObservable(): Observable<string> {
    return this.scrollToEvent;
  }

  targetScrolled(target: string) {
    this.targetScrolledEvent.emit(target);
  }

  getTargetScrolled(): Observable<string> {
    return this.targetScrolledEvent;
  }
}
