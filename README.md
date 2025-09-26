# 🏥 ZeeCare Medical Institute - Hospital Management System

A comprehensive Hospital Management System built with the MERN stack, providing separate interfaces for patients and administrators to manage appointments, doctors, and medical services efficiently.

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Database Schema](#-database-schema)
- [API Endpoints](#-api-endpoints)
- [Authentication & Authorization](#-authentication--authorization)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🔐 Authentication & Authorization
- **Multi-role Authentication**: Separate login systems for Patients, Doctors, and Admins
- **JWT Token-based Security**: Secure authentication with HTTP-only cookies
- **Role-based Access Control**: Different permissions for different user types

### 👨‍⚕️ Admin Dashboard Features
- **Doctor Management**: Add, view, and manage doctor profiles with avatar uploads
- **Admin Management**: Create new admin accounts
- **Appointment Management**: View, accept, reject, and track all appointments
- **Message Center**: View and manage patient inquiries
- **Real-time Statistics**: Dashboard with appointment and doctor counts

### 👤 Patient Portal Features
- **User Registration & Login**: Secure patient account creation
- **Appointment Booking**: Schedule appointments with preferred doctors
- **Department Selection**: Choose from 9 medical departments
- **Doctor Selection**: View available doctors by department
- **Medical History**: Track previous visits and appointments
- **Contact Form**: Send messages to hospital administration

### 🏥 Medical Departments
- Pediatrics
- Orthopedics  
- Cardiology
- Neurology
- Oncology
- Radiology
- Physical Therapy
- Dermatology
- ENT (Ear, Nose, Throat)

## 🚀 Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Cloudinary** - Image upload and storage
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Parse HTTP cookies

### Frontend
- **React 19** - User interface library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **React Multi Carousel** - Carousel component
- **Vite** - Build tool and development server

### Development Tools
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting
- **dotenv** - Environment variable management

## 📁 Project Structure

```
hospital-management-system/
├── Backend/
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── catchAsyncErrors.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── appointmentSchema.js
│   │   ├── messageSchema.js
│   │   └── userSchema.js
│   ├── router/
│   │   ├── appointmentRouter.js
│   │   ├── messageRouter.js
│   │   └── userRouter.js
│   ├── utils/
│   │   └── jwtToken.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddNewAdmin.jsx
│   │   │   ├── AddNewDoctor.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Messages.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── Biography.jsx
│   │   │   ├── Departments.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── MessageForm.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Pages/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🛠 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hospital-management-system.git
cd hospital-management-system
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Dashboard Setup

```bash
cd ../dashboard
npm install
```

## 🔧 Environment Variables

Create a `.env` file in the `Backend/config/` directory:

```env
# Database
MONGO_URI=mongodb://localhost:27017/hospital_management
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hospital_management

# JWT Configuration
JWT_SECRET_KEY=your-super-secret-jwt-key-here
JWT_EXPIRES=7d
COOKIE_EXPIRE=7

# Server Configuration
PORT=4000

# Frontend URLs
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

## 🗄 Database Schema

### User Schema
```javascript
{
  firstName: String (required, min: 2)
  lastName: String (required, min: 2)
  email: String (required, unique, validated)
  phone: String (required, exactly 10 digits)
  nic: String (required, exactly 12 digits)
  dob: Date (required)
  gender: Enum ["Male", "Female", "Others"]
  password: String (required, min: 8, hashed)
  role: Enum ["Admin", "Patient", "Doctor"]
  doctorDepartment: String (for doctors only)
  docAvatar: {
    public_id: String
    url: String
  }
}
```

### Appointment Schema
```javascript
{
  firstName: String (required, min: 3)
  lastName: String (required, min: 3)
  email: String (required, validated)
  phone: String (required, exactly 11 digits)
  nic: String (required, exactly 13 digits)
  dob: Date (required)
  gender: Enum ["Male", "Female"]
  appointment_date: String (required)
  department: String (required)
  doctor: {
    firstName: String (required)
    lastName: String (required)
  }
  hasVisited: Boolean (default: false)
  address: String (required)
  doctorId: ObjectId (required)
  patientId: ObjectId (required, ref: "User")
  status: Enum ["Pending", "Accepted", "Rejected"] (default: "Pending")
}
```

### Message Schema
```javascript
{
  firstName: String (required, min: 2)
  lastName: String (required, min: 2)
  email: String (required, validated)
  phone: String (required, min: 10)
  message: String (required)
}
```

## 🔗 API Endpoints

### User Routes (`/api/v1/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/patient/register` | Register new patient | No |
| POST | `/login` | User login (all roles) | No |
| POST | `/admin/addnew` | Add new admin | Admin |
| POST | `/doctor/addnew` | Add new doctor | Admin |
| GET | `/doctors` | Get all doctors | No |
| GET | `/patient/me` | Get patient profile | Patient |
| GET | `/admin/me` | Get admin profile | Admin |
| GET | `/patient/logout` | Logout patient | Patient |
| GET | `/admin/logout` | Logout admin | Admin |

### Appointment Routes (`/api/v1/appointment`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/post` | Create new appointment | Patient |
| GET | `/getall` | Get all appointments | Admin |
| PUT | `/update/:id` | Update appointment status | Admin |
| DELETE | `/delete/:id` | Delete appointment | Admin |

### Message Routes (`/api/v1/message`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/send` | Send message | No |
| GET | `/getall` | Get all messages | Admin |

## 🔐 Authentication & Authorization

### JWT Token System
- **Patient Token**: Stored in `patientToken` cookie
- **Admin Token**: Stored in `adminToken` cookie
- **Token Expiry**: 7 days (configurable)
- **HTTP-Only Cookies**: Prevents XSS attacks

### Middleware Protection
- `isPatientAuthenticated`: Protects patient routes
- `isAdminAuthenticated`: Protects admin routes
- `isAuthorized`: Role-based access control

### Password Security
- Passwords hashed using bcrypt with salt rounds of 10
- Password comparison using bcrypt.compare()

## 🚀 Usage

### 1. Start the Backend Server

```bash
cd Backend
npm run dev
# Server runs on http://localhost:4000
```

### 2. Start the Frontend (Patient Portal)

```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### 3. Start the Dashboard (Admin Panel)

```bash
cd dashboard
npm run dev
# Dashboard runs on http://localhost:5174
```

### 4. Access the Applications

- **Patient Portal**: http://localhost:5173
- **Admin Dashboard**: http://localhost:5174
- **API Server**: http://localhost:4000

## 👥 User Roles & Access

### 🏥 Admin Features
1. **Login** to admin dashboard
2. **View Dashboard** with statistics
3. **Manage Appointments** (view, accept, reject, delete)
4. **Add New Doctors** with profile pictures
5. **Add New Admins**
6. **View All Doctors**
7. **Read Patient Messages**

### 👤 Patient Features
1. **Register** new account
2. **Login** to patient portal
3. **Book Appointments** with doctor selection
4. **Browse Departments** and services
5. **Send Messages** to administration
6. **View Hospital Information**

### 👨‍⚕️ Doctor Features
- Doctors are added by admins
- Profile management through admin dashboard
- Department assignment and specialization

## 🖼 Screenshots

*Add screenshots of your application here*

```markdown
### Patient Portal
![Home Page](screenshots/patient-home.png)
![Appointment Booking](screenshots/appointment-form.png)

### Admin Dashboard  
![Dashboard](screenshots/admin-dashboard.png)
![Doctor Management](screenshots/doctor-management.png)
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository
```bash
git fork https://github.com/yourusername/hospital-management-system.git
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 4. Test Your Changes
```bash
# Run backend tests
cd Backend && npm test

# Run frontend tests  
cd frontend && npm test

# Run dashboard tests
cd dashboard && npm test
```

### 5. Commit and Push
```bash
git add .
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
```

### 6. Create Pull Request
- Provide clear description of changes
- Include screenshots if UI changes
- Reference any related issues

## 🐛 Known Issues & Limitations

1. **Message Schema Validation**: Message field has `exactLength: 10` which seems restrictive
2. **NIC Validation**: Different lengths (12 vs 13 digits) in User vs Appointment schemas
3. **Phone Validation**: Inconsistent lengths (10 vs 11 digits) across schemas
4. **Cloudinary Config**: Duplicate `cloud_name` property in server.js
5. **Error Handling**: Some API calls lack comprehensive error handling

## 🔄 Future Enhancements

- [ ] **Real-time Notifications** using Socket.io
- [ ] **Email Integration** for appointment confirmations
- [ ] **Payment Gateway** integration
- [ ] **Medical Records** management
- [ ] **Prescription** system
- [ ] **Video Consultation** feature
- [ ] **Mobile App** development
- [ ] **Analytics Dashboard** with charts
- [ ] **Multi-language Support**
- [ ] **Dark Mode** theme

## 📝 Development Guidelines

### Code Style
- Use ES6+ features
- Follow consistent naming conventions
- Add JSDoc comments for functions
- Use meaningful variable names

### Git Workflow
- Create feature branches for new features
- Write descriptive commit messages
- Use conventional commits format
- Squash commits before merging

### Testing
- Write unit tests for controllers
- Add integration tests for API endpoints
- Test responsive design on multiple devices
- Validate forms and error handling

## 🔧 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```bash
Error: MongoNetworkError: failed to connect to server
```
**Solution**: Ensure MongoDB is running and connection string is correct

#### 2. CORS Error
```bash
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Check CORS configuration in app.js and ensure frontend URLs are whitelisted

#### 3. JWT Token Error
```bash
JsonWebTokenError: invalid token
```
**Solution**: Clear browser cookies and login again

#### 4. Image Upload Issues
```bash
Error: Failed To Upload Doctor Avatar To Cloudinary
```
**Solution**: Verify Cloudinary credentials in environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 ZeeCare Medical Institute

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

For questions, suggestions, or support:

- **Email**: zeecare@hospital.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/yourusername)
