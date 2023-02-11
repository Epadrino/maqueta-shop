import { ShopLayout } from '@/components/layout';
import { initialData } from '@/database/products';

import {
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

export default function Home() {
	return (
		<ShopLayout
			title="Tesla_Shop - Home"
			pageDescription="Encuentra los mejores productos de tesla aqui"
			imageFullUrl=""
		>
			<Typography
				variant="h1"
				component="h1"
			>
				Tienda
			</Typography>
			<Typography
				variant="h2"
				sx={{ mb: 1 }}
			>
				Todos los productos
			</Typography>

			<Grid
				container
				spacing={4}
			>
				{initialData.products.map((products) => (
					<Grid
						item
						xs={6}
						sm={4}
						key={products.slug}
					>
						{' '}
						<Card>
							<CardActionArea>
								<CardMedia
									component="img"
									image={`products/${products.images[0]}`}
									alt={products.title}
								/>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</ShopLayout>
	);
}
