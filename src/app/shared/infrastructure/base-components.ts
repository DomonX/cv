import { Directive, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Directive()
export class BaseComponent implements OnDestroy {
  private _destroyed$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public get destroyed$(): Observable<void> {
    return this._destroyed$.asObservable();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
  }
}
