import NextLink from 'next/link';

import React from 'react';

import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layout';

const EmptyPage = () => {
	return (
		<ShopLayout
			title={'Carrito vació'}
			pageDescription={'No hay artículos en el carrito de compras'}
		>
			<Box
				sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="calc(100vh - 200px)"
			>
				<RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
				<Box display="flex" flexDirection="column" alignItems="center">
					<Typography>su carrito está vació</Typography>
					<NextLink href={'/'} passHref legacyBehavior>
						<Link typography="h4" color="secodar">
							Regresar
						</Link>
					</NextLink>
				</Box>
			</Box>
		</ShopLayout>
	);
};

export default EmptyPage;
