import RecruiterModel from "../model/recruiter.js";

const recruiterReg = async (req, res) => {
    const { firstName, lastName, education, email, phone, password } = req.body;

    if (!firstName || !lastName || !education || !email || !phone || !password) {
        res.json({ error: "all the fields are required" });
    } else {
        try {
            const data = await new RecruiterModel({
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


const recruiterLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ error: "all the fields are required" });
    } else {
        try {
            const data = await RecruiterModel.findOne({ Email: email });

            if (data) {
                if (data.Password == password) {
                    res.json({ message: "Recruiter loggedin successfully", sent: data });
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
    recruiterReg,
    recruiterLogin
}