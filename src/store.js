import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/',
    defaultImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
}); 