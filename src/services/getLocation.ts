import { weatherApi } from './api';

interface ILocationParams {
  city: string;
}

const getWoeid = async ({ city }: ILocationParams ) => {
  
  try {
    const response = await weatherApi.get(
      `/location/search/?query=${city}`
    );

    return response.data;

  } catch (error) {
    console.log(error);
  }
};

export default getWoeid;