//--------------------------------------------------------------------------------
// Prompts and responses

const tuition_prompt = ["how much does it cost?", "cost", "tuition", "price", "rate"]
const tuition_answer = "Base Camp is free!"

const when_apply_prompt = ["when", "applications open"]
const when_apply_answer = "Applications are open until (I'm not sure when)"

const how_apply_prompt = ["how", "where do i go"]
const how_apply_answer = "A high school senior must be nominated by an unrelated adult with insight into the student's aptitude and motivation."

const coursework_prompt = ["material", "coursework", "learn", "teach", "taught", "curriculum"]
const coursework_answer = "Students will be taught the fundementals in programming logic, and will be exposed to front-end and back-end work, as well as being trained in workplace professionalism."

const benefits_prompt = ["benefit", "perk", ]
const benefits_answer = "Base Camp students will be given gas cards to pay for their travels, and will gain accredited college hours at the end of the program."

const schedule_prompt = ["day", "schedule", "daily", "routine"]
const schedule_answer = "All students are required to sign in by 8:15. Throughout the day, the students are allowed to take breaks as needed. Along with this, students are given an hour every day for lunch. Class ends at 4:30."

const substitute = "I'm sorry, I didn't catch that! Please rephrase the question. You can also email the director at seanennis@basecampcodingacademy.org"

//--------------------------------------------------------------------------------

const messages = document.querySelector(".message_history")
const input = document.querySelector(".user_input")
const submit = document.querySelector(".input_button")
const c_length = document.querySelector(".character_length")

// The function that handles the logic for searching through prompt variables
function containsSubstring(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return substring;
       }
    }
    return null; 
}

// Creates the bot's first message upon the window loading
window.addEventListener("load", () => {
    var bot_message = document.createElement("P")
    bot_message.classList.add("bot_message")
    var bot_box = document.createElement("DIV")
    bot_box.classList.add("bot_box")
    bot_message.innerHTML = "Typing..."
    bot_box.append(bot_message)
    messages.append(bot_box)
    // Gives the illusion of the bot "thinking" of a response
    setTimeout(() => {
        bot_message.innerHTML = "Welcome! I'm Everest, the prototype Base Camp Coding Academy chatbot created by RJay Pickering and Randy Trullet!"
    }, 3500)
})

// A viewable counter that allows users to check the character limit
input.addEventListener("input", () => {
    characters = input.value.length
    c_length.innerHTML = `${characters}/90`
    if(characters > 90){
        c_length.style.color = "red"
    }
    else{
        c_length.style.color = "black"
    }
})


// Creates a text bubble for user's messages
submit.addEventListener("click", () => {
    c_length.innerText = "0/90"
    if(input.value != ""){
        if (/^\s*$/.test(input)){
            input.value = ""
         }
        // Due to the size of a bubble, the user's message must be checked for length before submitted, an alert will trigger if users attempt to excede the character limit
        if (input.value.length > 90){
            alert("Message input must be 90 characters or less.")
        } else {
            // User Messages
            var user_message = document.createElement("P")
            user_message.classList.add("user_message")
            var user_box = document.createElement("DIV")
            user_box.classList.add("user_box")
            user_message.innerHTML = input.value
            user_box.append(user_message)
            messages.append(user_box)
            // Bot Messages
            var bot_message = document.createElement("P")
            bot_message.classList.add("bot_message")
            var bot_box = document.createElement("DIV")
            bot_box.classList.add("bot_box")
            bot_message.innerHTML = "Typing..."
            bot_box.append(bot_message)
            messages.append(bot_box)
            // Searches for keywords within the prompt variables
            if(containsSubstring(input.value.toLowerCase(), tuition_prompt)){
                console.log("Match found!")
                setTimeout(() => {
                    bot_message.innerHTML = tuition_answer
                }, 3500)
            } 
            else if (containsSubstring(input.value.toLowerCase(), when_apply_prompt)) {
                console.log("Match found!")
                setTimeout(() => {
                    bot_message.innerHTML = when_apply_answer
                }, 3500)
            }
            else if (containsSubstring(input.value.toLowerCase(), how_apply_prompt)) {
                console.log("Match found!")
                setTimeout(() => {
                    bot_message.innerHTML = how_apply_answer
                }, 3500)
            }
            else if (containsSubstring(input.value.toLowerCase(), coursework_prompt)) {
                console.log("Match found!")
                setTimeout(() => {
                    bot_message.innerHTML = coursework_answer
                }, 3500)
            }
            else if (containsSubstring(input.value.toLowerCase(), benefits_prompt)) {
                console.log("Match found!")
                setTimeout(() => {
                    bot_message.innerHTML = benefits_answer
                }, 3500)
            }
            else if (containsSubstring(input.value.toLowerCase(), schedule_prompt)) {
                console.log("Match found!")
                setTimeout(() => {
                    bot_message.innerHTML = schedule_answer
                }, 3500)
            }
            else {
                setTimeout(() => {
                    bot_message.innerHTML = substitute
                }, 3500)
            }
        }
    }
    input.value = ""
})
