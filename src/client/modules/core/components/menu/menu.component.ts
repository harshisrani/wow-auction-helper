import {Component, OnDestroy} from '@angular/core';
import {SubscriptionManager} from '@ukon1990/subscription-manager/dist/subscription-manager';
import {AuctionsService} from '../../../../services/auctions.service';
import {SharedService} from '../../../../services/shared.service';
import {Report} from '../../../../utils/report.util';

declare function require(moduleName: string): any;

const version = require('../../../../../../package.json').version;

@Component({
  selector: 'wah-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {
  showMenu: boolean;
  appVersion = version;
  numberOfUndercutAuctions = 0;
  sm = new SubscriptionManager();
  isUserSet: boolean;

  constructor(private service: AuctionsService) {
    this.sm.add(this.service.events.list,
      (list) =>
        this.numberOfUndercutAuctions = SharedService.userAuctions.undercutAuctions);
    this.sm.add(
      SharedService.events.isUserSet,
      isSet => this.isUserSet = isSet);
    Report.send('startup', `App version ${version}`);
  }

  ngOnDestroy(): void {
    this.sm.unsubscribe();
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 991.98;
  }

  displayExtraMenu(): boolean {
    return window.innerWidth < 1534;
  }
}