import { MenuCategoryInterface } from 'interfaces/menu-category';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { TableAssignmentInterface } from 'interfaces/table-assignment';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  name: string;
  location: string;
  contact_information: string;
  operating_hours: string;
  owner_id: string;
  menu_category?: MenuCategoryInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  table_assignment?: TableAssignmentInterface[];
  user?: UserInterface;
  _count?: {
    menu_category?: number;
    order?: number;
    reservation?: number;
    table_assignment?: number;
  };
}
