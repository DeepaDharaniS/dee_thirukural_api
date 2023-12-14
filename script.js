const apiUrl = "https://getthirukkural.appspot.com/api/3.0/kural/";
const resultContainer = document.getElementById("result");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
    const kuralNumber = document.getElementById("kural-number").value;
    if (kuralNumber > 1330) {
        resultContainer.innerHTML = "Enter the number between 1-1330.";
    }
    else {

        fetch(`${apiUrl}${kuralNumber}?appid=vu5hcp76s5thi&format=json`)

            .then((response) => response.json())
            .then(data => {
                result.innerHTML = `
                <div class="result">
                    <h3>Kural ${data.number}</h3>
                    <p>பால்: ${data.paal}</p>
                    <p>இயல்: ${data.iyal}</p>
                    <br>
                    <div class="line">
                    <p>${data.line1}</p>
                    <p>${data.line2}</p>
                    <div>
                    <br>
                    <p>${data.translation}</p>

                </div>
            `;

            })

            .catch(error => {
                result.innerHTML = `<p class="error">Please enter a valid number...</p>`;
            });
    }

    document.getElementById("kural-number").value = "";
});

