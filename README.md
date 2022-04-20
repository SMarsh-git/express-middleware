# express-middleware-REST-API

// ALL CRUD OPERATIONS ARE NOT YET COVERED //

Middleware/REST API was created using express.js. This middleware uses the follow modules/dependencies:
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.2.7"

This middleware is essentailly a REST API with a DB layer, token auth, and password hashing.

Tested using insomnia:

Registering

  POST http://localhost:5001/user
  
  JSON body:
  {
  	"username": "SamM",
  	"email": "samM@email.com",
  	"password": "test123"
  }
  
Login 

  POST http://localhost:5001/login

  JSON body:
  {
	"username": "SamM",
	"password": "test123"
}

Accesing User

  GET http://localhost:5001/user

  Header - 
  name: Authorization 
  value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYwMTMxZGVmNWVjYTcwZDRiZWZjZDgiLCJpYXQiOjE2NTA0NjM1MTd9.XIFuMy6TjIfKHaLsXp_n5yAIQUWHXdeaHfdoUqJ7_L4
  
 
Deleting User
 
 DELETE http://localhost:5001/user/SamM
 
 Header - 
  name: Authorization 
  value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYwMTMxZGVmNWVjYTcwZDRiZWZjZDgiLCJpYXQiOjE2NTA0NjM1MTd9.XIFuMy6TjIfKHaLsXp_n5yAIQUWHXdeaHfdoUqJ7_L4
  
  
 

  
  
