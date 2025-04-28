const postHolder = document.getElementById("postHolder");
const overlayEL = document.querySelector(".overlay");

// dpbbiamo prendere le info da api

apiLink = "https://lanciweb.github.io/demo/api/pictures/";

// modello col

// axios chiamata api

axios.get(apiLink).then((respons) => {
  const postArray = respons.data;
  console.log(postArray[0]);
  for (let i = 0; i < postArray.length; i++) {
    currentPost = postArray[i];

    console.log(currentPost.url);
    const post = `<div class="col-12 col-sm-4 col-xl-3 ">
        <div class="postcard" id="${currentPost.id}">
          <img class="pin" src="./img/pin.svg" alt="" />
          <div class="cardhead"><img src="${currentPost.url}" alt="${currentPost.title}" /></div>
          <div class="cardmain">
            <p>${currentPost.title}</p>
            <p>${currentPost.date}</p>
          </div>
        </div>
      </div>`;
    postHolder.innerHTML += post;
  }
  const postcardEl = document.querySelector(".postcard");
  console.log(postcardEl);
  // postcardEl.forEach((post) => {
  //   console.log(post.url);
  //   postcardEl.addEventListener("click", () => {
  //     if (post.id === currentPost.id)
  //   });
  // });
});
