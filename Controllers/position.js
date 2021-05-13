const Position = require('../Models/position');
exports.getPosition = (req, res) => {
    Position.find().exec((err,dept) => {
        if (err) {
            return res.status(402).json({
                Error: "No Depatment Exist"
            })
        }
        return res.json(dept);
        
    })
}
exports.addPosition = (req, res) => {
    console.log(req.body);
    const dept = new Position(req.body);
    Position.findOne({name:req.body.name},(err,Dept)=>{
        if (err || !Dept) {
            dept.save((err,saved) => {
                if (err) {
                    return res.json({
                        Error : "Couldnot Save"
                    })
                }
                return res.json(saved);
            });
        }
        else {
            return res.status(400).json({
                Error :"Department Name Already Exist"
            })
        }
    })
}

exports.deletePosition= (req, res) => {
    console.log(req.body);
    Position.findOneAndDelete({name : req.body.name}, ((err,dept) => {
        if (err) {
            //... 
            return res.status(400).json({Error : "Unable to delete"})
        }
        return res.json(dept);

    }))
}