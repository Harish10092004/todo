const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "JBqEFeBScRDxJY5i"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://Harish:<JBqEFeBScRDxJY5i>@todo.ulpahd8.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'Harish',
        pass: PASSWORD
    });
}
main().then(()=>{
  console.log(`Mongo connected`);
}).catch(console.log);