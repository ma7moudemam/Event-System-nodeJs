
exports.getAllEvents = (req , res)=>{
    res.status(200).json([{data:"List of Events"}]);
}

exports.getEventById = (req , res)=>{
    res.status(200).json({data:"Event By Id" , BODY:req.body});
}

exports.addNewEvent = (req , res)=>{
    res.status(201).json({data:"added" , BODY:req.body});
}

exports.updateDepartment = (req , res)=>{
    res.status(200).json({data:"Updated"});
}

exports.deleteEvent  = (req , res)=>{
    res.status(200).json({data:"deleted"});
}
