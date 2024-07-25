const randomNumber = (range?: [number, number]) => {
    const [min = 0, max = Number.MAX_VALUE] = range ?? [];
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
};

export default randomNumber;
