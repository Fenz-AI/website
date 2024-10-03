const { NextResponse } = require("next/server");

const POST = async (req) => {
    const { document } = await req.json();
    
    const response = await fetch("http://localhost:8000/predit/text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          document,
        }),
    });
    
    const data = await response.json();
    console.log("response", response);
    console.log(data);
    return NextResponse.json({ data });
};

export { POST };