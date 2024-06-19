import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionsBarChart = (props) => {
    const [barChartData, setBarChartData] = useState([]);
    const { selectedMonth } = props;

    useEffect(() => {
        const getBarChartData = async () => {
            try {
                // Convert month name to number
                const monthNumber = convertMonthToNum[selectedMonth.toLowerCase()];
                const response = await axios.get(`http://localhost:8080/era/bar-chart?month=${monthNumber}`);
                setBarChartData(response.data);
            } catch (error) {
                console.error('Error fetching bar chart data:', error);
            }
        };

        getBarChartData();
    }, [selectedMonth]);

    const DataFormatter = (number) => {
        if (number > 1000) {
            return `${(number / 1000).toString()}k`;
        }
        return number.toString();
    };

    return (
        <div className="container my-4">
            <h2 className="text-center">Bar Chart Status - {selectedMonth}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData} margin={{ top: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="priceRange" tick={{ stroke: 'gray', strokeWidth: 1 }} />
                    <YAxis tickFormatter={DataFormatter} tick={{ stroke: 'gray', strokeWidth: 1 }} />
                    <Legend wrapperStyle={{ padding: 30 }} />
                    <Bar dataKey="itemCount" name="Number of Items" fill="#255b5b" barSize="15%" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionsBarChart;

const convertMonthToNum = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
};
