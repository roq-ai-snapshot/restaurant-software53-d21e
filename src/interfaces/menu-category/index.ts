import { MenuItemInterface } from 'interfaces/menu-item';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface MenuCategoryInterface {
  id?: string;
  name: string;
  restaurant_id: string;
  menu_item?: MenuItemInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    menu_item?: number;
  };
}
