import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/',
    defaultImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
}); 