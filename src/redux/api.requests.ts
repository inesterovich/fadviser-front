import { fetchRequest } from '../utils';


// Нужная функция fetchRequest. Так совершенно невозможно
export const registrationRequest = async (formData: any) => {
  
  try {
  const response = await fetchRequest('http://127.0.0.1:5000/users/register', 'POST', formData);
  return response.status;
  } catch (error) {
    return 500;
  }
  
}


export const AuthorizationRequest = async (formData: any) => {
  try {
    const response = await fetchRequest('http://127.0.0.1:5000/users/login', 'POST', formData);
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
    const response = await fetchRequest(`http://127.0.0.1:5000/users/${userId}`, 'GET', null, {
      Authorization: `Bearer: ${token}`
    });
    return response;
  } catch (error) {
    return {
      status: 500
    
    };
  }
  
}