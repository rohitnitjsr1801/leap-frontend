import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ManagerProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state || {};
  let userToken = useSelector(state => state.updateUserToken);
  const [promotion, setPromotion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotion = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/promotion", {
          headers: {
            Authorization: `Bearer ${userToken}`
          },
          params: {
            product_id: product.id
          }
        });
        setPromotion(response.data || null);
      } catch (error) {
        // console.error('Error fetching promotion:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotion();
  }, [product.id, userToken]);

  const handleEditPromotion = (promotionId) => {
    navigate(`/promotion/edit/${promotionId}`);
  };

  const handleDeletePromotion = async (promotionId) => {
    try {
      await axios.delete("http://localhost:8080/api/promotion", {
        headers: {
          Authorization: `Bearer ${userToken}`
        },
        params: {
          promotion_id: promotionId
        }
      });
      setPromotion(null);
      alert("Promotion deleted successfully!")
    } catch (error) {
      console.error('Error deleting promotion:', error);
    }
  };

  const handleAddPromotion = () => {
    navigate('/addPromotion');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Product Detail
      </Typography>
      {product && (
        <Card sx={{ maxWidth: 600, mb: 4 }}>
          <CardMedia
            component="img"
            alt={product.name}
            height="300"
            image={product.imageUrl}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body1">
              Category: {product.category}
            </Typography>
            <Typography variant="body1">
              Price: ₹{product.price}
            </Typography>
            <Typography variant="body1">
              Product ID: {product.id}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Promotion
      </Typography>
      <Box sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
        {promotion ? (
          <Card sx={{ width: '100%', maxWidth: 500 }}>
            <CardContent>
              <Typography variant="body1">
                Promotion ID: {promotion.id}
              </Typography>        
              <Typography variant="body1">
                Type of Promotion: {promotion.promotionType}
              </Typography>
              <Typography variant="body1">
                Discount Rate: {promotion.discountRate}%
              </Typography>
              <Typography variant="body1">
                Start Date: {promotion.startDate}
              </Typography>
              <Typography variant="body1">
                End Date: {promotion.endDate}
              </Typography>              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" color="primary" onClick={() => handleEditPromotion(promotion.id)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDeletePromotion(promotion.id)}>
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddPromotion}>
            Add Promotion
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ManagerProductDetail;