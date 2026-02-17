const mongoose=require('mongoose')

 const connectMongoose = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/url-shortener-app')
        console.log("Mongoose Connected")
        
        // Drop old index if it exists (from previous schema)
        try {
            const db = mongoose.connection.db
            const collection = db.collection('urls')
            const indexes = await collection.indexes()
            
            // Check if old originalUrl index exists
            const hasOldIndex = indexes.some(idx => idx.name === 'originalUrl_1')
            if (hasOldIndex) {
                await collection.dropIndex('originalUrl_1')
                console.log('Dropped old originalUrl index')
            }
        } catch (indexErr) {
            // Index might not exist, that's okay
            console.log('Index cleanup:', indexErr.message)
        }

    } catch(err){
        console.log("Error mongoose",err)

    }
 }

module.exports = connectMongoose