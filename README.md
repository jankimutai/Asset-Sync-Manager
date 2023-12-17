# Asset Sync Manager Frontend

This repository contains the frontend code for the Asset Management system. The application is built using ReactJs and utilizes Redux Toolkit for state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In any organization, managing assets efficiently is crucial. The Asset Management Frontend is designed to centralize asset information and streamline the process of requesting, tracking, and managing assets. The application provides a user-friendly interface for different roles within the organization, such as Admins, Procurement Managers, and regular Employees.

## Features

1. *User Authentication:*
   - Secure authentication mechanism for authorized access.

2. *User Roles:*
   - Classification of users into Admins, Procurement Managers, and regular Employees.

3. *Request Management:*
   - Users can request new assets or repairs through a form.
   - Users can track the status (pending, approved, rejected) of their requests.

4. *Assets Management:*
   - Admins can add assets, assign assets to employees, and categorize assets.
   - Admins can add images and categories to an asset.

5. *Separation of Views:*
   - Managers have separate views from regular users.

6. *Manager Dashboard:*
   - Ability for managers to add new assets to the system.
   - Comprehensive view of all asset assignments.
   - Overview of all assets and transactions made within the system.

7. *Request Approval:*
   - Procurement Managers can review and approve user requests.
   - Managers can see all pending requests with their urgency.

## Installation

1. *Clone the repository:*
   ```bash
   git clone git@github.com:jankimutai/Asset-Sync-Manager-FrontEnd.git

   cd asset-management-frontend
   npm install
   npm start

## Usage
The Asset Management Frontend simplifies the management of organizational assets by providing a user-friendly interface for Admins, Procurement Managers, and regular Employees. Upon logging in with manager credentials, users can seamlessly navigate the Manager Dashboard to add new assets, view comprehensive asset assignments, and monitor all transactions. The system facilitates asset requests through a user-friendly form, allowing users to track the status of their requests—be it pending, approved, or rejected. Additionally, Procurement Managers can efficiently review and approve user requests, ensuring a streamlined process. The application's modular components, including Navbar, Landing Page, Authentication, Footer, and specialized dashboards, contribute to an enhanced user experience. Tailwind CSS ensures a sleek and responsive design. Contributions to Asset Inventory Management are warmly welcomed, and the project is licensed under the MIT License.


## Components

1. Navbar

- The Navbar component serves as the application's navigation bar, providing links and options for users to navigate through different sections of the application. It includes links to the landing page, authentication, and specific dashboards for managers and procurement managers.

2. Landing Page

- The Landing Page component is the initial view users encounter when accessing the application. It may display a carousel of trending assets, upcoming events, or relevant information to capture user attention. It serves as an entry point for users to explore and interact with the application.

3. Authentication

- The Authentication component handles user authentication, including sign-up and log-in functionalities. It ensures a secure authentication mechanism, allowing only authorized users to access the application. Users can log in using their credentials to access personalized features.

4. Footer

- The Footer component is a reusable element that appears at the bottom of the application. It provides essential information, links, or copyright details. It enhances the user experience by giving a consistent layout across different views.

5. Manager Dashboard

- The Manager Dashboard is a critical component for managerial roles within the organization. It provides functionalities for managers to add new assets to the system, view comprehensive details of all asset assignments, and have an overview of assets and transactions made within the system. Managers can also see all pending requests with their urgency for efficient decision-making.

6. Procurement Manager Dashboard

- The Procurement Manager Dashboard is a specialized view for procurement managers. It includes features to review and approve user requests, ensuring a streamlined process for asset acquisition. Procurement managers can access information critical for decision-making and allocate resources effectively.

7. User Dashboard

- The User Dashboard is designed for regular employees within the organization. It provides users with a personalized view of their active and completed requests. Users can track the status of their requests, whether they are pending, approved, or rejected. The User Dashboard enhances user experience by centralizing information related to their asset requests and repairs.

## Technologies Used
- ReactJs
- Tailwind Css

## Contributing
We welcome contributions to Asset Inventory Management! 

*Collaborators*
1. Jan Kimutai
2. Anzal Abdinoor
3. Robert Njunge


## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details
