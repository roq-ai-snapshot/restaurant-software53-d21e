import * as yup from 'yup';
import { orderValidationSchema } from 'validationSchema/orders';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { restaurantValidationSchema } from 'validationSchema/restaurants';
import { tableAssignmentValidationSchema } from 'validationSchema/table-assignments';

export const userValidationSchema = yup.object().shape({
  role: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  roq_user_id: yup.string(),
  tenant_id: yup.string(),
  order: yup.array().of(orderValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
  restaurant: yup.array().of(restaurantValidationSchema),
  table_assignment: yup.array().of(tableAssignmentValidationSchema),
});
