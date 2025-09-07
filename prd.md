# Product Requirements Document (PRD): Voluntary Carbon Offsets Dashboard

## Introduction
This document outlines the requirements for a NextJS dashboard application that visualizes data from the UC Berkeley Voluntary Offsets Registry Database. The application will serve as a tool for researchers and offset buyers to explore trends and project information, increasing transparency in the carbon offset market. The dashboard will display key metrics and trends through dynamic charts and a user-friendly interface. The goal is to make complex market data accessible to a wide audience.

## User Stories
As a user, I want to:

View high-level statistics and summaries of carbon offset projects on a landing page.

Access a dashboard to explore detailed charts and data.

Filter data on the dashboard by project type, registry, location, and time period.

See trends in credit issuance and retirement over time.

Understand the distribution of projects by different criteria (e.g., location, type).

Interact with charts (e.g., hover for details, zoom in/out).

## Components
### Landing Page
Header: A navigation bar with the app title and links to the Dashboard.

Hero Section: A visually appealing section with a brief description of the app's purpose and a call-to-action button leading to the Dashboard.

About Section: 

Tech Stack Section:

### Dashboard Page
The dashboard will be a single-page application where users can interact with all the data visualizations.

Main Navigation/Sidebar: A sidebar or a top navigation bar with filters and controls for the charts. Filters should include:

Registry: American Carbon Registry (ACR), Climate Action Reserve (CAR), Gold Standard, and Verra (VCS).

Project Type: (e.g., Forestry and Land Use, Energy, Industrial Processes).

Location: Filter by country or region.

Time Period: A date range selector to view data over a specific period.

Key Performance Indicators (KPIs): A section with cards displaying real-time or aggregated stats based on the selected filters, such as:

Credits Issued: Total number of credits issued within the filtered view.

Credits Retired: Total number of credits retired.

Outstanding Credits: The difference between issued and retired credits.

Total Projects: The count of projects that meet the filter criteria.

Interactive Charts:

Line Chart: Display trends of credit issuances and retirements over time.

Bar Chart: Visualize the distribution of credits by project type and registry.

Pie Chart/Donut Chart: Show the percentage breakdown of projects by registry or location.

Map/Geographical Chart: Visualize the number of projects or credits by country/region.

Note: All charts should be responsive and update dynamically based on filter selections.

##. Technical Stack & Architecture
### Frontend: NextJS will be used for a fast and scalable React application. It supports both client-side and server-side rendering, which is ideal for a data-heavy dashboard.

### Charting Library: Highcharts is a strong choice due to its robustness and a wide range of chart types. While Highcharts requires a commercial license for commercial use, there are free alternatives like Recharts or Chart.js that also integrate well with React. For this project, a thorough evaluation should be conducted to determine which library best fits the visualization needs and licensing constraints.

### UI Components: Shadcn UI will be used for its high-quality, reusable components built on top of Tailwind CSS. This will ensure a consistent and modern design aesthetic.

### Backend/Database: Supabase will serve as the backend. The database will be pre-populated with data from the Berkeley Carbon Trading Project database. Supabase provides a powerful Postgres database with a built-in API, making it easy to query and retrieve data for the dashboard.

### Data Handling: The application will fetch data from Supabase using its client library. Data queries will be optimized to ensure quick load times, potentially using server-side functions in Next.js to pre-fetch data.

### Deployment: The application will be deployed on a platform like Vercel, which is optimized for Next.js and integrates seamlessly with Supabase.

## Additional Considerations
Accessibility: Ensure the application is accessible to all users, following WCAG guidelines for color contrast, keyboard navigation, and screen reader compatibility.

Performance: Optimize for performance by lazy-loading components and charts, and using efficient data fetching strategies.

Responsiveness: The layout and charts must be fully responsive, providing a seamless experience on both desktop and mobile devices.

Data Updates: A plan for periodically updating the database with new versions of the Berkeley Carbon Trading Project data will be required. This could involve a simple manual process or an automated script.