const reviews = [
    {
        id: 1,
        name: 'Ученик 1',
        review: 'loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui',
        img: './resources/images/student.jpg'
    },
    {
        id: 2,
        name: 'Ученик 2',
        review: 'loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui',
        img: './resources/images/student.jpg'
    },
    {
        id: 3,
        name: 'Ученик 3',
        review: 'loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui\n' +
            '          loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui loreemoqiwedqowdhqwodhqwduhqwiduhqwiduhwqdqwdqwjdnqwod\n' +
            '          qwdqwhdoqwuhdqwhdqwiudwq\n' +
            '          qwlidhqwuodhqwdui',
        img: './resources/images/student.jpg'
    }
]

export default reviews