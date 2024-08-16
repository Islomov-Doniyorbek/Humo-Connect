function header() {
    let header = document.querySelector("header");
    document.addEventListener("scroll", () => {
        header.classList.toggle('dark', window.scrollY > 0)
    })
}
function points() {
    let point = document.querySelectorAll("#point");
    let s = [
        +0.3,+0.9,+0.1,-0.25,-0.2,+0.6,+0.7,-0.13,-0.88,+1.3
    ]
    for (let i = 0; i < point.length; i++) {
        let r = Math.floor(Math.random() * point.length);
        if (s[r] > 0) {
            point[i].style.color = "green";
        } else {
            point[i].style.color = "red";
            
        }
        point[i].innerText = ` | ${s[r]} mlrd $`;
        
    }

}
function form() {
    let reg = document.querySelector(".reg")
    let login = document.querySelector(".login")
    let logBtn = document.querySelector("#log")
    let regBtn = document.querySelector("#reg")

    logBtn.onclick = () => {
        login.classList.toggle("flex")
        login.classList.remove("none")
        reg.classList.toggle("none")
        reg.classList.toggle("flex")
    }
    regBtn.onclick = () => {
        reg.classList.toggle("flex")
        reg.classList.remove("none")
        login.classList.toggle("none")
        login.classList.remove("flex")
    }
}
function logBtn() {
    let getStarted = document.querySelector(".getStarted");
    let forma = document.querySelector(".forma");
    let profil = document.querySelector(".profile");
    let profileName = document.querySelector("span.name");
    let ism_Input_Login = document.querySelector(".login #name");
    let ism_Input_Reg = document.querySelector(".reg #name");
    let login = document.querySelector(".login");
    let reg = document.querySelector(".reg");
    let i = document.querySelectorAll(".forma .fa-remove");

    i.forEach(e => {
        e.onclick = () => {
            forma.style.display = "none"
        }
    })
    getStarted.addEventListener("click", () => {
        forma.style.display = "block"
    })

    login.addEventListener("submit", () => {
        forma.style.display = "none";
        profil.style.display = "block";
        profileName.innerText = ism_Input_Login.value;
        getStarted.style.display = "none"
    })
    reg.addEventListener("submit", () => {
        profil.style.display = "block";
        forma.style.display = "none";
        profileName.innerText = ism_Input_Reg.value;
        getStarted.style.display = "none"
    })
    


}
function aside() {
    let aside = document.querySelector("aside");
    let navicon = document.querySelector(".navigation .fa-navicon");
    let remove = document.querySelector("aside .fa-remove");
    navicon.onclick = () => {
        aside.classList.toggle("scr")
        console.log(144);
    }
    remove.onclick = () => {
        aside.classList.remove("scr")
        console.log(144);
    }

}
function invests() {
    let investorlar = document.querySelector(".investors");

    let imgs = [
        "/img/tesla.png", "/img/humo.jpg", "/img/chevron.png", "/img/toshiba.png", "/img/amazon.png"
    ];
    let companies = [
        "Tesla", "Humo IT", "Chevron", "Toshiba", "Amazon"
    ]
    let investitsiya = [];
    for (let i = 0; i < imgs.length; i++) {
        let r = Math.floor(Math.random() * (20 - 7.5 + 1) + 7.5);
        investitsiya.push(r);
    }
    investitsiya.sort(function(a, b) {
        return b-a ;
    });

    for (let i = 0; i < imgs.length; i++) {
        investorlar.innerHTML+= `
        <div class="line">
            <p><img src="${imgs[i]}" alt="img"></p>
            <p class="invest-name">${companies[i]}</p>
            <p class="invest-total">${investitsiya[i]} mlrd. $</p>
            <p class="invest-connect"> <i class="fa fa-link"></i> </p>
        </div>
        `
    };
}
header()
points()
form()
logBtn()
aside()
invests()

let connects = document.querySelectorAll("#connect");
connects.forEach(e => {
    e.onclick = () => {
        let parent = e.parentElement
        let investor = parent.querySelector(".title").innerText;
        let investorLogo = parent.querySelector("img").src;

        console.log(parent);
        console.log(investorLogo);


        localStorage.setItem("investor", investor)
        localStorage.setItem("investorLogo", investorLogo);
        
        

        let ownChat = document.querySelector(".own-chat");
        let ownChatImg = document.querySelector(".own-chat img");
        let ownChatProfile = document.querySelector(".own-chat #names");
        
        ownChat.style.display = "grid";
        ownChatImg.src = localStorage.getItem("investorLogo");
        ownChatProfile.innerHTML = localStorage.getItem("investor");
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
// localStorage.clear()
let rem = document.querySelector(".own-chat").querySelectorAll(".fa-arrow-left");

rem.forEach(e => {
    e.onclick = () => {
        document.querySelector(".own-chat").style.display = "none"
    }
})