## PlayIt

### Web aplication with Go, Laravel

### Index:
- About this project
- Get started
- Architecture
- Other technologies
- Tools

### About this project

This project is carried out by two students of the ies l'Estacio of the second year of the upper cycle in Web Application Development.

Done in seven weeks.

PlayIt is a web application to view songs and create lists to keep track of your musical tastes.
It has an administrator panel to create, modify and delete songs.

This application is configured with docker, which means that it will be easier to launch.

### Get started

In order to start this application, you must follow the following steps:

- #### Step 1

Clone this repository https://github.com/rmenendezdaw/Angular_Laravel_Go_APP.git.

- #### Step 2

If you are using a service that has the following ports you will have to stop it:

##### Ports
- 80
- 3000
- 3001
- 3500
- 3306
- 8005
- 9090

Command to stop services: "sudo service *myService* stop".

- #### Step 3

Execute this command: "sudo docker-compose up --build".

- #### Step 4

Go to the frontend directory and execute:

1. npm install
2. npm start

### Architecture

Built with:

#### Backend
- Go v1.5
- Laravel v7
#### Frontend
- Angular v11.0.2
#### Database
- Mysql v5.7
#### Database cache
- Redis v4.0
#### Metrics&Monitoring
- Traefik v2.3
- Prometheus v2.20.1
- Grafana v7.1.5
#### Version Control
- Github

### Other technologies

- JWT
- GORM
- TOASTR

### Tools

- Postman
- Workbench
- Portainer