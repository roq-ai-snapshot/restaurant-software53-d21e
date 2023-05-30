import * as yup from 'yup';
import { orderItemValidationSchema } from 'validationSchema/order-items';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  special_instructions: yup.string(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
  order_item: yup.array().of(orderItemValidationSchema),
});
