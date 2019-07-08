//CRUD: create, read, update and delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient 

const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return consol.log('Unable to connect to database!')
    }

    //create&connect a db:
    const db = client.db(databaseName)  

    // //select a collection and manipulate:
    // db.collection('users').insertOne({
    //     name:'Qiugu He',
    //     age: 105
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     }

    //     console.log(result.ops) 
    // })

    // //insert multiple
    // db.collection('users').insertMany([
    //     {
    //         name:'bb',
    //         age:5
    //     },{
    //         name:'aa',
    //         age:3
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description:'Clean house',
            completed:true
        },{
            description:'Renew wall',
            completed:false
        },{
            description:'Pot plant',
            completed:true
        }
    ], (error, result)=>{
        if(error){
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })
})
