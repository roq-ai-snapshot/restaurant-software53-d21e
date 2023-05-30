import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';
import { TableAssignmentInterface } from 'interfaces/table-assignment';

export interface UserInterface {
  id?: string;
  role: string;
  name: string;
  email: string;
  password: string;
  roq_user_id?: string;
  tenant_id?: string;
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface[];
  table_assignment?: TableAssignmentInterface[];

  _count?: {
    order?: number;
    reservation?: number;
    restaurant?: number;
    table_assignment?: number;
  };
}
