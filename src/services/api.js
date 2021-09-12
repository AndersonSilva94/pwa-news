const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

const URL = 'http://localhost:3000';

const getNews = async (subject) => {
  try {
    const fetchNews = await fetch(`${URL}/${subject}`, params);
    const responseNews = await fetchNews.json();
    return responseNews;

  } catch(err) {
    console.log('Ocorreu um erro', err)
  }
}

export default getNews;
