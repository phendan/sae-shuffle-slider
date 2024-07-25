import randomNumber from './randomNumber';

const sattoloCycle = <T>(items: T[]) => {
    const shuffled = [...items];

    let i = shuffled.length;

    while (i > 1) {
        i = i - 1;
        const j = randomNumber([0, i - 1]);
        [shuffled[j], shuffled[i]] = [shuffled[i], shuffled[j]];
    }

    return shuffled;
};

export default sattoloCycle;
