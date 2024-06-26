import axios, { AxiosResponse } from "axios";

const endpoint = 'https://xlybu8czb9.execute-api.us-west-1.amazonaws.com/dev' //deployed endpoint
// const endpoint = 'https://localhost:3000/dev' //serverless offline endpoint
// const endpoint = 'http://localhost:8000' //local endpoint


const sendUserQuery = (query: string): Promise<AxiosResponse<any, any>> => {
    const params = new URLSearchParams({ 'message': query });

    return axios.get(`${endpoint}/?${params.toString()}`, { withCredentials: true })
    // return axios.get(`http://localhost:8000/?${params.toString()}`) 
        .then(response => {
            console.log(response.data);
            return response;
        })
        .catch(error => {
            console.error('Error:', error);
            return error;
        });
}

export { sendUserQuery }




