import {Component, Inject, ViewChild, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// Import AngularCropperjsComponent
import { AngularCropperjsComponent } from 'angular-cropperjs';


@Component({
    selector : 'cs-modal-cropperjs',
    templateUrl: 'cs-modal-cropperjs.component.html',
    styleUrls: ['cs-modal-cropperjs.component.css']
})

export class CsModalCropperJsComponent implements OnInit{
    // Get with @ViewChild
    @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
    config:any = {
        movable: true,
        scalable: true,
        zoomable: true,
        viewMode: 1,
        checkCrossOrigin: true
    };
    imageUrl: string = 'https://lh3.googleusercontent.com/-5fHqSn9SxuE/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7p8UlYHtIMn6EhGBHl3wkdotIis3Q/mo/photo.jpg?sz=46';
    constructor(
        public dialogRef: MatDialogRef<CsModalCropperJsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){}
    ngOnInit(): void {
        // Lets try to zoom
    }
    onNoClick(): void {
        this.dialogRef.close();
    }

    capturarImagen():void {
        console.log(this.angularCropper.exportCanvas);
    }
}