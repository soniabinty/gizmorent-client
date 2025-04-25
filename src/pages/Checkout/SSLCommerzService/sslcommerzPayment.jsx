import useaxiosPubic from "../../../hooks/useaxiosPublic";

export const initiateSSLCOMMERZPayment = async (paymentDetails, customerData) => {
    const axiosPubic = useaxiosPubic();

    try {
        // Prepare payment initiation data
        const paymentData = {
            total_amount: paymentDetails?.total || 0,
            cus_name: customerData.name,
            cus_email: customerData.email,
            cus_phone: customerData.phone,
        };

        // Call backend to initiate payment
        const response = await axiosPubic.post("/sslcommerz-payment", paymentData);
        console.log("Payment Response:", response.data);

        // Redirect to SSLCommerz payment gateway
        if (response.data?.url) {
            window.location.href = response.data.url;
        } else {
            alert("Failed to initiate payment.");
        }
    } catch (error) {
        console.error("Payment initiation error:", error);
        alert("An error occurred during payment initiation.");
    }
};