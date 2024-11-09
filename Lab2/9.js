usersData = [
    {name: 'Ahmed', phone: 8870050505},
    {name: 'Misha', phone: 88005553535},
    {name: 'Ibragim', phone: 1232332101},
    {name: 'Mr.Johnson', phone: 1111},
]
const findPhoneByName = (name) => {
    for (const obj of usersData ){
        if (name === obj.name) return obj.phone
    }
}