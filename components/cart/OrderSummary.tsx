import React from 'react';

import { Grid, Typography } from '@mui/material';

export const OrderSummary = () => {
	return (
		<Grid container>
			<Grid item xs={6}>
				<Typography>No. Productos</Typography>
			</Grid>
			<Grid item xs={6} display="flex" justifyContent="end">
				<Typography>4 items</Typography>
			</Grid>
			<Grid item xs={6} sx={{ mt: 2 }}>
				<Typography>SubTotal</Typography>
			</Grid>
			<Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
				<Typography>{155.36}$</Typography>
			</Grid>
			<Grid item xs={6}>
				<Typography>Impuestos(15%)</Typography>
			</Grid>
			<Grid item xs={6} display="flex" justifyContent="end">
				<Typography>{35.36}$</Typography>
			</Grid>
			<Grid item xs={6} sx={{ mt: 0.5 }}>
				<Typography variant="subtitle1">Total: </Typography>
			</Grid>
			<Grid item xs={6} sx={{ mt: 0.5 }} display="flex" justifyContent="end">
				<Typography variant="subtitle1">{1190.72}$</Typography>
			</Grid>
		</Grid>
	);
};
