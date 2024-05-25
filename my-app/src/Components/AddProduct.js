import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const AddProductOrService = () => {
    const [type, setType] = useState('Product');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const managerId= useSelector(state => state.updateUserId);
    
    const token=useSelector(state=>state.updateUserToken);
    
    const addProductOrService = async () => {
        if (name && description && price && imageUrl) {
            const data = {
                category: type.toUpperCase(), // Convert "Product" to "PRODUCT" and "Service" to "SERVICE"
                name,
                description,
                price,
                imageUrl
            };
            try {
                const response = await axios.post(`http://localhost:8080/api/addProduct?managerId=${managerId}`, 
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Set the token in the headers
                    }
                }); // Replace with your API endpoint
                console.log('Response:', response.data);
                alert(`${type} added successfully!`);
                // Clear the fields after adding
                setName('');
                setDescription('');
                setPrice('');
                setImageUrl('');
            } catch (error) {
                console.error('Error adding product/service:', error);
                alert('Failed to add the product/service.');
            }
            
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <>
        <br></br>
        <div style={styles.container}>
            
            <h2 style={styles.heading}>Add {type}</h2>
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={styles.dropdown}
            >
                <option value="Product">Product</option>
                <option value="Service">Service</option>
            </select>
            <input
                type="text"
                placeholder={`${type} Name`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
            />
            <textarea
                placeholder={`${type} Description`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                style={styles.textarea}
            />
            <input
                type="number"
                placeholder={`${type} Price`}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={styles.input}
            />
            <input
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={styles.input}
            />
            <button onClick={addProductOrService} style={styles.button}>
                Add {type}
            </button>
        </div>
        </>
    );
};

const styles = {
    container: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '0 auto',
        textAlign: 'center',
    },
    heading: {
        color: '#333',
    },
    dropdown: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f8f8f8',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    textarea: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#28a745',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default AddProductOrService;
