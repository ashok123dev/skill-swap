
const axios = require("axios");
require("dotenv").config();

const sendWhatsAppMessage = async (
    phone,
    name,
    tech,
    learn,
    time
) => {

    try {

        // Remove +, spaces, hyphens etc.
        const cleanPhone = phone.replace(/\D/g, "");

        const url =
            `https://graph.facebook.com/${process.env.WHATSAPP_API_VERSION}/` +
            `${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

        const message =
            `Hello ${name} 👋\n\n` +
            `You received a new Skill Swap connection request.\n\n` +
            `They found your profile on Skill Swap.\n\n` +
            `You teach: ${tech}\n` +
            `You want to learn: ${learn}\n` +
            `Available time: ${time}\n\n` +
            `Join your Skill Swap session here:\n` +
            `https://zoom.us/j/YOUR_MEETING_ID\n\n` +
            `Thank you for using Skill Swap!`;

        const response = await axios.post(
            url,
            {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: cleanPhone,
                type: "text",
                text: {
                    preview_url: true,
                    body: message
                }
            },
            {
                headers: {
                    Authorization:
                        `Bearer ${process.env.WHATSAPP_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(
            "WhatsApp message sent:",
            response.data
        );

        return response.data;

    } catch (error) {

        console.log(
            "WhatsApp error:",
            error.response?.data || error.message
        );

        throw error;
    }
};

module.exports = {
    sendWhatsAppMessage
};