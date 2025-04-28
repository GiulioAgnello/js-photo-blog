const postHolder = document.getElementById("postHolder");
const overlayEL = document.querySelector(".overlay");

// dpbbiamo prendere le info da api

apiLink = "https://lanciweb.github.io/demo/api/pictures/";

// modello col

// axios chiamata api

axios.get(apiLink).then((respons) => {
  const postArray = respons.data;
  console.log(postArray);
  for (let i = 0; i < postArray.length; i++) {
    currentPost = postArray[i];

    console.log(currentPost.url);
    const post = `<div class="col-12 col-sm-4 col-xl-3 ">
        <div class="postcard" id="post-card-${currentPost.id}">
          
          <div class="cardhead"><img src="${currentPost.url}" alt="${currentPost.title}" /></div>
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
  postcardEl.forEach((post) => {
    console.log(post);
    post.addEventListener("click", () => {
      const image = document.querySelector(`#${post.id} img`).src;
      console.log(image);
      let overlayImage = `<button type="button" class="botton btn btn-light mb-4">Close</button><br />
          <img src="${image}" alt="${post.title}" /> `;
      overlayEL.classList.remove("d-none");
      overlayEL.innerHTML += overlayImage;
      const bottonEl = document.querySelector(".botton");
      bottonEl.addEventListener("click", () => {
        overlayImage += ``;
        overlayEL.classList.add("d-none");
      });
    });
  });
});
