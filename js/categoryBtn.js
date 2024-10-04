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

        const categoryBtn = document.createElement(`button`);
        categoryBtn.classList= `btn`;
        categoryBtn.innerText = element.category;
        btnContainer.appendChild(categoryBtn)
    });
}

loadCategories()