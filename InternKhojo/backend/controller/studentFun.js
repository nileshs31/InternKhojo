import StudentModel from "../model/student.js";

const studentReg = async (req, res) => {
    const { firstName, lastName, education, email, phone, password } = req.body;

    if (!firstName || !lastName || !education || !email || !phone || !password) {
        res.json({ error: "all the fields are required" });
    } else {
        try {
            const data = await new StudentModel({
                FirstName: firstName,
                LastName: lastName,
                Education: education,
                Email: email,
                Phone: phone,
                Password: password
            })

            await data.save();
            res.send("data stored in schema");

        } catch (error) {
            res.send(error);
        }
    }
}


const studentLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ error: "all the fields are required" });
    } else {
        try {
            const data = await StudentModel.findOne({ Email: email });

            if (data) {
                if (data.Password == password) {
                    res.json({ message: "Student loggedin successfully", sent: data });
                } else {
                    res.json({ error: "Incorrect password" });
                }
            } else {
                res.json({ error: "user not found" });
            }
        } catch (error) {
            console.log(error);
        }
    }
}



export {
    studentReg,
    studentLogin
}