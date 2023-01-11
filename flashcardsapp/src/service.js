export default class service {
    constructor() {
        this.baseURL = "http://itgirlschool.justmakeit.ru/api/words"
    }
    checkResponse = async (response) => {
        if (!response.ok) {
            const result = await response.json()
            throw new Error(result.result ? result.result : `url ${response.url}, status ${response.status}`);
        }
    }
    getData = async (url) => {
        const response = await fetch(url);
        await this.checkResponse(response)
        return await response.json();
    }
    sendData = async (url, method, data) =>{
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await this.checkResponse(response)
        return await response.json();
    }

    getWordsData = async () => {
        return await this.getData(this.baseURL);
    }

    deleteWord = async (wordID) => {
        return await this.sendData(`${this.baseURL}/${wordID}`, "DELETE");
    }

    createOrUpdateWord = async(wordID) => {
        return await this.sendData(`${this.baseURL}/${wordID}`, "POST");
    }
}