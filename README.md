# Starwars fleet visualizer

### Tech used
  - Front-end: React, React Apollo, Styled Components.
  - Back-end: Graphql, Mongo.
  
### Instructions
  ##### 1. Clone the repository  
  
  Open a terminal and type:  
  
  ```git clone git@github.com:bstenm/starwars_fleet_visualizer.git```  
  ```cd starwars_fleet_visualizer```  
  
  ##### 2. Launch the back end  
  
  Then type:  
  
  ```cd server```  
  ```docker-compose build```  
  ```docker-compose up```  
  
  Wait until you see "connected to database" somewhere in the logs and leave the terminal open  
  
  ##### 3. Launch the front end  

  Open a new terminal and type:  
  
  ```cd ../client```  
  ```docker-compose build```  
  ```docker-compose up```  
  
  Then open your browser and navigate to ```locahost:5000```
  
### Possible Imppovements  

1. Add the ability to search for spaceships according to a search term

2. Add a resilience number to each spaceship, that decreases each time it is hit until it is removed from the display
