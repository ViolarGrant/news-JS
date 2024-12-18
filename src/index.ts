const news = document.getElementById('news');

type TNews = {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    sourse: TSourse;
};

type TSourse = {
    id: string;
    name: string;
};

const apiUrl = 'https://newsapi.org/v2/';
const apiKey = 'dc9ca8f058e14a779f7e3bc7b66ef592';

async function fetchNews() {
    const response = await fetch(`${apiUrl}top-headlines?sources=techcrunch&apiKey=${apiKey}`);
    const obj = await response.json();
    console.log(obj.articles);
    renderNews(obj.articles);
}

fetchNews();

function renderNews(newsArr: TNews[]) {
    newsArr.forEach((newItem) => {
        const listItem = document.createElement('div');
        listItem.className = 'news__item';
        news?.appendChild(listItem);

        const imgItem = document.createElement('img');
        imgItem.src = newItem.urlToImage;
        listItem.appendChild(imgItem);

        const titleItem = document.createElement('h2');
        titleItem.innerHTML = newItem.title;
        listItem.appendChild(titleItem);

        const descriptionItem = document.createElement('p');
        descriptionItem.innerHTML = newItem.description;
        listItem.appendChild(descriptionItem);

        const authorItem = document.createElement('h3');
        authorItem.innerHTML = newItem.author;
        listItem.appendChild(authorItem);
    });
}
