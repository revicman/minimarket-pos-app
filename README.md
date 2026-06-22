# Minimarket POS & Inventory Management Application

A comprehensive Point of Sale (POS) and Inventory Management system designed for minimarkets with advanced features including:

- **Role-Based Access Control (RBAC)**: 5 distinct roles with granular permissions
- **Product & Inventory Management**: SKU/Barcode tracking, stock management, and supplier coordination
- **Sales/POS Module**: Fast keyboard-friendly interface with multiple payment methods
- **Financial Accounting**: Double-entry ledger logic, profit/loss reporting
- **Member Loyalty Program**: Customer profiles with points and transaction history
- **Comprehensive Reporting**: CSV/Excel/PDF export capabilities

## Project Structure

```
minimarket-pos-app/
├── backend/                    # Node.js/Express backend
├── frontend/                   # React.js frontend
├── database/                   # Database schemas and migrations
├── docker-compose.yml          # Docker configuration
└── README.md
```

## Quick Start

1. Clone the repository
2. Follow setup instructions in `backend/` and `frontend/` directories
3. Configure environment variables
4. Run migrations
5. Start the application

## Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Secure password hashing

### Inventory Management
- Product catalog with barcode support
- Real-time stock tracking
- Minimum stock alerts
- Stock adjustments with audit logs

### Sales/POS
- Fast transaction processing
- Multiple payment methods (Cash, QRIS, Card)
- Receipt generation for thermal printers
- Cashier shift management

### Financial Management
- Double-entry ledger system
- Accounts payable/receivable tracking
- Profit & loss reporting
- Expense tracking

## Technology Stack

- **Backend**: Node.js, Express.js, PostgreSQL
- **Frontend**: React.js, TypeScript, TailwindCSS
- **Authentication**: JWT, bcrypt
- **Database**: PostgreSQL with Sequelize ORM
- **Reporting**: html2pdf, xlsx

## Documentation

Detailed documentation for each module is available in their respective directories.
