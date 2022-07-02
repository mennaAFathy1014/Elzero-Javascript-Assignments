let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day1 = "Friday";
let day2 = "Saturday";
let day3 = "Sunday";
// Output => "No Appointments Available"

let day4 = "Monday";
let day5 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day6 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day7 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day8 = "World";
// Output => "Its Not A Valid Day"
///////////////////////////////////////////
//solotion 
//!!!!! you test it manually
day = day.trim().charAt(0).toUpperCase()+day.trim().slice(1);
switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}