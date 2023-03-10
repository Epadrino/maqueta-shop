import { ShopLayout } from '@/components/layout';
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';

const AddressPage = () => {
	return (
		<ShopLayout
			title={'Direccition'}
			pageDescription={'Confirmar direccion del destino'}
		>
			<Typography variant="h1" component="h1">
				Dirección
			</Typography>

			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} sm={6}>
					<TextField label="nombre" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="apellido" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label="Código Postal" variant="filled" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Ciudad" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<Select variant="filled" label="País" value={1}>
							<MenuItem value={1}>Venezuela</MenuItem>
							<MenuItem value={2}>México</MenuItem>
							<MenuItem value={3}>El Salvador</MenuItem>
							<MenuItem value={4}>China</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label="Teléfono" variant="filled" fullWidth />
				</Grid>
			</Grid>
			<Box sx={{ mt: 5 }} display="flex" justifyContent={'center'}>
				<Button color="secondary" className="circular-btn" size="large">
					Revisar pedido
				</Button>
			</Box>
		</ShopLayout>
	);
};

export default AddressPage;
