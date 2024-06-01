import React, {useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { changeUserId, changeUserRole, changeUserToken,changeUserName } from '../Actions';
//import { Pie } from 'react-chartjs-2';
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from 'recharts';
import './Analytics.css';
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


    const renderColorfulLegendText = (value) => {
        return <span style={{ color: '#8884d8' }}>{value}</span>;
    };

    const revenueData = [
        { name: 'Pre-Revenue', value: analytics?.preRevenue },
        { name: 'Post-Revenue', value: analytics?.postRevenue }
    ];

    const interactionData = [
        { name: 'Pre-Interactions', value: analytics?.preInteractions },
        { name: 'Post-Interactions', value: analytics?.postInteractions }
    ];

    return (
        <div className="analytics-container">
            <h1 className='header'><b>Analytics Dashboard</b></h1>
            <button className="dashboard-button" onClick={handleGenerateAnalytics} disabled={loading}>
                {analytics ? 'View Analytics' : 'Generate Analytics'}
            </button>
            <button className="dashboard-button" onClick={handleUpdateAnalytics} disabled={loading || !analytics}>
                Refresh
            </button>
            {loading && <p className="loading-text">Loading...</p>}
            {analytics && (
                <div>
                    <p><b>Conversion Rate:</b> {analytics.convRate}%</p>
                    { /*<p>Pre-Revenue: ${analytics.preRevenue}</p>
                    <p>Post-Revenue: ${analytics.postRevenue}</p>
                    <p>Pre-Interactions: {analytics.preInteractions}</p>
            <p>Post-Interactions: {analytics.postInteractions}</p> */}
                    <p><b>Last Updated:</b> {analytics.lastUpdated} IST</p>

                    <div className="pie-chart-container">
                        <div><h3 className="chart-title"><b>Pre/Post Revenue (in $)</b></h3>
                        <PieChart width={400} height={400}>
                            <Pie data={revenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label isAnimationActive={true} animationBegin={0} animationDuration={800} animationEasing="ease-out">
                            {
                                revenueData.map((entry, index) => <Cell key={`cell-${index}`} fill={index % 2 ? '#82ca9d' : '#8884d8'} />)
                            }
                            </Pie>
                            <Tooltip />
                            <Legend formatter={renderColorfulLegendText} />
                        </PieChart>
                        </div>

                        <div><h3 className="chart-title"><b>Pre/Post Interaction</b></h3>
                        <PieChart width={400} height={400}>
                            <Pie data={interactionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label isAnimationActive={true} animationBegin={0} animationDuration={800} animationEasing="ease-out">
                                {
                                    interactionData.map((entry, index) => <Cell key={`cell-${index}`} fill={index % 2 ? '#8884d8' : '#82ca9d'} />)
                                }
                            </Pie>
                            <Tooltip />
                            <Legend formatter={renderColorfulLegendText} />
                        </PieChart>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Analytics;