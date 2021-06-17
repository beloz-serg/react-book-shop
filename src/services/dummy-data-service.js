import { ErrorConstants } from "../constants";

const delay = 1000;

const books = [
    {
        id: 101,
        title: "Murach's Python Programming",
        author: "Joel Murach, Michael Urban",
        img: "https://images-production.bookshop.org/spree/images/attachments/7604921/original/9781890774974.jpg?1588301555",
        price: 57.50
    },
    {
        id: 235,
        title: 'C# Programming in Easy Steps',
        author: 'Mike McGrath',
        img: 'https://images-production.bookshop.org/spree/images/attachments/12390058/original/9781840789065.jpg?1617748850',
        price: 14.71
    },
    {
        id: 355,
        title: 'Beginning Programming with Java for Dummies',
        author: 'Barry Burd',
        img: 'https://images-production.bookshop.org/spree/images/attachments/8801459/original/9781119235538.jpg?1588294904',
        price: 27.59
    },
    {
        id: 460,
        title: 'The C# Programming Yellow Book: Learn to program in C# from first principles',
        author: 'Rob Miles',
        img: 'https://images-production.bookshop.org/spree/images/attachments/10402242/original/9781728724966.jpg?1586028347',
        price: 12
    }
];

export default class DummyDataService {
    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(books), delay);
        });
    }

    getBook(id) {
        const book = books.find(x => x.id === id);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (book === undefined) {
                    reject(ErrorConstants.BOOK_NOT_FOUND);
                }
                else {
                    resolve(book);
                }
            }, delay);
        });
    }
}