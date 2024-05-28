import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

const EditPromotion = () => {
  const { promotionId } = useParams();
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [products, setProducts] = useState('');
  const [purchaseFrequency, setPurchaseFrequency] = useState('');
  const [promotionType, setPromotionType] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const managerId = useSelector(state => state.updateUserId);
  const token = useSelector(state => state.updateUserToken);

  useEffect(() => {
    const fetchPromotion = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/promotion/${promotionId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
            const promotion = response.data;
            setAgeRange(promotion.ageRange);
            setDiscountRate(promotion.discountRate);
            setStartDate(promotion.startDate);
            setEndDate(promotion.endDate);
            setGender(promotion.gender);
            setProducts(promotion.products.map(product => product.id));
            setPromotionType(promotion.promotionType);
            setPurchaseFrequency(promotion.purchaseFrequency);
        } catch (error) {
          console.error('Error fetching promotion:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPromotion();
  }, [promotionId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const promotionData = {
      gender,
      ageRange,
      productIds: products.split(',').map(id => parseInt(id.trim(), 10)),
      purchaseFrequency,
      promotionType,
      managerId,
      discountRate,
      startDate,
      endDate
    };

    try {
      const response = await axios.put(`http://localhost:8080/api/promotion/${promotionId}`, promotionData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Promotion created successfully');
      setAgeRange('');
      setDiscountRate('');
      setEndDate('');
      setGender('');
      setProducts('');
      setPromotionType('');
      setPurchaseFrequency('');
      setStartDate('');

    } catch (error) {
      console.log(promotionData);
      if (error.response && error.response.status === 401) {
        alert('Unauthorized: Please check your login credentials and try again.');
      } else {
        console.error('Error creating promotion:', error);
        alert('Failed to create promotion. Please try again later.');
      }
    }
  };

  const styles = {
    container: {
      width: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#2C7865',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Update Promotion</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender:</label>
          <select
            style={styles.select}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age Range:</label>
          <select
            style={styles.select}
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            required
          >
            <option value="">Select Age Range</option>
            <option value="CHILDREN">Children</option>
            <option value="TEEN">Teen</option>
            <option value="YOUNG_ADULT">Young Adult</option>
            <option value="ADULT">Adult</option>
            <option value="OLD">Old</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Products (comma-separated IDs):</label>
          <input
            type="text"
            style={styles.input}
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Purchase Frequency:</label>
          <select
            style={styles.select}
            value={purchaseFrequency}
            onChange={(e) => setPurchaseFrequency(e.target.value)}
            required
          >
            <option value="">Select Purchase Frequency</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Promotion Type:</label>
          <input
            type="text"
            style={styles.input}
            value={promotionType}
            onChange={(e) => setPromotionType(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Discount Rate:</label>
          <input
            type="number"
            style={styles.input}
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Start Date:</label>
          <input
            type="date"
            style={styles.input}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>End Date:</label>
          <input
            type="date"
            style={styles.input}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Update Promotion</button>
      </form>
    </div>
  );
};

export default EditPromotion;
