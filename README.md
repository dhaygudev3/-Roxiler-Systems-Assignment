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

#### Application Properties
Configure your `src/main/resources/application.properties`:
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/era_db
server.port=8080

API Endpoints
List All Transactions
Endpoint: /transactions
Method: GET
Description: Lists all transactions based on the provided search parameters and pagination.
Query Parameters:
month (required): The month to filter transactions.
search (optional): Search text to match against product title/description/price.
page (optional): Page number for pagination (default: 1).
perPage (optional): Number of records per page (default: 10).


Statistics
Endpoint: /statistics
Method: GET
Description: Provides statistics for the selected month.
Query Parameters:
month (required): The month to retrieve statistics.


Bar Chart
Endpoint: /bar-chart
Method: GET
Description: Generates data for a bar chart, showing the price range and the number of items in each range for the selected month.
Query Parameters:
month (required): The month to generate the bar chart.


Pie Chart
Endpoint: /pie-chart
Method: GET
Description: Generates data for a pie chart, showing unique categories and the number of items from each category for the selected month.
Query Parameters:
month (required): The month to generate the pie chart.



Combined Data
Endpoint: /combined-data
Method: GET
Description: Fetches data from all the above APIs and combines the responses.







This structured format will make your README file clear and easy to navigate on GitHub. If you need any further adjustments or have additional content, let me know!
