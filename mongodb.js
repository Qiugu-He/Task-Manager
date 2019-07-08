//CRUD: create, read, update and delete

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'

const id = new ObjectID()


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return consol.log('Unable to connect to database!')
    }

    //create&connect a db:
    const db = client.db(databaseName)  

//    //insert
//     db.collection('tasks').insertMany([
//         {
//             description:'Clean house',
//             completed:true
//         },{
//             description:'Renew wall',
//             completed:false
//         },{
//             description:'Pot plant',
//             completed:true
//         }
//     ], (error, result)=>{
//         if(error){
//             return console.log('Unable to insert documents!')
//         }

//         console.log(result.ops)
//     })

    //read
    db.collection('users').findOne({name: 'aa'}, (error, result)=>{
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(result)
    })

    //search by id:
    db.collection('users').findOne( {_id: new ObjectID("5d23832952cff439e4584566") }, (error, result)=>{
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(result)
    })

    db.collection('tasks').findOne( {_id: new ObjectID("5d23800996763748e883d7d0") }, (error, result)=>{
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(result)
    })


    //multiple search
    db.collection('tasks').find( {completed: true}).toArray((error, tasks)=>{
        console.log(tasks)
    })

})
