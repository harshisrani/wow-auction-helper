import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddonComponent} from './components/addon.component';
import {ProfitSummaryComponent} from './components/profit-summary/profit-summary.component';
import {ProfitSummaryCardComponent} from './components/profit-summary-card/profit-summary-card.component';
import {ItemSaleSummaryComponent} from './components/item-sale-summary/item-sale-summary.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '../table/table.module';
import {UtilModule} from '../util/util.module';
import { AddonDatasetComponent } from './components/addon-dataset/addon-dataset.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AddonComponent,
    ProfitSummaryComponent,
    ProfitSummaryCardComponent,
    ItemSaleSummaryComponent,
    AddonDatasetComponent],
  exports: [
    ItemSaleSummaryComponent,
    AddonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    TableModule,
    UtilModule,
    MatButtonModule,
    RouterModule,
    MatInputModule
  ]
})
export class AddonModule { }
