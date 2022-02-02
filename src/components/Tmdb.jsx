/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'c945acef578ef380a52477b252704a79';
const API_BASE = 'https://api.themoviedb.org/3'

const getResponse = async (link) => {
    let url = `${API_BASE}${link}`;
    let res = await fetch(url);
    let response = res.json();

    return response;
}

export default {

    getHomeList: async () => {
        let list = [
            {
                slug: 'originals',
                name: 'Originals Netflix',
                items: ``
            },
            {
                slug: 'trending',
                name: 'Trending Topics',
                items: []
            },
            {
                slug: 'action&adventure',
                name: 'Action & Adventure',
                items: []
            },
            {
                slug: 'sci-fi&fantasy',
                name: 'Sci-Fi & Fantasy',
                items: []
            },
            {
                slug: 'animation',
                name: 'Animation',
                items: []
            },
            {
                slug: 'comedy',
                name: 'Comedy',
                items: []
            },
            {
                slug: 'documentary',
                name: 'Documentary',
                items: []
            },
            {
                slug: 'reality',
                name: 'Reality',
                items: []
            }
        ]
    }
};