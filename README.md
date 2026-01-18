Multi-Platform Quality Assurance Framework
This repository contains an end-to-end (E2E) automation suite covering both Web UI and REST API testing. Built with Cypress (v14.3.1), the project utilizes Object-Oriented Programming (OOP) principles and a modular design to ensure scalability and ease of maintenance.

🚀 Features
Web Automation: UI flow covering Login, Registration, and Product Management.
API Automation: Direct REST API testing for core business logic (Auth/Products).
Dynamic Registration Logic: Automated handling of daily database resets.
Structured Architecture: Clear separation of concerns using Page Objects and specialized Methods.

🛠 Project Architecture
The project is designed with a high level of abstraction to keep tests readable and dry.

Web Automation (UI)
Organized into three layers:

Elements: Locators for UI components.
Pages: High-level page representations.

API Automation
Separated into:
Methods: Core HTTP request configurations (GET, POST, etc.).
Logic Pages: Mapping API endpoints to specific functional testing flows.

📋 Key Workflows
🔐 Smart Registration Flow
Since the target environment database is cleared daily, the framework includes a smart check:
Existence Check: Before registering, the script checks if the "Main Account" exists for the current day.
Conditional Logic:
If the main account is missing: It creates the master test account.
If the main account exists: It generates a randomized user to ensure the registration flow can be tested repeatedly without conflicts.

💻 Technical Stack
Framework: Cypress v14.3.1
Language: JavaScript 
Pattern: Object-Oriented Programming (OOP) & Page Object Model (POM)

