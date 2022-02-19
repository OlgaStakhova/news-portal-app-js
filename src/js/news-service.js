export default class NewsApiService {
    constructor() {
    this.query = ''
    this.KEY = `81bc3742d122480e8dd1594520710949`;
    this.baseUrl = 'https://newsapi.org/v2';
    this.page = 1;
    }

    fetchCardsInfo() {
        return  fetch(`${this.baseUrl}/everything?q=${this.query}&apiKey=${this.KEY}&page=${this.page}&pageSize=8`)
         .then(respons => respons.json())
         .then(data => {
             this.page += 1;
             return data.articles
         })
    }

    resetPage() {
        this.page =1;
    }

    get searchQuery() {
        return this.query;
    }

    set searchQuery(newQuery) {
   this.query = newQuery
    }
}