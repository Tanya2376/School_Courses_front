import axios from 'axios';
const cheerio = require('cheerio');

async function getgames(){
  let j=1;
  const news = [];
  const title=[];
  const desc=[];
  const link=[];
  const url = 'https://4ege.ru/ege-gia/page/'+j+'/';
  while(j<=1){
    await axios.get(url).then(res=>{
      const $ = cheerio.load(res.data);
      $('.article__link').each((i,elem)=>{
        title.push($(elem).text());
      });
      $('.article__link').each((i,elem)=>{
        link.push($(elem).attr('href'));
      });
      $('.article__text').each((i,elem)=>{
        desc.push($(elem).text());
      });
    });
    j++;
  }

  for(let i=0; i< title.length;i++) {
    news.push({title: title[i], desc: desc[i], link: link[i]});
  }
  return news
}
export default getgames();