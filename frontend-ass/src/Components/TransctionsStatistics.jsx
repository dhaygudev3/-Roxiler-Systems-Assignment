import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const TransctionsStatistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      setLoading(true);
      setError(null);

      const monthNumber = convertMonthToNum[selectedMonth.toLowerCase()];
      console.log(`Selected Month: ${selectedMonth}, Month Number: ${monthNumber}`); // Debug output

      if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        setError("Invalid month selected");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/era/statistics?month=${monthNumber}`);
        setStatistics(response.data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  if (loading) {
    return <p className="text-center">Loading statistics...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{`Error fetching statistics: ${error}`}</p>;
  }

  return (
    <div className="container mt-3 mb-3 w-25">
      <h2 className="text-center">Statistics - {selectedMonth}</h2>
      <div className="bg-warning p-3 rounded">
        <div className="d-flex justify-content-between mb-2">
          <span>Total Sale</span>
          <span>{statistics.totalSaleAmount}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Total Sold Items</span>
          <span>{statistics.totalSoldItems}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Total Not Sold Items</span>
          <span>{statistics.totalNotSoldItems}</span>
        </div>
      </div>
    </div>
  );
};

export default TransctionsStatistics;
