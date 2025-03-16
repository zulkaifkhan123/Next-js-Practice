import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json();
    console.log(data);
    return NextResponse.json({message : "Success" , data})    
}

// NextResponse.json() sends back a clean JSON response to the client : 
// {
//     "message": "Success",
//     "data": {
//       "name": "Zulkaif Ahamd",
//       "RollNumber": 12,
//       "nickName": "Kaifi"
//     }
//   }

  