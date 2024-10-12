document.title = 'Computer Science Student Profile Upload'

window.onload = () => {
    alert("Selamat datang! Silakan isi form di bawah ini.")
}

const currentDiv = document.getElementsByClassName("root")[0]

// Membuat elemen div baru untuk judul
const newDiv = document.createElement("div")
newDiv.classList.add("main-title")
// Menambahkan teks ke dalam div baru
const h1 = document.createElement("h1")
h1.classList.add("header")
h1.innerText = "Tugas-2 Praktikum Pemrograman Web"
newDiv.append(h1)
currentDiv.append(newDiv)

// Membuat elemen div baru untuk form
const secDiv = document.createElement("div")
secDiv.classList.add("main-content")
currentDiv.append(secDiv)

// Membuat form
const form = document.createElement("form")

// Membuat div baru untuk input user
const divForm = document.createElement("div")

// Input Username
const div1 = document.createElement("div")
const labelUser = document.createElement("label")
labelUser.setAttribute("for", "usernameInput")
labelUser.textContent = "Username"
const inputUser = document.createElement("input")
inputUser.setAttribute("type", "text")
inputUser.setAttribute("id", "usernameInput")
inputUser.setAttribute("placeholder", "Khairunnisa Siregar")
inputUser.setAttribute("required", "")
div1.append(labelUser, inputUser)
divForm.append(div1)

// Input NIM
const div2 = document.createElement("div")
const labelNIM = document.createElement("label")
labelNIM.setAttribute("for", "nimInput")
labelNIM.textContent = "NIM"
const inputNIM = document.createElement("input")
inputNIM.setAttribute("type", "text")
inputNIM.setAttribute("id", "nimInput")
inputNIM.setAttribute("placeholder", "231401118")
inputNIM.setAttribute("required", "")
div2.append(labelNIM, inputNIM)
divForm.append(div2)
            
// Input KOM
const div3 = document.createElement("div")
const labelKOM = document.createElement("label")
labelKOM.setAttribute("for", "komInput")
labelKOM.textContent = "KOM"
const inputKOM = document.createElement("input")
inputKOM.setAttribute("type", "text")
inputKOM.setAttribute("id", "komInput")
inputKOM.setAttribute("placeholder", "A")
inputKOM.setAttribute("required", "")
div3.append(labelKOM, inputKOM)
divForm.append(div3)

// Input Photo
const div4 = document.createElement("div")
const labelPhoto = document.createElement("label")
labelPhoto.setAttribute("for", "photoInput")
labelPhoto.textContent = "Upload Photo"
const inputPhoto = document.createElement("input")
inputPhoto.setAttribute("type", "file")
inputPhoto.setAttribute("id", "photoInput")
inputPhoto.setAttribute("accept", "image/png, image/jpeg")
inputPhoto.setAttribute("required", "")
div4.append(labelPhoto, inputPhoto)
divForm.append(div4)

// Tombol Submit
const submit = document.createElement("input")
submit.setAttribute("type", "submit")
divForm.append(submit)

form.append(divForm)
secDiv.append(form)

const thirDiv = document.createElement("div");
thirDiv.classList.add("display-container");
thirDiv.style.display = "none"; // Awalnya disembunyikan
secDiv.append(thirDiv);

// Even listener untuk form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Mengambil nilai dari input form
    const username = usernameInput.value;
    const nim = nimInput.value;
    const kom = komInput.value;
    const photo = photoInput.files[0];

    // Membuat div baru untuk card user
    const card = document.createElement("div");
    card.classList.add("card");

    // Membuat img tag untuk foto
    const img = document.createElement("img");
    img.src = URL.createObjectURL(photo);
    img.alt = "User Photo";

    // Menampilkan data input user
    const usernameDisplay = document.createElement("p");
    usernameDisplay.innerText = `Username: ${username}`;

    const nimDisplay = document.createElement("p");
    nimDisplay.innerText = `NIM: ${nim}`;

    const komDisplay = document.createElement("p");
    komDisplay.innerText = `KOM: ${kom}`;

    // Memasukkan semua elemen ke dalam card
    card.append(img, usernameDisplay, nimDisplay, komDisplay);

    // Menghapus konten sebelumnya dari display-container, lalu meanmbahkan card baru
    thirDiv.innerHTML = "";
    thirDiv.append(card);

    // Menampilkan card dengan mengganti display menjadi block
    thirDiv.style.display = "block";
    form.style.width = "370px";

    // pesan alert
    alert("Form berhasil disubmit!");
})