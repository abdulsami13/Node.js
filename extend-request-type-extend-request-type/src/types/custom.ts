export const SUPPORTED_LANGUAGES = ["en", "es", "it"]
// this syntax is equals to "en" | "es" | "it"
export type Language = typeof SUPPORTED_LANGUAGES[number]

export type User = {
    id?: number,
    name: string,
    surname: string,
    authenticationToken?: string | null
}


interface Person {
    fullName: string;
  }
  
  // declaring the Person interface again,
  // this time with a different property
  interface Person {
    age: number;
  }
  
  // the resulting Person interface has both 
  // the 'fullName' and 'age' properties
  const person: Person = {
    fullName: 'Maria Smith',
    age: 37
  }