const Department = require('../Models/department');

exports.getDepartment = (req, res) => {
    Department.find().exec((err,dept) => {
        if (err) {
            return res.status(402).json({
                Error: "No Depatment Exist"
            })
        }
        return res.json(dept);
        
    })
}
exports.addDepartment = (req, res) => {
    console.log(req.body);
    const dept = new Department(req.body);
    Department.findOne({name:req.body.name},(err,Dept)=>{
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

exports.deleteDepartment = (req, res) => {
    console.log(req.body);
    Department.findOneAndDelete({name : req.body.name}, ((err,dept) => {
        if (err) {
            //... 
            return res.status(400).json({Error : "Unable to delete"})
        }
        return res.json(dept);

    }))
}

