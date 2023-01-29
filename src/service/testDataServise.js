import axios from 'axios'//обязательно
/**
 * А вот и фронт. 
 * На бэке мы создавали файлики с классом под каждую таблицу. Тут тоже самое. Будем делать запросы к нашим файликам на бэке.
 * Под каждую таблицу(класс, описанный на бэке) создаем такой файлик. 
 * Здесь опишем класс и методы, чтоб потом достать в любом месте сайта и просто обратиться к нужному методу, прокинуть параметры если нужно.
 */

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/testModel/'//заводим константой путь до папки с нашими файликами.
//название папки в XAMMP htdocs должно быть одинаково у тебя и у меня, иначе этот TEST_API_URL будет постоянно разным и будут возникать конфликты.

//лучше осмылсенно назвать, чтоб понимать к какой таблице класс относится
class TestDataServise {
    //те же самые методы(название не важно, но лучше тоже осмысленно), что и на бэке. Для каждого метода класса с бэка, для каждого файлика тут описываем обращение к ним
    async getData() {
        //Принимает JSON но сразу конвертируется в объект. JSON.parse() делать не нужно
        //функция сразу же выполняет запрос к файлику, получает ответ. И возвращает его. 
        //А уже в любом месте сайта, где вывзвали метод, можем принять ответ и впиндюрить куда хочется
        return await axios.get(`${TEST_API_URL}/getData.php`)
    }
    //тут post запрос. Поэтому вторым аргументом нужно пихнуть параметры в виде JSON
    async insertData(params) {
        return await axios.post(`${TEST_API_URL}/insertData.php`, JSON.stringify(params))
    }
}

export default new TestDataServise()//прикольная штука которая сразу же создает экземпляр класса. Не нужно создавать в других местах экземпляр. 
//Просто импорт класса и пользуешься методами