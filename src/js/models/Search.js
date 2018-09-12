import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(query){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'b1870add20604915d2b79a14cbba9855';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result); 
        } catch(error) {
            alert(error)
        }
    }
}
