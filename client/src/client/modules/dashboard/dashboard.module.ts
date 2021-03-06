import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './components/dashboard.component';
import {DashboardItemComponent} from './components/dashboard-item/dashboard-item.component';
import {DashboardItemsComponent} from './components/dashboard-items/dashboard-items.component';
import {DashboardSellersComponent} from './components/dashboard-sellers/dashboard-sellers.component';
import {ManageItemsBuiltInComponent} from './components/manage/manage-items-built-in/manage-items-built-in.component';
import {ManageItemsBuiltInItemComponent} from './components/manage/manage-items-built-in-item/manage-items-built-in-item.component';
import {AhSummaryComponent} from './components/ah-summary/ah-summary.component';
import {SummaryCardComponent} from './components/ah-summary/summary-card/summary-card.component';
import {WatchlistComponent} from './components/manage/watchlist.component';
import {WatchlistItemComponent} from './components/manage/watchlist-item/watchlist-item.component';
import {WatchlistManagerComponent} from './components/manage/watchlist-manager/watchlist-manager.component';
import {WatchlistItemManagerComponent} from './components/manage/watchlist-item-manager/watchlist-item-manager.component';
import {WatchlistItemBatchComponent} from './components/manage/watchlist-item-batch/watchlist-item-batch.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatExpansionModule,
  MatInputModule, MatPaginatorModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '../table/table.module';
import {IconModule} from '../icon/icon.module';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';
import { ManageCustomDashboardComponent } from './components/manage/manage-custom-dashboard/manage-custom-dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardItemComponent,
    DashboardItemsComponent,
    DashboardSellersComponent,
    ManageItemsBuiltInComponent,
    ManageItemsBuiltInItemComponent,
    AhSummaryComponent,
    SummaryCardComponent,
    WatchlistComponent,
    WatchlistItemComponent,
    WatchlistManagerComponent,
    WatchlistItemManagerComponent,
    WatchlistItemBatchComponent,
    ManageCustomDashboardComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    TableModule,
    MatExpansionModule,
    IconModule,
    UtilModule,
    RouterModule,
    MatPaginatorModule
  ]
})
export class DashboardModule { }
