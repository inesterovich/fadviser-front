import { fetchRequest } from '../utils';


const baseURL = process.env.REACT_APP_REST_API;
// Нужная функция fetchRequest. Так совершенно невозможно
export const registrationRequest = async (formData: any) => {
  
  try {
  const response = await fetchRequest(`${baseURL}/users/register`, 'POST', formData);
  return response.status;
  } catch (error) {
    return 500;
  }
  
}


export const AuthorizationRequest = async (formData: any) => {
  try {
    const response = await fetchRequest(`${baseURL}/users/login`, 'POST', formData);
    return response;
  } catch (error) {
    return {
      status: 500
    
    };
  }
  
}

export const UserDataRequest = async (userId:string, token:string) => {
  try {
    // У клиента id так-то нету. При логине лучше высылать ещё и id - тут это не дубль
    const response = await fetchRequest(`${baseURL}/users/${userId}`, 'GET', null, {
      Authorization: `Bearer: ${token}`
    });
    return response;
  } catch (error) {
    return {
      status: 500
    
    };
  }
  
}


export const AccountListRequest = async (userId:string, token:string) => {
  try {
    const response = await fetchRequest(
      `${baseURL}/users/${userId}/accounts`,
      'GET',
      null, {
      Authorization: `Bearer ${token}`
    }
    );

    return response;
  } catch (error) {
    return {
      status: 500
    }
    
  }
}