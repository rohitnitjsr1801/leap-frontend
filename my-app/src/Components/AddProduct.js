import React, { useState } from 'react';

const AddProductOrService = () => {
    const [type, setType] = useState('Product');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const addProductOrService = () => {
        if (name && description && price && imageUrl) {
            console.log('Added:', { type, name, description, price, imageUrl });
            alert(`${type} added successfully!`);
            // Clear the fields after adding
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl('');
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
