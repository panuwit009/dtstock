export const cardsSwitchPercentColor = (amountPercent: number) => {
    switch (true) {
        case amountPercent <= 10 :
            return "red-600";
        case amountPercent > 10 && amountPercent <= 20 :
            return "red-500";
        case amountPercent > 20 && amountPercent <= 30 :
            return "orange-400";
        case amountPercent > 30 && amountPercent <= 40 :
            return "orange-400";
        case amountPercent > 40 && amountPercent <= 50 :
            return "yellow-600";
        case amountPercent > 50 && amountPercent <= 60 :
            return "yellow-400";
        case amountPercent > 60 && amountPercent <= 70 :
            return "lime-400";
        case amountPercent > 70 && amountPercent <= 80 :
            return "lime-600";
        case amountPercent > 80 && amountPercent <= 90 :
            return "green-400";
        case amountPercent > 90 :
            return "green-400";
            default:
                return null;
    }
}