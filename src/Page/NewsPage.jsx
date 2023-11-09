import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '../Components/Container';
import { dataCardNews } from '../data/dataCardNews'
import { NewsList } from '../Components/NewsList';


export const NewsPage = () => {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const filteredNews = dataCardNews.filter(news => news.newsId === +newsId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsId]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <Container className="pb-[34px] md:pb-[80px] pt-[22px] md:pt-[40px]">
      <button onClick={goBack} className='flex justify-center items-center text-[#0C5AB5]'>
        <img src='../img/PageNews-arrow-diagonal-up.svg' />
        <p className='font-bold text-sm leading-[22px] pl-2'>Назад</p>
      </button>

      {
        filteredNews && filteredNews.map(news => (
          <NewsList news={news} key={news.newsId} />
        ))
      }


    </Container>
  )
}
