# 📘 Software Requirements Specification (SRS)

## 🚆 Railway Booking Web Application

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to outline the software requirements for a web-based Railway Booking Application. The system will allow users to search trains, book tickets, and manage their bookings. Admins will be able to manage trains, routes, and booking records.

### 1.2 Scope
The application will support:
- User registration and login
- Train search and filtering
- Real-time seat availability
- Booking and cancellation
- Payment gateway integration
- Admin panel for train and booking management

### 1.3 Definitions, Acronyms, and Abbreviations
- **Django** – Python-based web framework (backend)
- **React** – JavaScript library for building UI (frontend)
- **JWT** – JSON Web Token for authentication
- **REST API** – A standard way to exchange data between frontend and backend
- **CRUD** – Create, Read, Update, Delete

### 1.4 References
- Django Documentation  
- React Documentation  
- REST API Guidelines  
- Bootstrap/Tailwind CSS (for UI)

### 1.5 Overview
This document outlines the functional and non-functional requirements, system features, user roles, and constraints of the railway booking app.

---

## 2. Overall Description

### 2.1 Product Perspective
This is a standalone web application. It does not depend on any existing software.

### 2.2 Product Functions
- Search trains by date, location
- Display available classes and seats
- Ticket booking with confirmation
- Secure login and role-based access
- Admin management dashboard

### 2.3 User Classes and Characteristics
- **Passenger/User** – Can search, book, view or cancel bookings  
- **Admin** – Can manage train schedules, bookings, and user data

### 2.4 Operating Environment
- Backend: Django (Python 3.x)  
- Frontend: React.js  
- Database: PostgreSQL  
- OS: Cross-platform  
- Browser: Chrome, Firefox, Edge, Safari

### 2.5 Constraints
- Must follow RESTful architecture  
- Responsive UI for mobile and desktop  
- Secure password storage and communication  
- Payment gateway support (SSLCommerz, Stripe, etc.)

### 2.6 Assumptions and Dependencies
- Internet access is required  
- Users will use valid payment methods  
- Admin will maintain and update train information regularly

---

## 3. Specific Requirements

### 3.1 Functional Requirements

| ID | Description |
|----|-------------|
| FR1 | Users can register and log in |
| FR2 | Users can search trains by date and location |
| FR3 | The system displays available trains and seat availability |
| FR4 | Users can select seat(s) and proceed to booking |
| FR5 | Payment is processed securely |
| FR6 | Ticket confirmation is sent via email |
| FR7 | Users can cancel bookings and request refunds |
| FR8 | Admin can add, update, or delete trains and schedules |
| FR9 | Admin can view all bookings |

### 3.2 Non-Functional Requirements

| ID | Description |
|----|-------------|
| NFR1 | The system should respond to any booking action in under 2 seconds |
| NFR2 | The UI should be mobile-friendly |
| NFR3 | Passwords must be encrypted and stored securely |
| NFR4 | The system should be available 99% of the time |
| NFR5 | All sensitive actions require authentication |

### 3.3 External Interface Requirements
- **Frontend**: Built with React.js  
- **Backend API**: Django REST Framework (DRF)  
- **Database**: PostgreSQL  
- **Payment API**: SSLCommerz or Stripe  
- **Email/SMS**: SendGrid or Twilio (for notifications)

---

## 4. Appendices

- **A. Use Case Diagram**  
  (Passenger: Search → View → Book → Pay → Receive Ticket)  
  (Admin: Add/Edit/Delete Train → View All Bookings)

- **B. Entity-Relationship Diagram (ERD)**  
  - Tables: User, Train, Booking, Payment, Seat, Route

- **C. Sample UI Mockups**  
  (Landing page, search result page, booking form, admin dashboard)

- **D. Technologies**  
  - React + Vite  
  - Django + DRF  
  - PostgreSQL  
  - Tailwind CSS  
  - JWT for auth
- **E. [🗓️ Project Sprint Plan](./sprint-pland.md)** – Timeline and breakdown into Agile sprints
   
