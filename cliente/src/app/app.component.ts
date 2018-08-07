import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { SharedConstants } from './shared/shared.constants';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '../../node_modules/@angular/material';
/**Modals */
import { CsModalCropperJsComponent } from './components/cs-modal-cropperjs/cs-modal-cropperjs.component';
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
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getRutas();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getRutas():void {
    this.rutas = SharedConstants.PATH;
  }

  /**Getters */
  get search():AbstractControl { return this.newForm.controls['search']; }

  openModalCropperJs():void {
    const dialogRef = this.dialog.open(CsModalCropperJsComponent, {
      width: '250px',
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  searchMagic():void {
    console.log('hola');
  }
}
