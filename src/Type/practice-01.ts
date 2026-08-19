// Basic Typescript Function

function add(a:number, b:number): number {
    return a + b;
}


function subtract(a: number, b: number): number {
    return a - b;
} 

//Union Types 

let id: string | number;
id = 123;
id = "abc";

// Type Aliases
type User = {
    name: string;
    age: number;
    email?: string; // Optional property
};

// Interface 

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}

// Optional Properties 

interface Car {
    make: string;
    model: string;
    year?: number; // Optional property
}

// Literal Types

type Status = "pending" | "success" | "failed";

// Type narrowing 

function processStatus(status: Status) {
     if (status === "pending") {   
           console.log("Processing is pending...");
     } else if (status === "success") {
           console.log("Processing was successful!");
     }   
     else if (status === "failed") {
           console.log("Processing failed.");
     }     
}

// Another example 

function print(value: string | number) {
     if (typeof value === "string") {
          console.log("String value: " + value);
     } else if (typeof value === "number") {
          console.log("Number value: " + value);
     }
}

// Generics 

function identity<T> (value:T): T {
    return value;
}

// Typescript with arrays of objects 

type product = {
     name: string;
     price: number;
};

const products: product[] = [
     { name:"Laptop", price: 800},
     { name: "Phone", price: 500}
];


// Destructuring + Typescript 

type Users = { 
     name: string;
     age: number;
};

function showUser({ name, age} : Users) {
     console.log(name, age);
}


// as type Assertion 

const value: unknown = "Hello";
const text = value as string;



const whereaaas = value as number;


// Type Interference 

let name: string = 'Sahed';

let isLoggedIn: boolean = true;


// Arrays 

let names: string[] = ["John", "Alex", "Mike"];

// Function with void 


function printName(name: string): void {
     console.log(name);
}

// Optional Parameters

function greet(name?: string, age: number= 0) {
     console.log(name);
}

// Arrow 