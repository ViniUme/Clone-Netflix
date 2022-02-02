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
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_networks=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                name: 'Trending Topics',
                items: await getResponse(`/trending/tv/week?api_key=${API_KEY}`)
            },
            {
                slug: 'action&adventure',
                name: 'Action & Adventure',
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_genres=10759&api_key=${API_KEY}`)
            },
            {
                slug: 'sci-fi&fantasy',
                name: 'Sci-Fi & Fantasy',
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_genres=10765&api_key=${API_KEY}`)
            },
            {
                slug: 'animation',
                name: 'Animation',
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_genres=16&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                name: 'Comedy',
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                name: 'Documentary',
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_genres=99&api_key=${API_KEY}`)
            },
            {
                slug: 'reality',
                name: 'Reality',
                items: await getResponse(`/discover/tv?sort_by=popularity.desc&with_genres=10764&api_key=${API_KEY}`)
            }
        ];

        return list;
    }
};