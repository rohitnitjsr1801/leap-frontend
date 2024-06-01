import React, { Component } from "react";

function ErrorPage() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      },
      heading: {
        fontSize: '24px',
        padding: '20px',
        border: '1px solid #f5c6cb',
        backgroundColor: '#f1b0b7',
        borderRadius: '8px',
      }
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Login to view Product Details</h1>
      </div>
    );
  }
  

export default ErrorPage;
