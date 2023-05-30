import AppLayout from 'layout/app-layout';
import Link from 'next/link';
import React, { useState } from 'react';
import { Text, Box, Spinner, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react';
import { getTableAssignmentById } from 'apiSdk/table-assignments';
import { Error } from 'components/error';
import { TableAssignmentInterface } from 'interfaces/table-assignment';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';

function TableAssignmentViewPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error, isLoading, mutate } = useSWR<TableAssignmentInterface>(
    () => (id ? `/table-assignments/${id}` : null),
    () =>
      getTableAssignmentById(id, {
        relations: ['user', 'restaurant'],
      }),
  );

  const [deleteError, setDeleteError] = useState(null);

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Table Assignment Detail View
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Text fontSize="md" fontWeight="bold">
              Table Number: {data?.table_number}
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Status: {data?.status}
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Waiter: <Link href={`/users/view/${data?.user?.id}`}>{data?.user?.name}</Link>
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Restaurant: <Link href={`/restaurants/view/${data?.restaurant?.id}`}>{data?.restaurant?.name}</Link>
            </Text>
          </>
        )}
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'table_assignment',
  operation: AccessOperationEnum.READ,
})(TableAssignmentViewPage);
