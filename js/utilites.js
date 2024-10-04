const getTime = (time) => {
    const day = parseInt(time / 86400);
    const remainingSeconds = parseInt(time % 86400);
    const hours = parseInt(remainingSeconds / 3600);
    const remainingSeconds2 = parseInt(time % 3600);
    const minutes = parseInt(remainingSeconds2 / 60);
    return `${day === 0 ? `` : `${day} days`}  ${hours} hours ${minutes} minutes ago`;
};

const loadCategoryVideo = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.category))
}