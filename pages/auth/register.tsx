import React from 'react';
import NextLink from 'next/link';

import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '@/components/layout';

const RegisterPage = () => {
	return (
		<AuthLayout title={'Ingresar'}>
			<Box sx={{ width: 350, padding: '10px 20px' }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h4" component="h1">
							Crear cuenta
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField label="Nombre" variant="filled" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Correo" variant="filled" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Contraseña"
							type={'password'}
							variant="filled"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							sx={{ background: '#3A64D8', color: '#FFFFFF' }}
							color="secondary"
							className="circular-btn"
							size="large"
							fullWidth
						>
							Crear
						</Button>
					</Grid>

					<Grid item xs={12} display="flex" justifyContent={'end'}>
						<NextLink href={'/auth/login'} passHref legacyBehavior>
							<Link underline="always">¿Ya tienes cuenta?</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthLayout>
	);
};

export default RegisterPage;
