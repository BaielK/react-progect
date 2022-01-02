export class FilmApi {
    mainUrl = 'https://imdb8.p.rapidapi.com'
    defaultHeaders = {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': 'ef826ff364mshbf5c1c9aaa43091p1d3cf3jsna46fe575a33d'
    }

    constructor() {}

    async getByTitle(title) {
        return await fetch(
            `${this.mainUrl}/auto-complete?q=${title}`, 
            {
                method: 'GET',
                headers: this.defaultHeaders
            }
        ).then((res) => res.json())
    }
} 