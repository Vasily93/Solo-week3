//writing a function
function makeUser(formData)  {
    const user = {
        animal: formData.get('animal'),
        name: formData.get('name'),
        life: 100,
        food: 0
    };
    return user;
}
export default makeUser;