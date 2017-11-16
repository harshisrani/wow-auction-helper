import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule, MatCheckboxModule,
	MatProgressBarModule, MatInputModule,
	MatAutocompleteModule, MatToolbarModule,
	MatListModule, MatTabsModule,
	MatSidenavModule, MatPaginatorModule,
	MatSortModule, MatTableModule,
	MatCardModule, MatProgressSpinnerModule,
	MatSelectModule, MatStepperModule,
	MatExpansionModule
} from '@angular/material';

@NgModule({
	exports: [
		CommonModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatProgressBarModule,
		MatInputModule,
		MatAutocompleteModule,
		MatToolbarModule,
		MatListModule,
		MatTabsModule,
		MatSidenavModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatStepperModule,
		MatExpansionModule
	],
	imports: [
	],
	declarations: []
})
export class MaterialModule { }