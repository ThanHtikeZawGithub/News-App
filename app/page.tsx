import { categories } from "@/constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";


async function HomePage() {
  //fetch data (preRender)
  const news:NewsResponse = await fetchNews(categories.join(','));

  return (
      <div className=''>
       <NewsList news={news}/>
      </div>
  )
}

export default HomePage;







