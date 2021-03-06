import { fetchRequest } from '../utils';
import { CreateAccountValidationType } from '../types';


const baseURL = process.env.REACT_APP_REST_API;

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

export const AccountRequest = {
  getAll:  async (userId:string, token:string) => {
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
  },
  get:  async (userId:string, accountId:string, token:string) => {
    try {
      const response = await fetchRequest(
        `${baseURL}/users/${userId}/accounts/${accountId}`,
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
  },
  create: async (form: CreateAccountValidationType, userId: string, token: string) => {
    try {
      
      const response = await fetchRequest(`${baseURL}/users/${userId}/accounts`,
        'POST', form, {
        Authorization: `Bearer ${token}`
      }
      );

      return response;
    } catch (error) {
      return {
        status: 500
      }
    }
    
  },
  delete:  async (userId:string, accountId:string, token:string) => {
    try {
      const response = await fetchRequest(
        `${baseURL}/users/${userId}/accounts/${accountId}`,
        'DELETE',
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
  },
  addOperation:  async (form: any, userId:string, accountId:string, token:string) => {
    try {
      const response = await fetchRequest(
        `${baseURL}/users/${userId}/accounts/${accountId}/add`,
        'POST',
        form, {
        Authorization: `Bearer ${token}`
      }
      );
  
      return response;
    } catch (error) {
      return {
        status: 500
      }
      
    }
  },
  updateOperation:  async (form: any, userId:string, accountId:string, operationId:string, token:string) => {
    try {
      const response = await fetchRequest(
        `${baseURL}/users/${userId}/accounts/${accountId}/${operationId}`,
        'PUT',
        form, {
        Authorization: `Bearer ${token}`
      }
      );
  
      return response;
    } catch (error) {
      return {
        status: 500
      }
      
    }
  },
  deleteOperation:  async (userId:string, accountId:string, operationId:string, token:string) => {
    try {
      const response = await fetchRequest(
        `${baseURL}/users/${userId}/accounts/${accountId}/${operationId}`,
        'DELETE',
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
  },
  
}