import axios, { AxiosResponse } from "axios";


const sendUserQuery = (query: string): Promise<AxiosResponse<any, any>> => {
    const params = new URLSearchParams({ 'message': query });

    return axios.get(`http://localhost:8000/?${params.toString()}`, { withCredentials: true })
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




