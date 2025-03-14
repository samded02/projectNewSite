let melumat = document.getElementById("MmCt")
let geydiyat = document.getElementById("GdCt")
let giris = document.getElementById("GrCt")

let melumat2 = document.getElementById("btn1")
let geydiyat2 = document.getElementById("btn2")
let giris2 = document.getElementById("btn3")

melumat2.addEventListener("click", () => {
    melumat.style.display = "block"
    geydiyat.style.display = "none"
    giris.style.display = "none"
})
geydiyat2.addEventListener("click", () => {
    melumat.style.display = "none"
    geydiyat.style.display = "flex"
    giris.style.display = "none"
})
giris2.addEventListener("click", () => {
    melumat.style.display = "none"
    geydiyat.style.display = "none"
    giris.style.display = "flex"
})




const name = document.getElementById("name");
const surname = document.getElementById("surname");
const mail = document.getElementById("mail")
const pass = document.getElementById("pass");
const submit = document.getElementById("submit");
const warning = document.getElementById("warning")

submit.addEventListener("click", () => {
    if (name.value.trim() === "" || 
    surname.value.trim() === "" || 
    pass.value.trim() === "" ||
    mail.value.trim() === ""
    ) {
        event.preventDefault()
        warning.style.display = "block"
        if (name.value.trim() === "") name.style.border = "1px solid red";
        else name.style.border = "";
        
        if (surname.value.trim() === "") surname.style.border = "1px solid red";
        else surname.style.border = "";
        
        if (mail.value.trim() === "") mail.style.border = "1px solid red";
        else mail.style.border = "";
        
        if (pass.value.trim() === "") pass.style.border = "1px solid red";
        else pass.style.border = "";
    }
});


const mail2 = document.getElementById("mail2")
const pass2 = document.getElementById("pass2");
const submit2 = document.getElementById("submit2");
const warning2 = document.getElementById("warning2")

submit2.addEventListener("click", () => {
    if (
        mail2.value.trim() === "" ||
        pass2.value.trim() === ""
    ) {
        event.preventDefault()
        warning2.style.display = "block"
        if (mail2.value.trim() === "") mail2.style.border = "1px solid red";
        else mail.style.border = "";

        if (pass2.value.trim() === "") pass2.style.border = "1px solid red";
        else pass.style.border = "";
    }
});