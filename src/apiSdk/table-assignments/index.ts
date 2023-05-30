import axios from 'axios';
import queryString from 'query-string';
import { TableAssignmentInterface } from 'interfaces/table-assignment';
import { GetQueryInterface } from '../../interfaces';

export const getTableAssignments = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/table-assignments${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTableAssignment = async (tableAssignment: TableAssignmentInterface) => {
  const response = await axios.post('/api/table-assignments', tableAssignment);
  return response.data;
};

export const updateTableAssignmentById = async (id: string, tableAssignment: TableAssignmentInterface) => {
  const response = await axios.put(`/api/table-assignments/${id}`, tableAssignment);
  return response.data;
};

export const getTableAssignmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/table-assignments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTableAssignmentById = async (id: string) => {
  const response = await axios.delete(`/api/table-assignments/${id}`);
  return response.data;
};
