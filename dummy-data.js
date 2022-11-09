const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Collaborative Research & STEPS workshops',
      website: 'https://www.desciboston.com/',
      description:
        'EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo ',
      date: '2021-05-12',
      image: 'images/coding-event.png',
      country: 'DE',
      isFeatured: true,
    },
    {
      id: 'e1',
      title: 'DeSci Boston',
      website: 'https://www.desciboston.com/',
      description:
        'EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.png',
      country: 'DE',
      isFeatured: true,
    },
    {
      id: 'e1',
      title: 'DeSci Boston',
      website: 'https://www.desciboston.com/',
      description:
        'EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.png',
      country: 'DE',
      isFeatured: true,
    },    {
      id: 'e1',
      title: 'DeSci Boston',
      website: 'https://www.desciboston.com/',
      description:
        'EVENT1: veryone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.png',
      country: 'DE',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
  