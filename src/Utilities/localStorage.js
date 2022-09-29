const addToDb = id => {
    let breakTime = {};

    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }

    const quantity = breakTime[id];
    if (quantity) {
        const newQuantity = quantity;
        breakTime[id] = newQuantity;
    }
    else {
        breakTime[id] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const getStoredTime = () => {
    let breakTime = {};
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }
    return breakTime;
}

export { addToDb, getStoredTime }

