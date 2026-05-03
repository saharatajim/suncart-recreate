export const getAllProducts=async()=>{
const res= await fetch('http://localhost:3000/data.json')
const data=await res.json()
return data
}


// suncart
// gCk2aAP1hcRW5qeg

// mongodb+srv://<db_username>:<db_password>@cluster0.1xoqubi.mongodb.net/?appName=Cluster0