let investor = localStorage.getItem("investor");
let investorLogo = localStorage.getItem("investorLogo");
let msg = localStorage.getItem("message");

let ownChat = document.querySelector(".own-chat");
let ownChatImg = document.querySelector(".own-chat img");
let ownChatProfile = document.querySelector(".own-chat #names");
let ownChatMsg = document.querySelector(".own-chat .msg");

ownChatImg.src = localStorage.getItem("investorLogo");
ownChatProfile.innerHTML = localStorage.getItem("investor");
let chat = document.querySelector(".chat");
chat.innerHTML += `
<li>
<p><img src="${investorLogo}" alt="ll"></p>
<p class="invest-name">${investor}</p>
<p class="message">
    <i class="fa fa-message"></i> <br>
    ${msg}
</p>
</li>
`

let lis = chat.querySelectorAll("li");
lis.forEach(e => {
    e.onclick = () => {
        ownChat.style.display = "grid";
        ownChatImg.src = e.querySelector("img").src;
        ownChatProfile.innerHTML = e.querySelector(".invest-name").innerHTML;
        ownChatMsg.innerHTML = e.querySelector(".message").innerText;

    }
})
let rem = ownChat.querySelectorAll(".fa-arrow-left");

rem.forEach(e => {
    e.onclick = () => {
        ownChat.style.display = "none"
    }
})
let ownChatSend = document.querySelector(".own-chat .fa-send");
let ownChatInput = document.querySelector(".own-chat #msg");
let ownChatDash = document.querySelector(".own-chat .dash");
ownChatSend.onclick = () => {
    localStorage.setItem("message", ownChatInput.value);
    ownChatDash.innerHTML += `<p class="msg">${ownChatInput.value}</p>`;
    ownChatInput.value = " "
}