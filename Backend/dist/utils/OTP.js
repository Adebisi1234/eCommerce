const BASE_URL = "https://api.sendchamp.com/api/v1/";
export const sendOTP = async (email, name, Bearer) => {
    try {
        const data = await fetch(`${BASE_URL}verification/create`, {
            body: JSON.stringify({
                channel: "email",
                token_type: "numeric",
                sender: "Sendchamp",
                token_length: 5,
                expiration_time: 6,
                customer_email_address: email,
                meta_data: { first_name: name },
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${Bearer}`,
            },
        });
        return data.json();
    }
    catch (err) { }
};
export const verifyOTP = async (code, ref, bearer) => {
    try {
        const data = await fetch(`${BASE_URL}verification/confirm`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearer}`,
            },
            body: JSON.stringify({
                verification_code: code,
                verification_reference: ref,
            }),
        });
        return data.json();
    }
    catch (err) { }
};
