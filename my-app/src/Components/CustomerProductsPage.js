import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import CustomerProductDetail from './CustomerProductDetail';

const CustomerProductPage = () => {
    const [products, setProducts] = useState([]);
    const token = useSelector(state => state.updateUserToken);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/getProducts', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const filteredProducts = response.data.filter(product => product.category === 'PRODUCT');
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [token]);

    return (
        <Grid container spacing={2} sx={{ paddingLeft: 14, paddingRight: 2, paddingTop: 4 }}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={product.imageUrl || '/static/images/cards/contemplative-reptile.jpg'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button 
                                size="small" >
                              <Link to={`/viewProduct/${product.id}`}>
                                View Product Detail
                              </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CustomerProductPage;
