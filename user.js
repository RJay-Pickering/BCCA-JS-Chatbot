const messages = document.querySelector(".message_history")
const input = document.querySelector(".user_input")
const submit = document.querySelector(".input_button")
const c_length = document.querySelector(".character_length")

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
        // Due to the size of a bubble, the user's message must be checked for length before submitted
        if (input.value.length > 90){
            alert("Message input must be 90 characters or less.")
        } else {
            var user_message = document.createElement("P")
            user_message.classList.add("user_message")
            var user_box = document.createElement("DIV")
            user_box.classList.add("user_box")
            user_message.innerHTML = input.value
            input.value = ""
            user_box.append(user_message)
            messages.append(user_box)
        }
    }
})