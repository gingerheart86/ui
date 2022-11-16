import Airtable, { apiKey } from 'airtable';

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_KEY,
});



var base = Airtable.base("app04sUAGh69msJ75");



export async function getAirtableEvents() {
    let recordsArray = [];

    await base('eventsTemp').select({
        view: "Grid view"
    }).eachPage((records, fetchNextPage) => {
        recordsArray = [...recordsArray, ...records];
        fetchNextPage();
    })
        .catch(error => { console.error(error); return false; })
        const events = recordsArray.map(function(event){
        const rawEvent = event.fields;
        rawEvent.recordId = event.id
        return rawEvent;
    });
    return events;
}



export async function airtablePostEvent(eventData) {
    const {name, email, eventName, eventDate, eventWebsite, startTime, endTime, country} = eventData;

    // if (!title || !date || !link || !image) {
    //     console.log("missing argument for airtable postEvent")
    //     return;
    // }

    await base('eventsV2').create({
        "fldkM9PGqYhK7f9YG": name,
        "fldHYJQFIlLBE7c4s": email,
        "fld7b4UKGzyRzSmDX": eventName,
        "fldbno5UhtKOX9dxg": eventDate,
        "fldxlf9Fm4Q2NeVYA": eventWebsite,
        "fldRuyjTJp3ed99av": startTime,
        "fldQOBGQVwLKjkMNH": endTime,
        "fldwVxc8ok8CGRqwW": country
      }, function(err, record) {
        if (err) {
          console.error(err);
          return err;
        }
       return record.getId();
      });
}
