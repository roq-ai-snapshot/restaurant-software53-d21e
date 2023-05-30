import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';

export interface OrderItemInterface {
  id?: string;
  menu_item_id: string;
  order_id: string;

  menu_item?: MenuItemInterface;
  order?: OrderInterface;
  _count?: {};
}
