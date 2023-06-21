exports.getAllSpeakers =((req,res)=>{
    res.status(200).json([{data:"list of Speakers"}]);
})

exports.getSpeakerById =((req,res)=>{
    res.status(200).json({data:"Speaker" , id:req.params});
})

exports.addSpeaker =((req,res)=>{
    res.status(201).json({data:"added", BODY:req.body});
})

exports.updateSpeaker =((req,res)=>{
    res.status(200).json({data:"updated"});
})

exports.deleteSpeaker = ((req,res)=>{
    res.status(200).json({data:"Deleted"});
})