const getTime = (time) => {
    const day = parseInt(time / 86400);
    const remainingSeconds = parseInt(time % 86400);
    const hours = parseInt(remainingSeconds / 3600);
    const remainingSeconds2 = parseInt(time % 3600);
    const minutes = parseInt(remainingSeconds2 / 60); 
    return `${day} day ${hours} hours ${minutes} minutes ago`;
}

// console.log(getTime( 90060));