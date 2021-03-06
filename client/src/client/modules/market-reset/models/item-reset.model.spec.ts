import {ItemReset} from './item-reset.model';
import {AuctionItem} from '../../auction/models/auction-item.model';
import {SharedService} from '../../../services/shared.service';
import {Item} from '../../../models/item/item';

fdescribe('ItemReset', () => {
  it('setIcon', () => {
    const ai = new AuctionItem();
    ai.itemID = -1;
    ai.name = 'test';
    expect(new ItemReset(ai).icon).toBeFalsy();
    SharedService.items[-1] = new Item();
    SharedService.items[-1].icon = 'test.jpg';
    expect(new ItemReset(ai).icon).toBeTruthy();
  });

  it('setBreakPoints', () => {
    const item = new ItemReset(SharedService.auctionItems[10]);
    expect(item.breakPoints.length).toBe(2);
  });
});
