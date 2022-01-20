let firstName = "santita";

let lastName = "humphries";

let career = "Jr. Web Developer";

let description = "I like solving problems.";


function titleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].charAt(1).toUpperCase() +  words[i].charAt(2).toUpperCase()  + words[i].charAt(3).toUpperCase() + words[i].charAt(4).toUpperCase() + words[i].charAt(5).toUpperCase() + words[i].charAt(6).toUpperCase();     
    }
    return words.join(' '); 
  }

  function titleCaseTwo(str) {
    var newWords = str.split(' ');
    for (var j = 0; j < newWords.length; j++) {
    newWords[j] = newWords[j].charAt(0).toUpperCase() + newWords[j].charAt(1).toUpperCase() + newWords[j].charAt(2).toUpperCase() + newWords[j].charAt(3).toUpperCase() + newWords[j].charAt(4).toUpperCase() + newWords[j].charAt(5).toUpperCase() + newWords[j].charAt(6).toUpperCase() + newWords[j].charAt(7).toUpperCase() + newWords[j].charAt(8).toUpperCase();
    }
    return newWords.join(' '); 
  }
  
  
 console.log("Name: " + titleCase(firstName) + " " + titleCaseTwo(lastName));

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
