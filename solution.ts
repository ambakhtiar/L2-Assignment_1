//Solution: 1
function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return value;
    }
}

// console.log(formatValue('heY somaJ'));
// console.log(formatValue(50));
// console.log(formatValue(false));


//Solution: 2
function getLength(value: string | Array<any>): number {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return 0;
    }
}

// console.log(getLength('typesc gdfgfdri pt'));
// console.log(getLength([10, 20, "vds", "sdfds", 30, 40]));


//Solution: 3
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());
// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



//Solution: 4
type TBook = {
    title: string;
    rating: number;
}

const filterByRating = (books: TBook[]): TBook[] => {
    let filterBooks: TBook[] = books.filter(book => book.rating >= 4);
    return filterBooks;
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));


// Solution : 5
type TUser = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: TUser[]): TUser[] => {
    let activeUsers = users.filter(user => {
        if (typeof user.isActive === "boolean" && user.isActive === true) {
            return user;
        }
    })
    return activeUsers;
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


// Solution : 6
interface TBookDetails {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: TBookDetails): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}

const myBook: TBookDetails = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

// printBookDetails(myBook);



// Solution : 7 
const getUniqueValues = (a: number[] | string[], b: number[] | string[]): (number | string)[] => {
    let c: (number | string)[] = [];

    for (let element of [...a, ...b]) {
        if (!c.includes(element)) {
            c.push(element);
        }
    }

    return c;
}

const array1 = [1, 2, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



//Solution : 8
interface TProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: TProduct[]): number => {
    let totalPrice: number = products.reduce((total, product) => {
        let productPrice = product.price * product.quantity;
        if (product.discount && product.discount > 0 && product.discount <= 100) {
            productPrice -= (productPrice * product.discount) / 100;
        }
        return total + productPrice;
    }, 0);
    return totalPrice;
}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));


console.log("\n\n\n\n");