import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {useMongoClient: true});

const friendSchema = mongoose.Schema({ 
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

const Friends = mongoose.model('friends', friendSchema);
 export {Friends};