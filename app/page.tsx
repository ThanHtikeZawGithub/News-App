import { categories } from "@/constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import { resolve } from "path";


async function HomePage() {
  //fetch data (preRender)
  const news:NewsResponse = await fetchNews(categories.join(','));

  //set timeout for 3sec

  await new Promise((resolve)=> setTimeout(resolve,3000));

  return (
      <div className=''>
       <NewsList news={news}/>
      </div>
  )
}

export default HomePage;







