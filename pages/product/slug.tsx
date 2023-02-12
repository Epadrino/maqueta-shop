import React from 'react';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layout';
import { initialData } from '@/database/products';
import { ProducSlideShow, SizeSelector } from '@/components/products';
import { ItemCounter } from '@/components/ui';

const produc = initialData.products[0];

const ProducPage = () => {
	return (
		<ShopLayout title={produc.title} pageDescription={produc.description}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={7}>
					{/* Slideshow*/}
					<ProducSlideShow images={produc.images} />
				</Grid>

				<Grid item xs={12} sm={5}>
					<Box display="flex" flexDirection="column">
						{/*titulos*/}
						<Typography variant="h1" component="h1">
							{produc.title}
						</Typography>
						<Typography variant="subtitle1" component="h2">
							${produc.price}
						</Typography>

						{/* cantidad */}
						<Box sx={{ my: 2 }}>
							<Typography variant="subtitle1">Cantidad</Typography>
							<ItemCounter />
							<SizeSelector selectedSize={produc.sizes[2]} sizes={produc.sizes} />
						</Box>

						{/* agregar al carrito */}
						<Button color="secondary" className="circular-btn">
							Agregar al Carrito
						</Button>

						{/* <Chip	label="no hay disponibles" color="error" variant="outlined"	/> */}

						{/* Descripcion*/}
						<Box sx={{ mt: 3 }}>
							<Typography variant="subtitle2">Descripción</Typography>
							<Typography variant="body2">{produc.description}</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default ProducPage;
