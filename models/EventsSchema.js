const mongoose = require('mongoose');


const schema = new mongoose.Schema(
    {
        _id:Number,
        title:String,
        date:Date,
        mainSpeaker:{
            type:Number,
            ref:"speakers"
        },
        speakers:[{
            type:Number,
            ref:"speakers"
        }],

    }
)


mongoose.model('events' , schema);