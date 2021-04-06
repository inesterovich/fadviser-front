
// Нужная функция fetchRequest. Так совершенно невозможно
export const registrationRequest = async (formData:any) => {

  const response = await fetch('http://127.0.0.1:5000/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    });
  
  return response.status;
  
  
}