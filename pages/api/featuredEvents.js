import { getAllEvents } from "../../services/sort-event-data";

export default async function handler(req, res) {
    
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' })
      return
    }
    const {featuredEvents} = await getAllEvents();
    res.status(200).json({featuredEvents});
    return
    
  
  }
