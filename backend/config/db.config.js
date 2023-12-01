const mongoose = require("mongoose")


exports.ConnectDB = async()=>{
    try {
          await mongoose.connect(process.env.MONGO_URI) 
          console.log(`the db is connect with ${mongoose.connection.host}`);
    } catch (error) {
        await mongoose.disconnect()
        process.exit(1)
    }
}