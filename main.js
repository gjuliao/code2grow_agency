
  function getSpeakers() {
    const speakers = document.getElementById("all_speakers");
    let output = "";
    fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(a => {
            output += `
            <div class="card_speaker guy_${a.id}">
                      <img src="${a.img}" alt="Main speaker">
                    <div class="speaker_details">
                        <h6>${a.name}</h6>
                        <p class="speaker_profile">${a.profile}</p>
                        <hr>
                        <p>${a.experience}</p>
                    </div>
            </div>
            `;
            speakers.innerHTML = output;
        })
    })
  }


  window.addEventListener('load', getSpeakers());


  function showUsers() {
    console.log(123);
    document.getElementsByClassName("guy_2").style.display = "block";
    document.getElementsByClassName("guy_3").style.display = "block";
    document.getElementsByClassName("guy_4").style.display = "block";
    document.getElementsByClassName("guy_5").style.display = "block";
}

function hideUsers() {
    document.getElementsByClassName("guy_2").style.display = "none";
    document.getElementsByClassName("guy_3").style.display = "none";
    document.getElementsByClassName("guy_4").style.display = "none";
    document.getElementsByClassName("guy_5").style.display = "none";
  }