/**
 * Merges class lists into a single string
 */
const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
};

export default classNames;
