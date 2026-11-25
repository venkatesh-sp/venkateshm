# Venkatesh Marreboyina

Full Stack Developer · 7+ years of experience

venkatesh.marreboyina@gmail.com · 8977780323 · Hyderabad, India

## Profile

Results-driven Full Stack Developer with over 7 years of experience designing, developing, optimizing and deploying scalable, secure and high-performance web applications. Skilled in building robust backend architectures, RESTful APIs, dynamic front-end experiences and cloud-based application infrastructure. I specialise in backend development using Python, Django, Django REST Framework and Flask, alongside modern front-end technologies such as Next.js and Node.js. My experience spans the complete software development lifecycle, from translating business requirements into technical solutions to implementation, integration, deployment and ongoing maintenance. Throughout my career, I have developed and integrated RESTful APIs, implemented real-time Telegram messaging and chat update processing, and automated asynchronous email notifications using Django CRON jobs. I have also configured reliable transactional email services using Amazon SES and deployed production applications on AWS EC2 and Heroku. Beyond conventional application development, I have built custom WordPress themes and extended platform functionality to deliver tailored web solutions. I focus on writing clean, maintainable and reusable code, and I prioritise application performance, scalability, security and seamless user experiences. My approach combines strong backend engineering, modern front-end development, API integration, automation and cloud deployment to deliver reliable, production-ready software.

## Core stack

- **Python:** Flask, FastAPI, Django, Django Rest Framework, Streamlit, Django CRON jobs
- **Node.js:** ExpressJS, React (Vite), NextJS, UI Components (Shadcn)
- **AWS:** EC2, S3, SES, Lambda, RDS
- **Deployment services:** Heroku, Vercel, Docker
- **Databases:** Postgres, MongoDB

## Professional experience

### Full Stack Developer · Soulpage IT Solutions Private Limited

12/2019 – Present · Hyderabad, India

- Design and build full-stack web applications with Python, Django, Django REST Framework, Next.js and Node.js, from requirements through to production.
- Deploy and operate applications on AWS (EC2, S3 and SES) and Heroku, including configuring transactional email through AWS SES SMTP.
- Integrate third-party APIs to extend application functionality and improve the user experience.
- Resolve defects quickly by identifying root causes, improving application stability and user satisfaction.
- Conduct code reviews to maintain quality and consistency across the project lifecycle.
- Keep my skills current through continuous professional development in emerging frameworks and tools.

### Python Developer · Norm Software Solutions

08/2018 – 11/2019 · Hyderabad, India

- Built RESTful APIs with the Django REST Framework, enabling clean communication between front-end and back-end components.
- Produced workflow reports to validate proposed changes before they were executed.
- Identified system enhancements that improved functionality and streamlined administration.
- Refactored legacy code to modernise the application architecture and improve maintainability.
- Integrated third-party APIs to expand functionality and automate data retrieval.

## Projects

### Vulcan · Present

Healthcare pipeline that converts HL7 messages into FHIR JSON

Vulcan is a healthcare data pipeline that ingests raw HL7 messages, converts them to FHIR JSON, validates the output and stores the results. It is built as a set of services with clearly separated responsibilities, so each stage can be maintained and reasoned about on its own.

Stack: S3, Simple Queue, ExpressJS, NextJS, MongoDB, Swagger UI

- **Watcher:** Triggered by an S3 notification whenever a new file is uploaded. It computes the file's hash and checks the database for an existing copy: duplicates are recorded and processing stops, while new files are pushed onto a queue.
- **Consumer:** Reads messages from the queue, validates their type and confirms that each one is HL7. It sends the message to the Converter's HL7 API and posts the resulting FHIR JSON to the Finisher.
- **Converter:** Converts HL7 messages into FHIR JSON.
- **Validator:** Validates incoming FHIR JSON payloads and returns a response describing the result.
- **Finisher:** Saves each response to the database and stores the FHIR JSON in S3 and MongoDB.
- **FHIR API (ExpressJS):** A Node.js service for handling FHIR JSON, documented and explorable through Swagger UI.
- **Provider Portal (Next.js):** A front-end portal that gives users an overview of resources across tabular views.

### Libero · 2020 – 2021

AI-powered video conferencing product

Libero is a video conferencing product developed for an innovation challenge under the Digital India programme (2020). It was one of the top five entries, recognised for its potential to deliver an intuitive video conferencing experience.

Stack: NextJS, OpenVidu, Phoenix / Elixir, Docker

- Built the client application in Next.js, integrated with the OpenVidu media server to handle live video streams and track the users who join each session.
- Developed the server application in Phoenix (Elixir) to store rooms, chats, boards and user information.
- Packaged the media server as a Docker image and deployed it from that image.

### JVB Health and Wellness · 2018 – 2019

Health and wellness platform that analyses data from wearable devices

A health and wellness platform that helps people improve their fitness and quality of life through a targeted, data-driven approach to personal transformation. It brings together data from wearable devices and presents it on both the web and mobile.

Stack: Fitbit, Garmin, Apple Health, Web, Mobile

- Integrated data from fitness devices such as Fitbit, Garmin and Apple Health into both the web and mobile applications.
- Provides reviews and analysis of workouts, nutrition, sleep, movement and race results, so users can follow their progress over time.

### PayTrack · 2026

Personal finance tracker for EMIs, loans, credit card bills and recurring payments

A personal finance application that keeps EMIs, loans, credit card bills and recurring payments organised in one place. It provides reminders and analytics and maintains a complete payment history.

Stack: Next.js, TypeScript

Live site: https://paytrack.venkateshm.me

## Education

- **Bachelor of Technology in Computer Science and Engineering** · 2012 – 2016
  QIS College of Engineering and Technology, Ongole, India
- **Intermediate (MPC)** · 2010 – 2012
  Sri Chaitanya Junior Kalasala, Vijayawada, India
- **Secondary School Certificate (SSC)** · 2009 – 2010
  St. Arnold's High School, Medarametla, India
