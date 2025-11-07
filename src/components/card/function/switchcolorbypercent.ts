export const switchcolorbypercent = (amountPercent: number) => {
    switch (true) {
        case amountPercent <= 25 :
            return "border-red-600";
        case amountPercent > 25 && amountPercent <= 50 :
            return "border-orange-400";
        case amountPercent > 50 && amountPercent <= 75 :
            return "border-yellow-400";
        case amountPercent > 75 :
            return "border-green-400";
            default:
                return null;
    }
}