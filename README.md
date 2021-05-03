#TruMedia App

This project is intended to explore prototyping and front end development in a sports analytics context.
The goal of the project is to create an interactive tool that helps the user understand an NFL quarterback's performance over time.
In this application, I am utilizing the TruMedia Networks API to capture performance data pertaining to NFL athletes and I am using React to display that data on the front end.

**Feature List**

- Athletes
  1. A user can view all of the athletes descriptions.
  2. A user can view each athletes data performance.
  
  **React Components**
   - Athletes
   - Navigation
   
   **Frontend Routes**
   
   - "/" 


   This is the link to the home landing page. It displays a chart of all of the players, their player Id, and the team they play for.
   
   - "/player/:id"


   This is the link to the single player page. It displays all of the information about that player as well as their performance data.
   
   **API Routes**
   
   - "/api/athletes"


   Fetches informationg pertaining to all of the NFL players
   
   - "/api/athletes/:id"


   Fetches information pertaining to the single athlete with the playerId that matches the req.params.id
   
   **Redux Store**
   - Players
   - Session
