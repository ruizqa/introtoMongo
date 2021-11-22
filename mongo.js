// 1. Create a database called 'my_first_db'.
// use my_first_db;

//2. Create students collection.
db.createCollection('students')

//3. Each document you insert into this collection should have the following format:
// ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
//4. Create 5 students with the appropriate info.

db.students.insert({name : "Adolfo", home_state : "Florida", lucky_number : 7, birthday : { month : 12, day : 7, year : 1993 } })

db.students.insert({name : "Maria", home_state : "Washington", lucky_number : 15, birthday : { month : 7, day : 17, year : 1985 } })
db.students.insert({name : "Juan", home_state : "New York", lucky_number : 25, birthday : { month : 10, day : 4, year : 1980 } })
db.students.insert({name : "Sara", home_state : "California", lucky_number : 45, birthday : { month : 1, day : 24, year : 1970 } })
db.students.insert({name : "Roberto", home_state : "Wisconsin", lucky_number : 18, birthday : { month : 5, day : 3, year : 1965 } })

// 5.Get all students.

db.students.find()

//6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

db.students.find({home_state:{$in:['California', 'Washington']}})

//7.Get all students whose lucky number is: greater than 3, 

db.students.find({lucky_number:{$gt:3}})

//less than or equal to 10, 

db.students.find({lucky_number:{$lte:10}})

//between 1 and 9 (inclusive)

db.students.find({lucky_number:{$gte:1}, lucky_number:{$lte:9}})

//8.Add a field to each student collection called 'interests' that is an ARRAY. 
// It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.


db.students.update({},[{$set:{'interests':['coding', 'brunch', 'MongoDB']}}],{ multi: true })


//9.Add some unique interests for each particular student into each of their interest arrays.
//10. Add the interest 'taxes' into someone's interest array.
db.students.update({name:'Adolfo'},{$push:{interests:'data science'}})
db.students.update({name:'Maria'},{$push:{interests:'cooking'}})
db.students.update({name:'Juan'},{$push:{interests:'microbiology'}})
db.students.update({name:'Sara'},{$push:{interests:'singing'}})
db.students.update({name:'Roberto'},{$push:{interests:'taekwondo'}})
db.students.update({name:'Maria'},{$push:{interests:'taxes'}})

//11.Remove the interest taxes that you just added
db.students.update({name:'Maria'},{$pull:{interests:'taxes'}})

//12.Remove all students who are from California.
db.students.remove({home_state:'California'})

//13.Remove a student by name
db.students.remove({name:'Juan'})

//14.Remove a student whose lucky number is greater than 5 (JUST ONE)

db.students.remove({lucky_number:{$gt: 5}},true)


//15. Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.update({},{$set:{'number_of_belts':0}},{ multi: true })


//16.Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.update({home_state:'Washington'},{$inc:{'number_of_belts':1}},{ multi: true })

//17.Rename the 'number_of_belts' field to 'belts_earned'

db.students.update({},{$rename:{'number_of_belts':'belts_earned'}},{ multi: true })

//18.Remove the 'lucky_number' field.

db.students.update({},{$unset:{'lucky_number':''}},{ multi: true })
//19.Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$set:{'updated_on': new Date()}},{ multi: true })
