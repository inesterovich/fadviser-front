

type bodyIndexer = {
  [key:string]: any
}

type headersIndexer = {
  [key: string]: string
}

export const fetchRequest = async (
  url: string,
  method: string = 'GET',
  body: bodyIndexer | string | null = null,
  headers: headersIndexer = {}) => {

  if (body) {
    body = JSON.stringify(body);
    headers['Content-Type'] = 'application/json'
  }
  
  const response = await fetch(url, { method, body, headers });

  return response;
  
}