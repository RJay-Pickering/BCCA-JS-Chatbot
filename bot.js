//--------------------------------------------------------------------------------

const prompts = ["How much does it cost?", "cost", "tuition", "price", "rate"]
const answer = "Base Camp is free!"
const substitute = "I'm sorry, I didn't catch that!"

//--------------------------------------------------------------------------------

window.addEventListener("load", () => {
    var bot_message = document.createElement("P")
    bot_message.classList.add("bot_message")
    var bot_box = document.createElement("DIV")
    bot_box.classList.add("bot_box")
    bot_message.innerHTML = "Typing..."
    bot_box.append(bot_message)
    messages.append(bot_box)
    setTimeout(() => {
        bot_message.innerHTML = "Welcome! I'm Everest, the prototype Base Camp Coding Academy chatbot created by RJay Pickering and Randy Trullet!"
    }, 3500)
})


submit.addEventListener("click", () => {
    var bot_message = document.createElement("P")
    bot_message.classList.add("bot_message")
    var bot_box = document.createElement("DIV")
    bot_box.classList.add("bot_box")
    bot_message.innerHTML = input.value
    input.value = ""
    bot_box.append(bot_message)
    messages.append(bot_box)
})