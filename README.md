<h1>Application Succesfully Deployed: https://quizomania-23b0a.web.app/</h1>
<hr/>

# QUIZ-O-MANIA_THE-QUIZ-CONDUCTING-PORTAL

The demonstration video for this project is here:- https://drive.google.com/file/d/1ShlnGv1n6X57-45u1x3_0noM9kGZ7P-Q/view?usp=sharing

This project will be deployed soon....

DESCRIPTION:-

This is a full-stack application developed using Java and Spring Boot along with hibernate for server side development and Angular for client side development. MYSQL database is used to store the data and the same is retrieved and updated as per requests sent from the frontend. The following tables are added to this database:-

a) User table to store user details <br/>
b) Role table to store possible roles of users like admin user and student(the test taker) <br/>
c) User role table, that explains which user has what roles <br/>
d)Quiz table to store all quiz <br/>
e)Catgory table to store details of categories <br/>
f) Questions table to store questions of all quiz <br/>
g) Results table to store results of students who attempted the quiz<br/>

Various REST api's are developed leveraging Java, Spring Boot and Hibernate, which are consumed via client side as various GET, POST, PATCH, DELETE requests.<br/>

Spring Security is incorporated throughout the application and user passwords are encrypted using Bcrypt Password Encoder and Jsonwebtoken generates the token to let only the genuine user login.<br/>

Angular is used for client side development. The UI is made appealing using various Angular Material components, such as mat-raised button, mat-form-field, mat-slide-toggle etc.<br/>

The admin users can view his/her profile, can add new categories, quiz, new questions for a quiz, update previous quiz and see various details regarding attempts of quiz made by test-takers. Ckeditor is integrated with the frontend to provide manual styling for the questions of quiz.<br/>

The normal user(i.e. student) can register, view his/her profile, see all quiz and quiz by categories. Normal user can attempt quiz, which could be submitted manually or when alloted time for quiz ends, can see quiz result and print the same.<br/>
