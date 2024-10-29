alert("გაითვალისწინე : prompt ში ჩაწერილი პასუხი აუცილებლად დიდი ასოთი უნდა იწყებოდეს და შეადგენდეს 1 სიტყვას")

let age = prompt("Enter your age:");
let movie = prompt(" Enter movie type (Regular or 3D:)");
let dayTime = prompt(" Enter time of day (Afternoon or Evening)");
let discount = prompt("Do you Have Discount ticket?");
let discoundParagraph = document.getElementById("discountParagraph")
let ticket = 0 ;

let result = document.getElementById("result")

function ticketPrice() {
  switch (true) {
    
    case age < 10:
      ticket = +5;
      break;
    case age > 10 && age < 65:
      ticket = +15;
      break;
    case age > 65 && age < 99:
      ticket = +10;
      break;
    default:
      console.log("ასაკში ჩაწერე რიცხვი");
      break;

  }
  switch (true) {

    case movie !== "3D" && movie !== "Regular":
      console.log("აირჩიე  Regular ან 3D");
      break;
    case movie === "3D":
      ticket += 5;
      break;

  }
  switch (true) {

    case dayTime !== "Afternoon" && dayTime !== "Evening":
      console.log("აირჩიე Afternoon ან Evening");
      break;
    case dayTime === "Evening":
      ticket += 5;
      break;

  }
  if (discount === "Yes") {
    let formula = ticket / 4;
    ticket -= formula;
  }
   else {
    discoundParagraph.textContent = "სამწუხაროდ ბილეთს ფასი არ დააკლდა"
  }
  result.textContent = `ბილეთის ფასია ${ticket} ლარი`
  // ticket = 0; ამაზე კითხვა მაქ და ჯობია რომ მოვალ მერე გკითხო თუ ნახე ეს კომენტარი ;
}

ticketPrice();
