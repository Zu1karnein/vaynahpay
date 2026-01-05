import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private openCallbackModalSubject = new Subject<void>();
  openCallbackModal$ = this.openCallbackModalSubject.asObservable();

  openCallbackModal() {
    this.openCallbackModalSubject.next();
  }
}
