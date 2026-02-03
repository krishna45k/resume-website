function showEmail() {
    document.getElementById("email").innerText = "sharmak26331@gmail.com";
    // Future animations or validations ke liye ready
    console.log("Portfolio Website Loaded Successfully");

}
const form = document.getElementById("contact-form");
const msg = document.getElementById("success-msg");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        msg.style.display = "block";
        form.reset();
    } else {
        alert("❌ Message not sent!");
    }
});
