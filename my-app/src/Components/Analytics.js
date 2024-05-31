import React, {useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { changeUserId, changeUserRole, changeUserToken,changeUserName } from '../Actions';
//import { Pie } from 'react-chartjs-2';
//import { PieChart } from '@mui/x-charts/PieChart';

const Analytics = () => {

    //const managerId = useSelector(state => state.updateUserId);
    //const token = useSelector(state => state.updateUserToken);

    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleGenerateAnalytics = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/api/analytics/generate', {
                params: { manager_id: user.id },
                headers: { Authorization: `Bearer ${user.token}` }
            });
            setAnalytics(response.data);
        } catch (error) {
            console.error('Error fetching/creating analytics:', error);
            alert('Failed to fetch or create analytics');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateAnalytics = async () => {
        if (!analytics) {
            alert('No analytics data to update');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.put(`http://localhost:8080/api/analytics/update/${analytics.id}`, null, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            setAnalytics(response.data);
            alert('Analytics updated successfully');
        } catch (error) {
            console.error('Error updating analytics:', error);
            alert('Failed to update analytics');
        } finally {
            setLoading(false);
        }
    };

    const revenueData = {
        labels: ['Pre-Revenue', 'Post-Revenue'],
        datasets: [
            {
                data: [analytics?.preRevenue, analytics?.postRevenue],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    };

    const interactionData = {
        labels: ['Pre-Interactions', 'Post-Interactions'],
        datasets: [
            {
                data: [analytics?.preInteractions, analytics?.postInteractions],
                backgroundColor: ['#FFCD56', '#FF9F40'],
                hoverBackgroundColor: ['#FFCD56', '#FF9F40']
            }
        ]
    };

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            <button onClick={handleGenerateAnalytics} disabled={loading}>
                {analytics ? 'View Analytics' : 'Generate Analytics'}
            </button>
            <button onClick={handleUpdateAnalytics} disabled={loading || !analytics}>
                Update Analytics
            </button>
            {loading && <p>Loading...</p>}
            {analytics && (
                <div>
                    <h2>Analytics Details</h2>
                    {/*<{h2>Revenue Analysis</h2>
                    <Pie data={revenueData} />
                    <h2>Interactions Analysis</h2>
                    <Pie data={interactionData} />*/}
                    <p>Conversion Rate: {analytics.convRate}%</p>
                    <p>Pre-Revenue: ${analytics.preRevenue}</p>
                    <p>Post-Revenue: ${analytics.postRevenue}</p>
                    <p>Pre-Interactions: {analytics.preInteractions}</p>
                    <p>Post-Interactions: {analytics.postInteractions}</p>
                    <p>Last Updated: {analytics.lastUpdated}</p>
                </div>
            )}
        </div>
    );
}

export default Analytics;