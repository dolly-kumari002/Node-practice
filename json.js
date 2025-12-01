// Create and Write JSON Data File
const fs = require('fs');

const student = {
  name: "Dolly",
  age: 20,
  course: "B.Tech",
  college: "Patna"
};

// Convert object to JSON string
const jsonData = JSON.stringify(student);

// Write JSON data to a file
fs.writeFileSync('student.json', jsonData);
console.log(" JSON file created successfully");


// Read JSON Data from File
const data = fs.readFileSync('student.json', 'utf8');
const studentObj = JSON.parse(data);

console.log("Student data read from file:", studentObj);
console.log("Student name:", studentObj.name);


// Update JSON Data
studentObj.age = 22; // update property

// Write the updated data back to file
fs.writeFileSync('student.json', JSON.stringify(studentObj));
console.log("JSON data updated successfully!");

// const students = [
//     {name: "dolly", age: 20},
//     {name: "riys", age: 20},
//     {name: "aman", age: 20}
// ];
// fs.writeFileSync('students.json',JSON.stringify(students));
// const data = fs.readFileSync('students.json','utf-8');
// const arr = JSON.parse(data);
// arr.forEach(s=>console.log(`${s.name}-${s.age}`));