import { gql } from "graphql-request";
import sortByImg from "./sortByImg";
// import sortByImg from "./sortByImg";

const fetchNews = async ( category?: Category | string,
    keywords?:string,
    isDynamic?: boolean) => {

    const query = gql`
        query myQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb"
                sort: "published_desc"
                keywords: $keywords
                ) {
            data {
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
            }
        }`;


    const res = await fetch('https://avdon.stepzen.net/api/nasal-gopher/__graphql',{
        method: 'POST',
        cache: isDynamic ? "no-cache" :'default',
        next: isDynamic ? {revalidate: 0} : {revalidate: 20},
        headers: {
            'Content-Type': 'application/json',
            Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),

    });


    const newsResponse = await res.json();
    const news = sortByImg(newsResponse.data.myQuery);

    return news;

};


export default fetchNews;

// //http://api.mediastack.com/v1/news?access_key=413daf564165a8f874157e058a5b87c9&sources=business,sports

// //stepzen import curl "http://api.mediastack.com/v1/news?access_key=413daf564165a8f874157e058a5b87c9&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
