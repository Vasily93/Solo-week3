function findById(array, id) {
    console.log(array);
    for(let index = 0; index < array.length; index++) {
        const item = array[index];
        if(item.id === id) {
            return item;
        }
    }

    return null;
}

export default findById;