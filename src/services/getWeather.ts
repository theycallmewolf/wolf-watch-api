import axios from 'axios';

interface WeatherParams {
  woeid?: string;
  date: Date;
}

const getWeather = async ({ woeid, date }: WeatherParams) => {
  const year = date.getFullYear();
  const month = date.getMonth() +1;
  const day = date.getDate();

  console.log({year, month, day})

  try {
    const api = axios.create({
      baseURL: 'https://www.metaweather.com/api',
    });
    
    const response = await api.get(
      `/location/${woeid}/${year}/${month}/${day}/`
    );
    
    return response;
    
  } catch (error) {
    throw new Error(`
    ------------------------------

    Request failed with status code 404. 
    There's a big chance that the woeid requested was not found on metWeather API.
    Try another woeid.
    🐺🤞
    
    ------------------------------`);
  }
};

export default getWeather;