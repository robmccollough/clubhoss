require("dotenv").config();

db_name = process.env.MONGO_NAME;
db_user = process.env.MONGO_USER;
db_pass = process.env.MONGO_PASS;
db_string = `mongosh "mongodb+srv://main.2eaomvr.mongodb.net/${db_name}" --apiVersion 1 --username ${db_user} --password ${db_pass}`;
console.log(db_string);
// exec(db_string, (error, stdout, stderr) => {
//   console.log("bruv");
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
