import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

console.log('start')


const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await db.migrate()

// call the query using an await
// const result = await db.all('select * from greetings');
//console.log(result);

// call the query using an await
// create a function that returns all the greetings from the db
export async function getGreetings() { /*you have a special function inside the function which is await*/
    const result = await db.all(`select * from greetings`);
    return result;
}


// Create a function that adds a new greeting
export async function addGreeting(language, greeting) {
    // sql statement type - insert
    // 
    const sql = `insert into greetings (language, greeting) values (?, ?)`
    await db.run(sql, [language, greeting]);
}
export async function deletedGreetingByLanguage(language) {
    // const sql = `delete from greetings where language = ?`;
    await db.run(sql, [language]);

}
// const result1 = await deletedGreetingByLanguage(`Sepedi`)
// console.log(result1);
// console.log(`===============`)

// await deletedGreetingByLanguage(11);

// updated Greeting
export async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ?`
    await db.run(sql, [language, greeting, id])
}

// const result10 = await getGreetings()
// console.log(result10);
// console.log(`===============`)

// await updateGreeting(`Sepedi`, `Thobela`, 14)

// console.log(`===============`)

// const result2 = await getGreetings()
// console.log(result2);



// Create a delete function
export async function deletedGreeting(id) {
    const sql = `delete from greetings where id = ?`;
    await db.run(sql, [id])
}

// const result12 = await getGreetings()
//  console.log(result12);
//  console.log(`===============`)

// await deletedGreeting(20);
// await deletedGreeting(23);
// await deletedGreeting(26);
// await deletedGreeting(29);
// await deletedGreeting(21);
// await deletedGreeting(24);
// await deletedGreeting(27);
// await deletedGreeting(30);
// await deletedGreeting(19);
// await deletedGreeting(25);
// await deletedGreeting(28);
// await deletedGreeting(22);
// await deletedGreeting(38);
// await deletedGreeting(41);
// await deletedGreeting(37);
// await deletedGreeting(40);
// await deletedGreeting(39);
// await deletedGreeting(42);



const result1 = await getGreetings()
console.log(result1);

console.log(`===============`)

// await addGreeting(`Sepedi`, `Dumela`);

// console.log(`===============`)

// const result2 = await getGreetings()
// console.log(result2);

// console.log(`===============`)

// await addGreeting(`Xhosa`, `Molo`);

// const result3 = await getGreetings()
// console.log(result3);

console.log(`===============`)

// await addGreeting(`Zulu`, `Sawubona`);
// const result4 = await getGreetings()
// console.log(result4);

// console.log(`===============`)

// await addGreeting(`SeSotho`, `Dumelang`);
// const result5 = await getGreetings()
// console.log(result5);

// console.log(`===============`)

// await addGreeting(`Tshivenda`, `Nda`);
// const result6 = await getGreetings()
// console.log(result6);

// console.log(`===============`)


//  getGreetings().then(result => console.log(result));

//   //call the query using a promise
// db
// .all(`select * from greetings`)
// .then(result => {
//     console.log(result)
// })

const countResult = await db.get(`select count(*) as count from greetings`);
console.log(countResult.count);


console.log('end')