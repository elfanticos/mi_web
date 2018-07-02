import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { SharedConstants } from './shared/shared.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  rutas:any[];
  newForm: FormGroup = this._formBuilder.group({
    search : [null]
  });
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private _formBuilder: FormBuilder
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getRutas();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getRutas() {
    this.rutas = SharedConstants.PATH;
  }

  /**Getters */
  get search() { return this.newForm.controls['search']; }
}
