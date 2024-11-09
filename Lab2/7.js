const fn = () => {
    const obj1 = {name: 'Ahmed'}
    let obj2 = {name: 'Ahmed'}
    obj1.name = 'Abdulakh'
    obj2.name = 'Abdulakh'
    // obj1 = {name: 'Abdulakh'} // ===> Error,because we try to change constant
    obj2 = {name: 'Abdulakh'}
}
fn()
