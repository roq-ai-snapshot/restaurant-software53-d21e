import * as yup from 'yup';

export const tableAssignmentValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  status: yup.string().required(),
  waiter_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
