import axios from 'axios';

const api = axios.create({
    baseURL : 'https://679bfb4833d316846325ad17.mockapi.io/',
});

export const getVideos = async () => {
    const result = await api.get("/video")
    return result.data
}
