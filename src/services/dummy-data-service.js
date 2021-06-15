
const books = [
    {
        id: 1,
        title: 'First book'
    },
    {
        id: 2,
        title: 'Second book'
    }
];

export default class DummyDataService {
    getData() {
        return books;
    }
}