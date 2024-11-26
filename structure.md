## Suggested JSON transfer formats.

 ``` 
    1. the front-end json (sends data to the backend system)
    2. back-end json (sends the data received to the AI endpoint) 
    3. AI generates a list of tasks & sub-tasks. Each task is sent to a lambda function.
    4. Lambda function sends each task & sub-task to the frontend/backend system. 
```

---
## Front-end API json format

> timeline data is in weeks e.g. 30 weeks, 21 weeks etc.
```

```json
{
    "project": "Develop a cross-platform mobile application that acts as a virtual health assistant, helping users track their health, provide personalized wellness tips, and assist with minor medical consultations using AI.",
    "timeline": "10",
}
```



## AI endpoint returned json data format containing different task items
```json
[
    {
        "number": 1,
        "title": "Create Requirement Specification Document.",
        "description": "This involves several key activities aimed at defining the project's scope, objectives, and requirements.
            By thoroughly addressing these activities during the planning and requirement gathering stage, we can set a solid 
            foundation for successful project execution and delivery.
        ",
        "priority": "High",
        "status": "ToDo",
        "subtasks": [
            "Gather and document stakeholder requirements.",
            "Define feature list and user stories",
            "Review and approve with stakeholders"
        ],
        <!-- "dueDate": "", -->
        "tags": ["planning", "requirements"],

    },
    {
        "number": 2
        "title": "Design User Flow Diagrams.",
        "description": "this involves creating visual representations of the steps users take to accomplish specific tasks using our application.",
        "priority": "Medium",
        "status": "ToDo",
        "subtasks": [
            "Map user journeys for students, teachers, and administrators",
            "Create process flow diagrams for core modules",
            "Review and update based on feedback"
        ],
        <!-- "dueDate": "", -->
        "tags": [""planning", "diagrams", "requirements"],
    },
    {
        "number": 3,
        "title": "Finalize Tech Stack and Database Schema.",
        "description": "This stage involves selecting the technologies & tools that will be used to build the application,
             and defining the structure of the database that will support our application's data needs.",
        "priority": "High",
        "status": "ToDo",
        "subtasks": [
            "Evaluate and select frontend, backend frameworks, and databases",
            "Design database schema with tables and relationships",
            "Conduct schema review and finalize"
        ],
        <!-- "dueDate": "", -->
        "tags": [""planning", "architecture", "stack"],
    },
    {
        "number": 4,
        "title": "Finalize Tech Stack and Database Schema.",
        "description": "This stage involves selecting the technologies & tools that will be used to build the application,
             and defining the structure of the database that will support our application's data needs.",
        "priority": "High",
        "status": "ToDo",
        "subtasks": [
            "Evaluate and select frontend, backend frameworks, and databases",
            "Design database schema with tables and relationships",
            "Conduct schema review and finalize"
        ],
        <!-- "dueDate": "", -->
        "tags": [""planning", "architecture", "stack"],
    },
    {
        "number": 5,
        "title": "Create User Authentication and Authorization System.",
        "description": "This stage involves implementing mechanisms to verify user identities (authentication) 
            and control access to resources based on user roles and permissions (authorization).",
        "priority": "High",
        "status": "ToDo",
        "subtasks": [
            "Design login and signup forms",
            "Create a user registration process that collects necessary information (e.g., email, password) and validates
                 input (e.g., checking for existing accounts).",
            "Implement JWT-based authentication",
            "Implement Two-Factor Authentication (2FA). This may involve sending a verification code via SMS or email",
            "Create password reset functionality",
            "Perform security testing to identify vulnerabilities in the authentication and authorization system",
            "Create documentation that outlines the authentication and authorization processes, including user roles, permissions, 
                and any relevant API endpoints.",
            "Implement logging and monitoring to detect unauthorized access attempts and other security incidents.",
        ],
        <!-- "dueDate": "", -->
        "tags": [""planning", "architecture", "authentication", "authorization"],
    },
    {
        "number": 6,
        "title": "Role-Based Access Control (RBAC) Implementation",
        "description": "RBAC is a method of regulating access to resources based on the roles assigned to individual users within an organization.",
        "priority": "High",
        "status": "ToDo",
        "subtasks": [
            "Define user roles and permissions.",
            "Create the necessary database tables to store roles, permissions, and user-role associations.",
            "Create Role Hierarchies e.g. an Admin role might inherit permissions from a User role, allowing 
                for more streamlined management of permissions.",
            "Implement role checks on endpoints. Implement middleware in your application that checks user roles and permissions before 
                allowing access to specific routes or resources.",
            "Create UI elements for role management i.e. an admin interface that allows authorized users (e.g., Admins) to manage roles and permissions.",
            "Test the RBAC implementation to ensure that users can only access resources and perform actions that their roles permit.",
            "Allow for extensibility and scalability so that as the application evolves, roles and permissions can be updated as needed 
                to accommodate new features or changes in user responsibilities."
        ],
        <!-- "dueDate": "", -->
        "tags": [""planning", "rbac", "authorization"],
    },
    {
        "number": 7,
        "title": "Role-Based Access Control (RBAC) Implementation",
        "description": "RBAC is a method of regulating access to resources based on the roles assigned to individual users within an organization.",
        "priority": "High",
        "status": "ToDo",
        "subtasks": [
            "Define user roles and permissions.",
            "Create the necessary database tables to store roles, permissions, and user-role associations.",
            "Create Role Hierarchies e.g. an Admin role might inherit permissions from a User role, allowing 
                for more streamlined management of permissions.",
            "Implement role checks on endpoints. Implement middleware in your application that checks user roles and permissions before 
                allowing access to specific routes or resources.",
            "Create UI elements for role management i.e. an admin interface that allows authorized users (e.g., Admins) to manage roles and permissions.",
            "Test the RBAC implementation to ensure that users can only access resources and perform actions that their roles permit.",
            "Allow for extensibility and scalability so that as the application evolves, roles and permissions can be updated as needed 
                to accommodate new features or changes in user responsibilities."
        ],
        <!-- "dueDate": "", -->
        "tags": [""planning", "rbac", "authorization"],
    },
]
```