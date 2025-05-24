

const adminLoginController = async (req, res) => {
    return res.status(200).json({
        message: "Admin login successful",
    });
}


exports = {
    adminLoginController
};