import { timeApi } from './api';

interface GetTimeParams {
  latitude: string;
  longitude: string;
}

const getCurrentTime = async ({latitude, longitude}: GetTimeParams) => {
 try {
  const response = await timeApi.get(`/timezoneJSON?formatted=true&lat=${latitude}&lng=${longitude}&username=theycallmewolf&style=full`);
  
  return response.data;
 } catch(error) {
   throw new Error(error);
 }
}

export default getCurrentTime;