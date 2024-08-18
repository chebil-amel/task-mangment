Task Management Application
=============================

This is a full-stack web application generated using JHipster, with a Task entity and CRUD operations. The application uses Spring Boot for the back-end, Angular for the front-end, and H2 in-memory database.

Getting Started
To get started with the application, follow these steps:

Clone the repository: git clone https://github.com/chebil-amel/task-mangment.git
Navigate to the project folder: cd task-mangement
Install dependencies: npm install (for Angular) and ./mvnw install (for Spring Boot)
Start the application: npm start (for Angular) and ./mvnw spring-boot:run (for Spring Boot)
Running the Application Locally
To run the application locally, follow these steps:

Build the Docker image: docker build -t task-mangment .
Run the Docker container: docker run -p 8080:8080 task-mangment
Access the application: http://localhost:8080
Using the GitHub Actions Workflow
The GitHub Actions workflow is set up to automatically build the Docker image and push it to Docker Hub on each push to the main branch. To use the workflow, follow these steps:

Make changes to the code and commit them: git add . and git commit -m "your-commit-message"
Push the changes to the main branch: git push origin main
The GitHub Actions workflow will automatically build the Docker image and push it to Docker Hub
Project Structure
The project structure is as follows:

src/main/docker: Docker configurations for the application and services
src/main/webapp: Angular application code
src/main/java: Spring Boot application code
package.json: npm dependencies and scripts
.yo-rc.json: Yeoman configuration file
.jhipster/*.json: JHipster entity configuration files
Development
To develop the application, run the following commands in two separate terminals:

./mvnw (for Spring Boot)
./npmw start (for Angular)
PWA Support
The application has PWA (Progressive Web App) support, but it's turned off by default. To enable it, uncomment the service worker initialization code in src/main/webapp/app/app.config.ts.

Managing Dependencies
To manage dependencies, use npm scripts and Angular CLI. For example, to add a new dependency,
 run ./npmw install --save <dependency-name>.

Building for Production
To build the application for production, run ./mvnw -Pprod clean verify. This will concatenate and minify the client CSS and JavaScript files.

Testing
To run tests, use the following commands:

./mvnw verify (for Spring Boot tests)
./npmw test (for client tests)
Code Quality
To analyze code quality, use Sonar. You can start a local Sonar server with docker compose -f src/main/docker/sonar.yml up -d.