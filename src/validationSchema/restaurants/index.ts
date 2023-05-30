import * as yup from 'yup';
import { menuCategoryValidationSchema } from 'validationSchema/menu-categories';
import { orderValidationSchema } from 'validationSchema/orders';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { tableAssignmentValidationSchema } from 'validationSchema/table-assignments';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_information: yup.string().required(),
  operating_hours: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  menu_category: yup.array().of(menuCategoryValidationSchema),
  order: yup.array().of(orderValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
  table_assignment: yup.array().of(tableAssignmentValidationSchema),
});
