const loadVideos = () => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.error(`An error found`, err))
};

const displayVideos = (videos) => {
    const videoContainer = document.getElementById(`videos`)
    videos.forEach(video => {
        console.log(video);
        const videoCard = document.createElement(`div`);
        videoCard.classList = `card card-compact`
        videoCard.innerHTML = `
     <figure>
         <img
             src=${video.thumbnail}
             alt="Shoes" />
    </figure>
  <div class="card-body">
        <img class="rounded-full w-10 inline-block" src=${video.authors[0].profile_picture} />
        <h2 class="card-title">${video.title}</h2>
        <p>${video.authors[0].profile_name}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `;

    videoContainer.appendChild(videoCard)
    });
}

loadVideos();

