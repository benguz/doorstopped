let likes = document.getElementById('count'); 
function getLike(currentPage) {
    fetch('/.netlify/functions/likes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page: currentPage}),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        likes.textContent = data.results[0]["events"];
      });
}

let clicked = 0;
function hitLike(page) {
    likesInt = parseInt(likes.textContent)
    if ((clicked % 2) === 0) {
        likesInt++; 
    } else {likesInt--;}
    likes.textContent = likesInt;
    if (clicked === 0) {
        plausible(page + "-likes");
    }
    clicked++;
}