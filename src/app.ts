import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const ul = document.querySelector('ul')!;
const list  = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})

// GENERICS
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: 'yoshi', age: 40});
// console.log(docOne.name);

// GENERICS + INTERFACES

// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docTwo: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: { name: 'mcvean' }
// }

// ENUM
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// interface Resource<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T;
// }

// const docOne: Resource<object> = {
//     uid: 1,
//     resourceName: ResourceType.BOOK,
//     data: { title: 'name of the wind' }
// }

// const docTwo: Resource<object> = {
//     uid: 2,
//     resourceName: ResourceType.PERSON,
//     data: { name: 'yoshi' }
// }

// TUPLES
// let tup: [string, number, boolean] = ['ryu', 25, true];