require('../db/mongoose')
const Event = require('../models/event')

let populateEvents = async () => {
    try {
        await Event.create({
            eventCode: '001',
            day: '1',
            start: '1-12:30',
            end: '1-13:30',
            title: 'Event 1',
            description: 'Bla',
            image: 'link',
            seats: 20,
            maxSeats: 50,
            category: 'T',
            isSeminar: true,
            teamSize: 1,
            isTeamSizeStrict: true,
            entryFee: 200,
            prizeMoney: 100,
            registered: []
        },
        {
            eventCode: '002',
            day: '2',
            start: '2-9:00',
            end: '3-9:00',
            title: 'Event 2',
            description: 'Bla',
            image: 'link',
            seats: 10,
            maxSeats: 50,
            category: 'C',
            isSeminar: true,
            teamSize: 5,
            isTeamSizeStrict: false,
            entryFee: 200,
            prizeMoney: 100,
            registered: []
        },
        {
            eventCode: '003',
            day: '3',
            start: '3-10:00',
            end: '3-11:00',
            title: 'Event 3',
            description: 'Bla',
            image: 'link',
            seats: 25,
            maxSeats: 50,
            category: 'F',
            isSeminar: true,
            teamSize: 7,
            isTeamSizeStrict: true,
            entryFee: 200,
            prizeMoney: 100,
            registered: []
        },
        {
            eventCode: '004',
            day: '1',
            start: '1-11:00',
            end: '3-11:00',
            title: 'Event 4',
            description: 'Bla',
            image: 'link',
            seats: 10,
            maxSeats: 50,
            category: 'C',
            isSeminar: false,
            teamSize: 1,
            isTeamSizeStrict: true,
            entryFee: 200,
            prizeMoney: 100,
            registered: []
        },
        {
            eventCode: '005',
            day: '2',
            start: '2-11:00',
            end: '2-12:00',
            title: 'Event 5',
            description: 'Bla',
            image: 'link',
            seats: 35,
            maxSeats: 50,
            category: 'T',
            isSeminar: true,
            teamSize: 5,
            isTeamSizeStrict: false,
            entryFee: 200,
            prizeMoney: 100,
            registered: []
        },
        {
            eventCode: '006',
            day: '3',
            start: '3-14:00',
            end: '3-15:00',
            title: 'Event 6',
            description: 'Bla',
            image: 'link',
            seats: 40,
            maxSeats: 50,
            category: 'F',
            isSeminar: false,
            teamSize: 7,
            isTeamSizeStrict: true,
            entryFee: 200,
            prizeMoney: 100,
            registered: []
        })
    } catch (e) {
        console.log(e)
    }
}

(async function () {
    await populateEvents()
})()
