import axios from 'axios';

export class JsonServerApiService  {
    static async getHistory() {
        try {
            const response = await axios.get('https://server-shop-co.onrender.com/history');
            return response.data
        } 
        catch (e: any) {
            console.log(e.message)
        }
    }
}