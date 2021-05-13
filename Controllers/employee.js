const Employee = require('../Models/employee');
//add employee
exports.addEmployee = (req, res) => {
    console.log(req.body);
    const Emp = new Employee(req.body);
    Employee.findOne({ email: req.body.email }, ((err,emp) => {
        if (err || !emp) {
            Emp.save((err,employee) => {
                if (err) {
                    return res.status(400).json({
                        Error : "Not able to save employee"
                    })
                
                }
               // console.log(employee)
                else return res.json(employee);
            })
        }
       else  return res.status(400).json({
            Error : "User Already Exist"
        })
    })) 
    
}
//delete employee
exports.deleteEmployee = (req,res) => {
    Employee.findOneAndDelete({email : req.body.email}, ((err,emp) => {
        if (err) {
            //... 
            return res.status(400).json({Error : "Unable to delete"})
        }
       else return res.json(emp);

    }))
}

//
//get all user 
exports.getAllEmployee = (req, res) => {
    Employee.find().exec((err,emp) => {
        if (err) {
            return res.status(402).json({
                Error: "No Employee Exist"
            })
        }
        return res.json(emp);
        
    })
}

//get a user
exports.getAEmployee = (req,res) => {
    console.log(req.params.id)
    Employee.findById({ _id: req.params.id }, ((err,emp) => {
        if (err) {
            return res.status(402).json({
                Error: " Employee Not Found"
            })
        }
        return res.json(emp);
    }))
}

//update employee 

exports.updateEmployee = (req, res) => {
    console.log(req.body);
    Employee.findByIdAndUpdate(
      
        { _id: req.params.id },
        { $set: req.body.data.employee },
        { new: true, useFindAndModify: false },
        (err, emp) => {
            if (err) {
                return res.status(402).json({
                    Error: " Couldn't update"
                })
            }
            return res.json(emp);
        }
    )
}