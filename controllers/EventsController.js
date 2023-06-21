
exports.getAllEvents = (req , res)=>{
    res.status(200).json([{data:"List of Events"}]);
}


exports.getEventById = (req , res)=>{
    res.status(200).json({data:"Event"});
}

exports.addNewEvent = (req , res)=>{
    res.status(201).json({data:"Added"});
}

exports.updateEvent = (req ,res)=>{
    res.status(200).json({data:"Updated"});
}

exports.deleteEvent = (req , res)=>{
    res.status(200).json({data:"Deleted"});
} 