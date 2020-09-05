const mongoose = require('mongoose');

const connectToMongo = async ( url ) => {

    try {
        
        const connectionInfo = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.set("useFindAndModify", false);
        console.log(`Connected to MongoDB on host ${connectionInfo.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToMongo;