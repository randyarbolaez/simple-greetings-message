let person = prompt('Please enter your name');

let time = new Date().getHours();
let day = new Date().getDay();
console.log(day);
console.log(time);

function determineDayOfTheWeek() {
  switch (day) {
    case 0:
      return 'Sunday is a day of rest';
      break;
    case 1:
      return 'Mondays are the potholes in the road of life.';
      break;
    case 2:
      return "Tuesday isn't so bad...It's a sign that you somehow survived Monday.";
      break;
    case 3:
      return 'Wednesdays are like Mondays in the middle of the week!';
      break;
    case 4:
      return "Thursdays are just wannabes. They wannabe Friday but they're not!  ";
      break;
    case 5:
      return 'Friday. The golden child of the weekdays. The superhero of the workweek. The welcome wagon to the weekend. The famous F word we thank God for every week.   ';
      break;
    case 6:
      return 'Saturday is what gives us a weekend of enjoyment.';
      break;
    default:
      break;
  }
}

function determineIfTimeIsMorningAfternoonEvening() {
  if (time < 5 || time < 12) {
    return `Good morning`;
  } else if (time < 12 || time < 17) {
    return `Good afternoon`;
  } else {
    return `Good evening`;
    r;
  }
}

function greetingMessage() {
  let h1 = document.getElementById('greeting-message');
  let reminder = document.getElementById('greeting-reminder');
  h1.innerHTML = `${determineIfTimeIsMorningAfternoonEvening()}, ${person}`;
  reminder.innerHTML = `REMINDER: ${determineDayOfTheWeek()}`;
}

greetingMessage();
