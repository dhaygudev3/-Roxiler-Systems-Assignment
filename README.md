#  Roxiler Systems Assignment
 # ERA Product Statistics Application

## Overview
The ERA Product Statistics Application is a full-stack web application designed to manage and display product statistics. It features a backend built with Spring Boot and MongoDB, and a frontend built with React and Recharts for data visualization.

## Table of Contents
1. [Features](#features)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [API Endpoints](#api-endpoints)
5. [Usage](#usage)

## Features
- Add and manage products.
- View statistics for total sales, sold items, and not sold items.
- Display product data in a bar chart for a selected month.

## Backend Setup

### Prerequisites
- Java 17
- Maven
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/era-product-statistics.git
    cd era-product-statistics/backend
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

### Application Properties
Configure your `src/main/resources/application.properties`:
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/era_db
server.port=8080
