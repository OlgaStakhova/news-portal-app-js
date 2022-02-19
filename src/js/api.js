import NewsFetchService from './news-service';
import templateArt from '../templateArticles.hbs';

const refs = {
    searchForm: document.querySelector('#searchForm'),
    btnLoad: document.querySelector('#btnLoad'),
    cardList: document.querySelector('#cardList'),
}

const newsFetchService = new NewsFetchService();
newsFetchService.searchQuery = 'news';
newsFetchService.fetchCardsInfo().then(tplArrticlsMarkup);

refs.searchForm.addEventListener('submit', handlerSerch);
refs.btnLoad.classList.add('is-hiden')
function handlerSerch(event){
    event.preventDefault();
newsFetchService.searchQuery = event.currentTarget.elements.formInput.value;
if(newsFetchService.searchQuery === ""){
    return alert("Enter your query")
}

newsFetchService.resetPage();
clearHtmlMarkup()
newsFetchService.fetchCardsInfo().then(tplArrticlsMarkup);
refs.btnLoad.classList.remove('is-hiden')  
}

refs.btnLoad.addEventListener('click', handlerLoadMore);
refs.btnLoad

function handlerLoadMore() {
    newsFetchService.fetchCardsInfo().then(tplArrticlsMarkup);
}

function tplArrticlsMarkup(articles) {
       
      refs.cardList.insertAdjacentHTML('beforeend', templateArt(articles));
}

function clearHtmlMarkup() {
    refs.cardList.innerHTML = '';
}




console.log("template", templateArt())