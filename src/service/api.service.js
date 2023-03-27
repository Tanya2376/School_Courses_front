import axios from 'axios';
/**
 * А вот и фронт. 
 * На бэке мы создавали файлики с классом под каждую таблицу. Тут тоже самое. Будем делать запросы к нашим файликам на бэке.
 * Под каждую таблицу(класс, описанный на бэке) создаем такой файлик. 
 * Здесь опишем класс и методы, чтоб потом достать в любом месте сайта и просто обратиться к нужному методу, прокинуть параметры если нужно.
 */

const API_URL = process.env.VUE_APP_API_URL;

export class ApiServise {
    /**
     * 
     * @param {string} modelName 
     */
    constructor(modelName) {
        this.api = axios.create({
            baseURL: `${API_URL}${modelName}/`,
        });
    }
}
