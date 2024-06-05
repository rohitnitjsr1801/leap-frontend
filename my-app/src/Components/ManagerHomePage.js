import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Grid, Card, CardMedia, CardContent, Typography, Box, CircularProgress, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function ManagerHomePage() {

  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let authFlag=useSelector(state=>state.authReducer);
  let userId = useSelector(state => state.updateUserId);
  let userToken = useSelector(state => state.updateUserToken);

  // let userRole = useSelector(state => state.updateUserRole);
  // let userName = useSelector(state => state.updateUserName);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getProductById', {
          headers: {
            Authorization: `Bearer ${userToken}`
          },
          params: {
            managerId: userId
          }
        });
        const filteredProducts = response.data.filter(item => item.category === 'PRODUCT');
        const filteredServices = response.data.filter(item => item.category === 'SERVICE');
        setProducts(filteredProducts);
        setServices(filteredServices);
        console.log(response.data);
        console.log(authFlag);
        debugger;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [userId, userToken]);

  const handleClick = (product) => {
    navigate('/manager/product', { state: product });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h2>MY PRODUCTS</h2>
    </div>
    <Box sx={{ flexGrow: 1, padding: 2, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <CardActionArea onClick={() => handleClick(product)}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
      

    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <h2>MY SERVICES</h2> 
    </div>
    <Box sx={{ flexGrow: 1, padding: 2, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {services.map(service => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}>
            <CardActionArea onClick={() => handleClick(service)}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.imageUrl}
                  alt={service.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
       
    </>
  )
}

export default ManagerHomePage