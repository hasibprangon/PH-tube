const loadVideos = () => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.error(`An error found`, err))
};

// time converter


const displayVideos = (videos) => {
    const videoContainer = document.getElementById(`videos`)
    videos.forEach(video => {
        console.log(video);
        const videoCard = document.createElement(`div`);
        videoCard.classList = `card card-compact`
        videoCard.innerHTML = `
     <figure class = "h-[200px] relative">
         <img class = "w-full h-full object-cover"
             src=${video.thumbnail}
             alt="Shoes" />
           ${video.others.posted_date?.length === 0 ? `` : `  <span class="absolute right-2 bottom-2 bg-black text-white rounded p-3">${getTime(video.others.posted_date)}</span>`}
    </figure>
  <div class="px-0 py-2 flex gap-2">
       <div>
            <img class="rounded-full w-8 h-8" src=${video.authors[0].profile_picture} />
       </div>
        <div>
            <h2 class="card-title">${video.title}</h2>
            <div class ="flex gap-2 items-center ">
                <p class="font-semibold">${video.authors[0].profile_name} </p>
                ${video.authors[0].verified === true ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" />` : ``}
            </div>
            <p class = "text-sm">${video.others.views} views</p>
        </div>
  </div>
    `;

        videoContainer.appendChild(videoCard)
    });
}

loadVideos();
