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
<img width="1650" height="397" alt="image" src="https://github.com/user-attachments/assets/8e3c8f87-9db5-4c92-9a85-0b1599fce0ad" />
<img width="1552" height="567" alt="image" src="https://github.com/user-attachments/assets/11ebfd56-9fb1-4153-8113-34ffb5c032ac" />
<img width="1510" height="567" alt="image" src="https://github.com/user-attachments/assets/7a4d61d8-a5c5-4497-8f6b-b2f1e3739f3a" />
<img width="1595" height="457" alt="image" src="https://github.com/user-attachments/assets/637cb96e-ff36-4ebd-8b2e-4d5d62af2f8c" />
<img width="1262" height="832" alt="image" src="https://github.com/user-attachments/assets/c59b8d82-9088-4620-b866-7e22aed2916a" />
<img width="1152" height="427" alt="image" src="https://github.com/user-attachments/assets/bc554740-d04f-49a8-be3c-6f346643186a" />
<img width="1162" height="845" alt="image" src="https://github.com/user-attachments/assets/39959a2f-8165-471d-8b64-790b3d0827b5" />
<img width="820" height="742" alt="image" src="https://github.com/user-attachments/assets/771dae68-2b57-48d6-b0af-edaa411460d2" />
<img width="1137" height="861" alt="image" src="https://github.com/user-attachments/assets/c3e9bf63-5063-49f7-96e4-18176c2fa7a9" />
<img width="1277" height="868" alt="image" src="https://github.com/user-attachments/assets/075986d6-72c9-4bc0-8ba1-44c2a0b26954" />
<img width="446" height="342" alt="image" src="https://github.com/user-attachments/assets/d7521bc4-fa89-4c08-872f-caeb575b243b" />


## 👨‍💻 Author

**Prem Kadam**



## ⭐ If you found this project useful

Give this repository a ⭐ on GitHub.
