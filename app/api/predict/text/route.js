const { NextResponse } = require("next/server");

const POST = async (req) => {
    const { document } = await req.json();

    try {
        const response = await fetch("https://zero-api.gptdao.ai/predit/text", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                document,
            }),
        });
    
        const data = await response.json();
        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
};

export { POST };