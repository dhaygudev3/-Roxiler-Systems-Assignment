import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionsBarChart from './TransactionsBarChart';
import TransctionsStatistics from './TransctionsStatistics';

const months = [
    { name: "January" },
    { name: "February" },
    { name: "March" },
    { name: "April" },
    { name: "May" },
    { name: "June" },
    { name: "July" },
    { name: "August" },
    { name: "September" },
    { name: "October" },
    { name: "November" },
    { name: "December" },
];

let convertMonthToNum = {
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
}

const TransactionsTable = () => {
    const [page, setPage] = useState(1);
    const [transactionList, setTransactionList] = useState([]);
    const [input, setInput] = useState('');
    const [selMonth, setSelMonth] = useState(months[2].name);
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/era/transactions', {
                    params: {
                        search: input,
                        month: months.findIndex(m => m.name === selMonth) + 1,
                        page: page,
                        perPage: 10 
                    }
                });
                setTransactionList(response.data); 
            } catch (error) {
                console.error('Error fetching transactions:', error);
                
            }
        };



        getTransactions();
    }, [page, input, selMonth]);

    return (
        <>
            <div className="container my-4">
                <div className="text-center mb-4">
                    <h4>Transaction Dashboard</h4>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="form-control"
                            type="search"
                            placeholder="Search transaction"
                        />
                    </div>
                    <div className="col-md-4">
                    <select
                        value={selMonth}
                        onChange={(e) => setSelMonth(e.target.value)}
                        className="form-control"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={month.name}>
                                {month.name}
                            </option>
                        ))}
                    </select>

                    </div>
                </div>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Sold</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionList.map(t => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td>{t.price}</td>
                                <td>{t.category}</td>
                                <td>{t.sold ? 'Yes' : 'No'}</td>
                                <td><img height="100px" src={t.image} alt={t.title} className="img-fluid" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <span>Page No: {page}</span>
                    <div>
                        <button
                            onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                            className="btn mr-2"
                            disabled={page <= 1}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setPage(prevPage => prevPage + 1)}
                            className="btn"
                        >
                            Next
                        </button>
                    </div>
                    <span>Per Page: 10</span>
                </div>
            </div>
            <TransctionsStatistics selectedMonth={selMonth} />
            <TransactionsBarChart selectedMonth={selMonth} />
        </>
    );
};

export default TransactionsTable;
