const API_BASE_URL ='https://api.mangadex.org';

async function FetchApi(
  endpoint,
  {
    method = 'GET',
    body = null,
    params = {},
    next = {
      revalidate: 0,
    },
  }
) {
  
  let URL = `${API_BASE_URL}/${endpoint}`; // Changed const to let to allow URL modification
  if (Object.keys(params).length > 0) {
    let queryString = '';
    Object.keys(params).forEach((key, index) => {
      if (Array.isArray(params[key])) {
        params[key].forEach((value, i) => {
          queryString += `${index === 0? '?' : '&'}${key}[]=${value}`;
        });
      } else {
        queryString += `${index === 0? '?' : '&'}${key}=${params[key]}`;
      }
    });
    URL += queryString;
  }

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    next,
  };
  console.log(`succesfully fetching : ${URL}`); // Added a semicolon at the end of the console.log statement

  if(body){
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(URL, options);
    const statusCode = response.status;
    const isSuccess = response.ok;
    const data = isSuccess ? await response.json() : null;

    return {
        isSuccess,
        data,
        isError: !isSuccess,
        error: null, // Define error as null initially
        statusCode
    };
  } catch (error) {
    if(error instanceof Error){
        return {
            isSuccess: false,
            isError: true,
            data: null,
            error: error.message,
            statusCode: null,
        };
    } else {
        return {
            isSuccess: false,
            isError: true,
            data: null,
            error: "An unknown error occurred",
            statusCode: null,
        };
    }
  }
}

export default FetchApi;
