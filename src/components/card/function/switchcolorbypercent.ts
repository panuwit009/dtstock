export const switchcolorbypercent = (amountPercent: number) => {
    switch (true) {
        case amountPercent <= 16.68 :
            return "border-red-600";
        case amountPercent > 16.68 && amountPercent <= 33.4 :
            return "border-orange-400";
        case amountPercent > 33.4 && amountPercent <= 50 :
            return "border-yellow-400";
        case amountPercent > 50 :
            return "border-green-400";
            default:
                return null;
    }
}