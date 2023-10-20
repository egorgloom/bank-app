import axios from 'axios';
import { ITransactionsHistory } from './../../interfaces/interface';



export class JsonServerApiService  {
    static async getHistory() {
        try {
            const response = await axios.get<ITransactionsHistory[]>('https://server-shop-co.onrender.com/history');
            return response.data
        } 
        catch (e: any) {
            console.log(e.message)
        }
    }
}