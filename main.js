const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function validateForm() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = false;

    var preferences = document.getElementsByName("preferences[]");
        var isChecked = false;

        for (var i = 0; i < preferences.length; i++) {
            if (preferences[i].checked) {
                isChecked = true;
                break;
            }
        }
        if (!isChecked) {
            document.getElementById("preferencesError").innerHTML = "User must agree to receive newsletter.";
            return false;
        }

    // Validasi Nama
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Nama harus diisi";
        error = true;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Validasi Message
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message harus diisi";
        error = true;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }

    // Validasi Email
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email harus diisi";
        error = true;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "Format email tidak valid";
        error = true;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Validasi Nomor Telepon
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Nomor telepon harus diisi";
        error = true;
    } else if (!validatePhone(phone)) {
        document.getElementById("phoneError").innerHTML = "Format nomor telepon tidak valid";
        error = true;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    if (error) {
        return false; // Menghentikan pengiriman form jika ada kesalahan validasi
    }
}

function validateEmail(email) {
    // Regex untuk validasi format email
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    // Regex untuk validasi format nomor telepon (hanya angka dan panjang minimal 10 digit)
    var re = /^\d{10,}$/;
    return re.test(phone);
}