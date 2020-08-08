const URL_BACKEND = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : '//url do heroku'


export default {
    URL_BACKEND
};