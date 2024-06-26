# Roxiler Systems Assignment
## ERA Product Statistics Application

### Overview
The ERA Product Statistics Application is a full-stack web application designed to manage and display product statistics. It features a backend built with Spring Boot and MongoDB, and a frontend built with React and Recharts for data visualization.

### Features
- Add and manage products.
- View statistics for total sales, sold items, and not sold items.
- Display product data in a bar chart for a selected month.

### Backend Setup

#### Prerequisites
- Java 17
- Maven
- MongoDB

#### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/dhaygudev3/-Roxiler-Systems-Assignment.git
    cd -Roxiler-Systems-Assignment/backend
    ```

2. Configure MongoDB:
    Ensure MongoDB is running on its default port (27017) or configure the `application.properties` file to point to your MongoDB instance.

3. Install dependencies and build the project:
    ```sh
    mvn clean install
    ```

4. Run the application:
    ```sh
    mvn spring-boot:run
    ```

# Application Properties
```sh
Configure your `src/main/resources/application.properties`:
properties
spring.data.mongodb.uri=mongodb://localhost:27017/era_db
server.port=8080
 ```
## API Endpoints
```sh
List All Transactions
Endpoint: /transactions
url use:http://localhost:8080/era//transactions
Method: GET
Description: Lists all transactions based on the provided search parameters and pagination.
Query Parameters:
month (required): The month to filter transactions.
search (optional): Search text to match against product title/description/price.
page (optional): Page number for pagination (default: 1).
perPage (optional): Number of records per page (default: 10).

 ```
## Statistics
```sh
Endpoint: /statistics
Method: GET
used url in frontend : http://localhost:8080/era/statistics
Description: Provides statistics for the selected month.
Query Parameters:
month (required): The month to retrieve statistics.
 ```

##  Bar Chart
```sh
Endpoint: /bar-chart
url use :http://localhost:8080/era//bar-chart
Method: GET
Description: Generates data for a bar chart, showing the price range and the number of items in each range for the selected month.
Query Parameters:
month (required): The month to generate the bar chart.
 ```

 ## Pie Chart
 ```sh
Endpoint: /pie-chart
Method: GET
url use :http://localhost:8080/era/pie-chart
Description: Generates data for a pie chart, showing unique categories and the number of items from each category for the selected month.
Query Parameters:
month (required): The month to generate the pie chart.
 ```


## Combined Data
```sh
Endpoint: /combined-data
url use : http://localhost:8080/era//combined-response
Method: GET
Description: Fetches data from all the above APIs and combines the responses.
```

# Frontend
This frontend project is designed to interact with the backend APIs created for managing and analyzing product transactions. The frontend provides a user interface with a table and charts based on the fetched data from the backend.

## Usage
To use the frontend application, follow the instructions below:

## Ensure the backend API is deployed and accessible.


## Clone the frontend repository to your local machine.
 1. Install the necessary dependencies using the package manager of your choice (e.g., npm or yarn).
 2. npm install or yarn install

# steps access frontend 
1. clone the repository
2. cd frontend-ass
3. npm i
4. npm start

## url : localhost:3000
# Features
1. Transactions Table
2. Select Month Dropdown
3. Displays January to December months as options.
4. Defaults to March month.
5. Allows selecting a different month to display transactions.
6. Transactions List
7. Utilizes the transactions listing API to list transactions in a table.
8. Displays transactions of the selected month irrespective of the year using the API.
9. Search transaction box filters transactions based on title/description/price using the API.
10. Clears the search box to display the initial list of transactions for the selected month using the API.
11. Transactions Statistics
12. Displays total sale amount, total sold items, and total not sold items for the selected month.
13. Fetches data from the created API to populate the statistics box.
14. Transactions Bar Chart
15. Displays a bar chart showing the price range and the number of items in that range for the selected month.
16. Applies the selected month from the dropdown (above the table) to fetch data from the API.
Enjoy using the product transaction management system!


This structured format will make your README file clear and easy to navigate on GitHub. If you need any further adjustments or have additional content, let me know!
