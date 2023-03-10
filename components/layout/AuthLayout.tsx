import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

interface Props {
	title: string;
}

export const AuthLayout: FC<PropsWithChildren<Props>> = ({
	title,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<main>
					<Box
						display={'flex'}
						justifyContent="center"
						alignItems={'center'}
						height="calc(100vh - 100px)"
					>
						{children}
					</Box>
				</main>
			</Head>
		</>
	);
};
