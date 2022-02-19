import axios from "axios";

export default async function fetchITunesMusic(artistName){
    try {
        const params = {
            limit: 20,
            country: 'JP',
            term: artistName.replaceAll(' ', '+')
        };

        const { data } = await axios.get(`https://itunes.apple.com/search`, { params });
        return data;
    } catch (error) {
        console.error({error});
    }
}