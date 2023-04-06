export default function sortByImg(news: NewsResponse) {
    const newsWithImg = news.data.filter(item => item.image !== null);
    const newsWithoutImg = news.data.filter(item => item.image === null);

    const sortNews = {
        pagination: news.pagination,
        data: [...newsWithImg, ...newsWithoutImg],
    }

    return sortNews;
}