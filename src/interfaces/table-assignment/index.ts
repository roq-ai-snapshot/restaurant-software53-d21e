import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface TableAssignmentInterface {
  id?: string;
  table_number: number;
  status: string;
  waiter_id: string;
  restaurant_id: string;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
