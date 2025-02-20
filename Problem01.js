function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return 'invalid';
    }

    return (money * 1.75) /100;
}