export const startsComparator = (a, b) => {
    const arating = a.stars || 0;
    const brating = b.stars || 0;

    if (arating > brating) return -1;
    if (arating == brating) return 0;

    return 1;
};