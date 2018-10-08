import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { PipesComponent } from './pipes.component';
import { FileSizePipe } from './filesize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent
  ],
  declarations: [FileSizePipe, PipesComponent, CustomPipesComponent]
})
export class PipesModule { }
