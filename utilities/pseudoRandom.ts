const pseudoRandom = (seed: number) => {
    var x = Math.sin(seed++) * 100002;
    return x - Math.floor(x);
};

export default pseudoRandom;
