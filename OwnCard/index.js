let container = document.getElementById("x");

function createCard() {

    let name = document.getElementById("nameInput").value;
    let profession = document.getElementById("professionInput").value;
    let phone = document.getElementById("phoneInput").value;
    let email = document.getElementById("emailInput").value;
    let github = document.getElementById("githubInput").value;
    let imageFile = document.getElementById("imageInput").files[0];

    let reader = new FileReader();
    reader.onload = function () {

         let card = document.createElement("div");
        card.id = "sdiv";

        card.innerHTML = `
            <img id="img1" src="${reader.result}">
            <h2>${name}</h2>
            <p>${profession}</p>
            <p>📞 ${phone}</p>
            <p>📧 ${email}</p>
            <p>
                GitHub: <a href="${github}" target="_blank">Visit</a>
            </p>

            <button class="downloadBtn" onclick="downloadCard(this)">
                Download Card
            </button>
        `;

        container.appendChild(card);
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }

}

function downloadCard(button) {

    
    let card = button.parentElement;

    
    html2canvas(card).then(canvas => {

        let link = document.createElement("a");
        link.download = "profile-card.png";
        link.href = canvas.toDataURL();

        link.click();
    });
}
