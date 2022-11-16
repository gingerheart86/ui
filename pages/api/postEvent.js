import { airtablePostEvent } from "../../services/airtable"

export default async function handler(req, res) {
    
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const event = req.body

    console.log(event)
  
  
    // not needed in NextJS v12+
    const response = await airtablePostEvent(event);
    return response
    
    
  
    // the rest of your code
  }
