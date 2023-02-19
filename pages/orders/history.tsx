import React from 'react';

import { Chip, Grid, Link, Typography } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import { ShopLayout } from '@/components/layout';
import NextLink from 'next/link';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{ field: 'fullname', headerName: 'Nombre Completo', width: 200 },
	{
		field: 'paid',
		headerName: 'Estado',
		description: 'Muestra la informacion si esta pagada la orden o no',
		width: 150,
		renderCell: (params) => {
			return params.row.paid ? (
				<Chip color="success" label="pagada" variant="outlined" />
			) : (
				<Chip color="error" label="No pagada" variant="outlined" />
			);
		},
	},
	{
		field: 'orden',
		headerName: 'Ir a orden',
		width: 100,
		sortable: false,
		renderCell: (params) => {
			return (
				<NextLink href={`/orders/${params.id}`} passHref legacyBehavior>
					<Link underline="always">Ver orden</Link>
				</NextLink>
			);
		},
	},
];

const rows = [
	{ id: 1, paid: true, fullname: 'Eduardo Padrino' },
	{ id: 2, paid: false, fullname: 'Karla Machado' },
	{ id: 3, paid: true, fullname: 'Nathalia Moncada' },
	{ id: 4, paid: false, fullname: 'Oscar Padrino' },
	{ id: 5, paid: true, fullname: 'Eduardo Padrino' },
	{ id: 6, paid: false, fullname: 'Irena Padrino' },
];

const HistoryPage = () => {
	return (
		<ShopLayout
			title={'historial de ordenes'}
			pageDescription={'Historial de ordenes del Cliente'}
		>
			<Typography variant="h1" component={'h1'}>
				Historial de ordenes
			</Typography>

			<Grid>
				<Grid item xs={12} sx={{ height: 650, width: '100%' }}>
					<DataGrid
						columns={columns}
						rows={rows}
						pageSize={10}
						rowsPerPageOptions={[10]}
					/>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default HistoryPage;
