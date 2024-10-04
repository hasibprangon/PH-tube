const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.error(`An error found`, err))
};

const displayCategories = (categories) => {
    const btnContainer = document.getElementById(`categoryBtnContainer`)
    categories.forEach(element => {
        // console.log(element);

        const categoryBtnDiv = document.createElement(`div`);
        categoryBtnDiv.innerHTML = `
        <button onclick="loadCategoryVideo(${element.category_id})" class="btn inline-block">${element.category}</button>
        `;
        btnContainer.appendChild(categoryBtnDiv)
    });
}

loadCategories()