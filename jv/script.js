const postHolder = document.getElementById("postHolder");

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
        <div class="postcard">
          <img class="pin" src="./img/pin.svg" alt="" />
          <div class="cardhead"><img src="${currentPost.url}" alt="" /></div>
          <div class="cardmain">
            <p>${currentPost.title}</p>
            <p>${currentPost.date}</p>
          </div>
        </div>
      </div>`;
    postHolder.innerHTML += post;
  }
});
