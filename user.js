//--------------------------------------------------------------------------------
// Prompts and responses

const hello_prompt = [
  "hello",
  "hi",
  "howdy",
  "greetings",
  "what's up",
  "what up",
  "hey",
  "hoi",
  "good day",
  "good morning",
  "good afternoon",
  "good evening",
  "hiya",
];
const hello_response = [
  "Hello!",
  "Heya!",
  "Hello, please feel free to ask me any questions!",
];

const i_have_a_question_prompt = ["i have a question"];
const i_have_a_question_response = "And, I have a answer!";

const tuition_prompt = [
  "how much does base camp cost?",
  "cost",
  "tuition",
  "price",
  "rate",
  "free",
];
const tuition_response = "Base Camp is free!";

const when_apply_prompt = ["applications open", "deadline"];
const when_apply_response = "Applications are open until February 28!";

const how_apply_prompt = [
  "how to apply",
  "where do i go",
  "how do you apply",
  "how can i apply",
  "how do i apply",
];
const how_apply_response =
  "A high school senior must be nominated by an unrelated adult with insight into the student's aptitude and motivation.";

const coursework_prompt = [
  "material",
  "coursework",
  "learn",
  "teach",
  "taught",
  "curriculum",
];
const coursework_response =
  "Students will be taught the fundamentals in programming logic, and will be exposed to front-end and back-end work, as well as being trained in workplace professionalism.";

const benefits_prompt = ["benefit", "perk"];
const benefits_response =
  "Base Camp students will be given gas cards to pay for their travels, and will gain accredited college hours at the end of the program.";

const schedule_prompt = [
  "normal day",
  "schedule",
  "daily",
  "routine",
  "day at base camp",
];
const schedule_response =
  "All students are required to sign in by 8:15. Throughout the day, the students are allowed to take breaks as needed. Along with this, students are given an hour every day for lunch. Class ends at 4:30.";

const where_prompt = ["where", "located", "far", "location"];
const where_response =
  "Base Camp is located at 802 Central Street Water Valley, MS!";

const what_prompt = ["what is base camp", "what is basecamp", "whats base"];
const what_response =
  "Base Camp is a year-long hands-on coding program for recent high school graduates.";

const director_prompt = ["director", "directs", "in charge"];
const director_response = "The Director of Base Camp is Sean Ennis.";

const trustees_prompt = ["board of", "trustees", "board"];
const trustees_response =
  "The board of trustees is made up of Kagan Coughlin, Glen Evans, John Marsalis, Sage Nichols, Bethany Cooper, Carla Lewis, and Brad Carpenter.";

const founded_prompt = ["founded", "made", "founder"];
const founded_response =
  "Base Camp was founded in 2015 by Kagan Coughlin and Glen Evans.";

const substitute =
  "I'm sorry, I didn't catch that! Please rephrase the question. You can also email the director at seanennis@basecampcodingacademy.org";

//--------------------------------------------------------------------------------

const messages = document.querySelector(".message_history");
const input = document.querySelector(".user_input");
const c_length = document.querySelector(".character_length");

// The function that handles the logic for searching through prompt variables
function containsSubstring(str, substrings) {
  for (var i = 0; i != substrings.length; i++) {
    var substring = substrings[i];
    if (str.indexOf(substring) != -1) {
      return substring;
    }
  }
  return null;
}

// Creates the bot's first message upon the window loading
window.addEventListener("load", () => {
  var bot_message = document.createElement("P");
  bot_message.classList.add("bot_message");
  var bot_box = document.createElement("DIV");
  bot_box.classList.add("bot_box");
  bot_message.innerHTML = "Typing...";
  bot_box.append(bot_message);
  messages.append(bot_box);
  // Gives the illusion of the bot "thinking" of a response
  setTimeout(() => {
    bot_message.innerHTML =
      "Welcome! I'm Everest, the prototype Base Camp Coding Academy chatbot created by RJay Pickering and Randy Trullet!";
  }, 3500);
});

// // A viewable counter that allows users to check the character limit
// input.addEventListener("input", () => {
//   characters = input.value.length;
//   c_length.innerHTML = `${characters}/90`;
//   if (characters > 90) {
//     c_length.style.color = "red";
//   } else {
//     c_length.style.color = "black";
//   }
// });

// Creates a text bubble for user's messages
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // c_length.innerText = "0/90";
    if (input.value != "") {
      if (/^\s*$/.test(input)) {
        input.value = "";
      }
      // Due to the size of a bubble, the user's message must be checked for length before submitted, an alert will trigger if users attempt to exceed the character limit
      // if (input.value.length > 90) {
      //   alert("Message input must be 90 characters or less.");
      // } else {
      // User Messages
      var user_message = document.createElement("P");
      user_message.classList.add("user_message");
      var user_box = document.createElement("DIV");
      user_box.classList.add("user_box");
      user_message.innerHTML = input.value;
      user_box.append(user_message);
      messages.append(user_box);
      // Bot Messages
      var bot_message = document.createElement("P");
      bot_message.classList.add("bot_message");
      var bot_box = document.createElement("div");
      bot_box.classList.add("bot_box");
      bot_message.innerHTML = "Typing...";
      bot_box.append(bot_message);
      messages.append(bot_box);
      // Searches for keywords within the prompt variables
      if (containsSubstring(input.value.toLowerCase(), tuition_prompt)) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = tuition_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), when_apply_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = when_apply_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), how_apply_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = how_apply_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), coursework_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = coursework_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), benefits_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = benefits_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), schedule_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = schedule_response;
        }, 3500);
      } else if (containsSubstring(input.value.toLowerCase(), where_prompt)) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = where_response;
        }, 3500);
      } else if (containsSubstring(input.value.toLowerCase(), what_prompt)) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = what_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), director_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = director_response;
        }, 3500);
      } else if (
        containsSubstring(input.value.toLowerCase(), trustees_prompt)
      ) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = trustees_response;
        }, 3500);
      } else if (containsSubstring(input.value.toLowerCase(), founded_prompt)) {
        console.log("Match found!");
        setTimeout(() => {
          bot_message.innerHTML = founded_response;
        }, 3500);
      } else {
        setTimeout(() => {
          bot_message.innerHTML = substitute;
        }, 3500);
      }
      input.value = "";
    }
  }
});
// });
