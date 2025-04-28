const postHolder = document.getElementById("postHolder");
const overlayEL = document.querySelector(".overlay");
const imgContaner = document.querySelector(".imagecontainer");
// dpbbiamo prendere le info da api

apiLink = "https://lanciweb.github.io/demo/api/pictures/";

// modello col

// axios chiamata api

axios.get(apiLink).then((respons) => {
  const postArray = respons.data;
  console.log(postArray);
  // creo tutti i post in base ai loro dati presi da axios
  for (let i = 0; i < postArray.length; i++) {
    currentPost = postArray[i];

    console.log(currentPost.url);
    const post = `<div class="col-12 col-sm-4 col-xl-3 ">
        <div class="postcard" id="post-card-${currentPost.id}">
          
          <div class="cardhead"><img src="${currentPost.url}" alt="${currentPost.title}" /></div>
          <img class="pin" src="./img/pin.svg" alt="">
          <div class="cardmain">
            <p>${currentPost.title}</p>
            <p>${currentPost.date}</p>
          </div>
        </div>
      </div>`;
    postHolder.innerHTML += post;
  }
  const postcardEl = document.querySelectorAll(".postcard");
  console.log(postcardEl);
  // identifico ogni card per essere cliccata
  postcardEl.forEach((post) => {
    console.log(post);

    // primo click
    post.addEventListener("click", (e) => {
      e.preventDefault();
      const image = document.querySelector(`#${post.id} img`).src;
      // identifico l'url di ogni card e lo identfico come costante
      let overlayImage = `<img src="${image}" alt="${post.title}" /> `;

      imgContaner.innerHTML += overlayImage;
      const bottonEl = document.querySelector(".botton");
      // Evento per la chiusura dell'overlay aperto
      bottonEl.addEventListener("click", (e) => {
        e.preventDefault();
        imgContaner.innerHTML = "";
        overlayEL.classList.add("d-none");
      });
      console.log(overlayImage);

      overlayEL.classList.remove("d-none");
    });
  });
});
