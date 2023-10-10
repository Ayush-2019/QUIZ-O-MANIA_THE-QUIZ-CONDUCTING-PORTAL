# QUIZ-O-MANIA_THE-QUIZ-CONDUCTING-PORTAL

The demonstration video for this project is here:- https://drive.google.com/file/d/1ShlnGv1n6X57-45u1x3_0noM9kGZ7P-Q/view?usp=sharing

This project will be deployed soon....

DESCRIPTION:-

This is a full-stack application developed using Java and Spring Boot along with hibernate for server side development and Angular for client side development. MYSQL database is used to store the data and the same is retrieved and updated as per requests sent from the frontend. The following tables are added to this database:-

a) User table to store user details b) Role table to store possible roles of users like admin user and student(the test taker) c) User role table, that explains which user has what roles d)Quiz table to store all quiz e)Catgory table to store details of categories f) Questions table to store questions of all quiz g) Results table to store results of students who attempted the quiz

Various REST api's are developed using Java, Spring Boot and Hibernate. These api's are called from the frontend as various GET, POST, PATCH, DELETE requests.

User passwords are encrypted using Bcrypt Password Encoder and Jsonwebtoken generates the token to let only the genuine user login.

Angular is used for client side development. The UI is made appealing using various Angular Material components, such as mat-raised button, mat-form-field, mat-slide-toggle etc.

The admin users can view his/her profile, can add new categories, quiz, new questions for a quiz, update previous quiz and see various details regarding attempts of quiz made by test-takers. Ckeditor is integrated with the frontend to provide manual styling for the questions of quiz.

The normal user(i.e. student) can register, view his/her profile, see all quiz and quiz by categories. Normal user can attempt quiz, which could be submitted manually or when alloted time for quiz ends, can see quiz result and print the same.
