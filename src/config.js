const myDay = [
    {
        type: 'time',
        desciption: 'When did you wake up?',
        id: 'wakeUpTime'
        },
    {
        type: 'boolean',
        id: 'morningCardio',
        desciption: 'Did you go out in the morning?',
        ifYes: [
            {
                description: 'What did you do?',
                type: 'dropdown',
                options: ['Running', 'Walking', 'Cycling']
            },
            {   
                description: 'How much time did you take?',
                type: 'timeRange'
            }
        ],
        ifNo: []
    },
    {
        type: 'boolean',
        id: 'creativeActivity',
        describe: 'Did you do anything which helps you to reach your goal?',
        ifYes: [
            {
                type: 'dropDown',
                desciption: 'What did you do?',
                options: ['I read!', 'I wrote!', 'I coded!']
            },
            {
                type: 'timeRange'
            }
        ],
        ifNo: []

    },
    {
        type: 'boolean',
        id: 'guitarPractice',
        describe: 'Did you practice guitar?',
        ifYes: [
            {
                type: 'timeRange',
                desciption: 'How much time did you practice',
            },
            {
                type: 'text',
                desciption: 'What did you practice?'
            }
        ],
        ifNo: []
    },
    {
        type: 'time',
        id: 'reachOffice',
        desciption: 'When did you reach office?'
    },
    {
        type: 'text',
        id: 'workSlot1',
        description: 'What did you do in work slot 1(9:30 am to 11am)?'
    },
    {
        type: 'text',
        id: 'workSlot2',
        desciption: 'What did you do in work slot 2(11:30 am to 1:15pm)?'
    },
    {
        type: 'text',
        id: 'lunchBreak',
        description: 'What did you do in your lunch break(1:15 pm to 2pm)'
    },
    {
        type: 'text',
        id: 'workSlot3',
        describe: 'What did you do in work slot 3(2:15 pm to 3:30 pm)'
    },
    {
        type: 'text',
        id: 'workSlot4',
        describe: 'What did you do in work slot 4(4pm to 6pm)'
    },
    {
        type: 'boolean',
        desciption: 'Did you work out?',
        id: 'workOut',
        ifYes: [
            {
                type: 'timeRange',
                'description': 'How much time did you work out?'
            }
        ],
        ifNo: []
    },
    {
        type: 'text',
        id: 'learntToday',
        desciption: 'What did you learn today?'
    }
]

export default myDay;