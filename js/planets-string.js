(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log("Convert planetsString to an array")
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     */
    console.log("Create a string with <br> tags between each planet")
    let planets = planetsArray.join("<br>");
    console.log(planets);

     /**
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     console.log("display your planets in an unordered list")
     let planetsNewNew = "<ul><li>" +
         planetsArray.join("</li><li>") +
         "</li></ul>";
    console.log(planetsNewNew);





})();
