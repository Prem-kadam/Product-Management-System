# 🛍️ Product Management System

A full-stack **Product Management System** built using **Spring Boot**, **Spring Data JPA**, **MySQL**, **HTML**, **CSS**, **Bootstrap**, and **JavaScript**. The application provides a responsive interface for managing products and categories through RESTful APIs.

---

## 📌 Features

### Product Management
- View all products
- Add a new product
- Update existing products
- Delete products
- Search product by ID
- View product details

### Category Management
- View all categories
- Add category
- Update category
- Delete category
- Dynamic category dropdown loaded from the database

---

## 🛠️ Technologies Used

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API
- Maven

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Fetch API)

### Database
- MySQL

---

## 📂 Project Structure

```
Product-Management-System
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.example.Product.management
│   │   │       ├── products
│   │   │       └── categories
│   │   ├── resources
│   │   │   ├── static
│   │   │   │   ├── index.html
│   │   │   │   ├── style.css
│   │   │   │   └── script.js
│   │   │   └── application.properties
│
├── pom.xml
└── README.md
```

---

## 🚀 REST API Endpoints

### Product APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/{id}` | Get product by ID |
| POST | `/api/products` | Add a new product |
| PUT | `/api/products/{id}` | Update product |
| DELETE | `/api/products/{id}` | Delete product |

---

### Category APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/{id}` | Get category by ID |
| POST | `/api/categories` | Add category |
| PUT | `/api/categories/{id}` | Update category |
| DELETE | `/api/categories/{id}` | Delete category |

---

## 🖥️ Application Features

- Responsive Bootstrap UI
- Product List
- Add/Edit Product Form
- Delete Product
- Search Product by ID
- Dynamic Category Dropdown
- RESTful CRUD Operations
- MySQL Database Integration

---

## ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Product-Management-System.git
```

### 2. Open the Project

Open the project in IntelliJ IDEA or any Java IDE.

### 3. Configure MySQL

Update `src/main/resources/application.properties` with your MySQL configuration.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/productdb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 4. Run the Application

Run:

```
ProductManagementApplication.java
```

The application starts on:

```
http://localhost:8080
```

---

## 📸 Screenshots

<img width="1521" height="557" alt="image" src="https://github.com/user-attachments/assets/35786e12-93c5-49f9-b2b7-7fcc24af01b2" />


## 👨‍💻 Author

**Your Name**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ If you found this project useful

Give this repository a ⭐ on GitHub.
