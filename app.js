let name = "Santita Humphries";

let career = "Jr. Web Developer";

let description = "I like solving problems.";


 console.log("Name: " + name.toUpperCase()) 
  

 console.log("Career: " + career);

 console.log("Description: " + description);

 console.log("                 ");
 console.log("                ");

 console.log("My Interests:");

 console.log("* Watching Movies");
 console.log("* Problem Solving");
 console.log("* Long walks in the park");
 console.log("* Traveling");

 function displayPosition(companyName, jobTitle, jobDescription) {
     console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
 }

 console.log("               ")
 console.log("              ")

 console.log("My Previous Experience:");

 displayPosition( "LabCorp of America", "Techno Trainee", "Provide a gross description for irreplacible human specimen.");


 displayPosition("Childrens' of Birmingham", "Supprt Services Specialist", "Facilitate game activities.");

 function displaySkill(skillName, isSkillCool) {
   console.log("* " + skillName);
   if (isSkillCool == true); {
     console.log("* BAM: "  + skillName);
   }
 }

 console.log(" ");
 console.log("  ");

 console.log("My Skills:");

 displaySkill("Hardworking", false);
 displaySkill("Swift", true);
 displaySkill("Calculus", true);
 displaySkill("Problem Solving", false);
 displaySkill("Fast Learner", false);
