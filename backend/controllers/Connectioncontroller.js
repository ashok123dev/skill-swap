const Connection = require("../models/Connection");

const {
    sendWhatsAppMessage
} = require("../utilis/whatsup");


// CREATE CONNECTION
const createConnection = async (req, res) => {

    try {

        const {
            studentId,
            name,
            email,
            phone,
            tech,
            learn,
            time
        } = req.body;


        // Check required fields

        if (
            !studentId ||
            !name ||
            !email ||
            !phone ||
            !tech ||
            !learn ||
            !time
        ) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        // Save connection in MongoDB

        const connection =
            await Connection.create({

                studentId,
                name,
                email,
                phone,
                tech,
                learn,
                time

            });


        // Send WhatsApp message

        await sendWhatsAppMessage(
            phone,
            name,
            tech,
            learn,
            time
        );


        res.status(201).json({

            message:
                "Connection request sent successfully on WhatsApp",

            connection

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
                "Connection failed",

            error:
                error.response?.data ||
                error.message

        });

    }
};


// GET CONNECTIONS

const getConnections = async (req, res) => {

    try {

        const connections =
            await Connection.find()
                .sort({ createdAt: -1 });

        res.status(200).json(
            connections
        );

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to get connections"
        });

    }
};


// UPDATE STATUS

const updateConnectionStatus = async (req, res) => {

    try {

        const { id } = req.params;

        const { status } = req.body;

        const connection =
            await Connection.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            );

        if (!connection) {

            return res.status(404).json({
                message: "Connection not found"
            });

        }

        res.status(200).json({

            message:
                "Connection status updated",

            connection

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to update status"
        });

    }
};


module.exports = {

    createConnection,
    getConnections,
    updateConnectionStatus

};