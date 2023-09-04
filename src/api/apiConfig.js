const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8ad059eb32d59e1ea695b31009803879',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;