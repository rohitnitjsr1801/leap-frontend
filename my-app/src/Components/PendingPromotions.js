import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const PromotionTable = () => {
    const [promotions, setPromotions] = useState([]);
    const managerId = useSelector(state => state.updateUserId);
    const token = useSelector(state => state.updateUserToken);
    const role = useSelector(state => state.updateUserRole); // assuming userRole is stored in your Redux store

    useEffect(() => {
        const fetchPromotions = async () => {
            console.log("this is the role " + role)
            try {
                const response = await axios.get(`http://localhost:8080/api/promotion/ownerPromotions/${managerId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setPromotions(response.data);
            } catch (error) {
                console.error('Error fetching promotions:', error);
            }
        };

        fetchPromotions();
    }, [managerId, token]);

    const approvePromotion = async (promotionId) => {
        try {
            await axios.put(`http://localhost:8080/api/promotion/approve/${promotionId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPromotions(promotions.filter(promotion => promotion.id !== promotionId));
        } catch (error) {
            console.error('Error approving promotion:', error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="promotions table">
                <TableHead>
                    <TableRow>
                        <TableCell>Gender</TableCell>
                        <TableCell>Age Range</TableCell>
                        <TableCell>Purchase Frequency</TableCell>
                        <TableCell>Promotion Type</TableCell>
                        <TableCell>Discount Rate</TableCell>
                        <TableCell>Product ID</TableCell> {/* New column for Product ID */}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {promotions.map((promotion) => (
                        <TableRow key={promotion.id}>
                            <TableCell>{promotion.gender}</TableCell>
                            <TableCell>{promotion.ageRange}</TableCell>
                            <TableCell>{promotion.purchaseFrequency}</TableCell>
                            <TableCell>{promotion.promotionType}</TableCell>
                            <TableCell>{promotion.discountRate}</TableCell>
                            <TableCell>
                                {promotion.products.map(product => (
                                    <div key={product.id}>{product.id}</div>
                                ))}
                            </TableCell>
                            <TableCell>
                                {role === 'ROLE_OWNER' && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => approvePromotion(promotion.id)}
                                    >
                                        Approve
                                    </Button>
                                )}
                                {role === 'ROLE_MANAGER' && (
                                    <Button disabled>
                                        Approve
                                    </Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PromotionTable;
