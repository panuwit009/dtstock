export const qrCode = ( <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"
className="w-10 h-10">
    <rect fill="none" height="256" width="256"/><rect fill="none" height="64" rx="8" stroke="#000"
    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" width="64" x="48" y="48"/>
    <rect fill="none" height="64" rx="8" stroke="#000" strokeLinecap="round" strokeLinejoin="round"
    strokeWidth="16" width="64" x="48" y="144"/><rect fill="none" height="64" rx="8" stroke="#000"
    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" width="64" x="144" y="48"/>
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"
    x1="144" x2="144" y1="144" y2="176"/><polyline fill="none" points="144 208 176 208 176 144"
    stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line fill="none"
    stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="176" x2="208"
    y1="160" y2="160"/><line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round"
    strokeWidth="16" x1="208" x2="208" y1="192" y2="208"/>
</svg> );

export const leftArrow = ( <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"
className="w-8 h-8 fill-[#73ACF6]">
    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4
    44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7
    24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
</svg> );

export const Circle = ( { className }: { className?: string;}) => {
    return (
    <svg className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" />
    </svg>
    );
};

export const logoutIcon = (
<svg fill="none" height="24" viewBox="0 0 20 24" width="24"xmlns="http://www.w3.org/2000/svg">
    <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315
    20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
    stroke="#ffffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg> );

export const magnify = (
    <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
    </svg>
);

export const Info = ({ className }: { className?: string }) => {
    return (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        x="0px" y="0px"
        viewBox="0 0 128 128"
    >
        <path d="M 64 6 C 32 6 6 32 6 64 C 6 96 32 122 64 122 C 96 122 122 96 122 64 C 122 32 96 6 64 6 z M 64 12 C 92.7 12 116 35.3 116 64 C 116 92.7 92.7 116 64 116 C 35.3 116 12 92.7 12 64 C 12 35.3 35.3 12 64 12 z M 64 29 C 58.5 29 54 33.5 54 39 C 54 44.5 58.5 49 64 49 C 69.5 49 74 44.5 74 39 C 74 33.5 69.5 29 64 29 z M 64 35 C 66.2 35 68 36.8 68 39 C 68 41.2 66.2 43 64 43 C 61.8 43 60 41.2 60 39 C 60 36.8 61.8 35 64 35 z M 64 58 C 58.5 58 54 62.5 54 68 L 54 92 C 54 97.5 58.5 102 64 102 C 69.5 102 74 97.5 74 92 L 74 68 C 74 62.5 69.5 58 64 58 z M 64 64 C 66.2 64 68 65.8 68 68 L 68 92 C 68 94.2 66.2 96 64 96 C 61.8 96 60 94.2 60 92 L 60 68 C 60 65.8 61.8 64 64 64 z"></path>
    </svg>
    );
};

export const PackageIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 21 21"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(3 3)"
            >
            <path d="m8.492 1.067 5 2.857c.623.356 1.008 1.019 1.008 1.736v4.679c0 .718-.385 1.38-1.008 1.736l-5 2.857c-.615.351-1.37.351-1.985 0l-5-2.857c-.623-.356-1.008-1.019-1.008-1.736v-4.679c0-.718.385-1.38 1.008-1.736l5-2.857c.615-.351 1.37-.351 1.985 0z"/>
            <path d="m11 6.5-7-4"/>
            <path d="m1 5 5.552 2.989c.592.319 1.304.319 1.896 0l5.552-2.989"/>
            <path d="m7.5 8.5v6.5"/>
            </g>
        </svg>
    );
};

export const CalendarIcon = ({ className }: { className?: string }) => {
    return (
        <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
    );
};

export const ChartIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 10V17M7 13V17M19 5V17M11 7V17"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const EditIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h32v32H0z" />
                <path
                    d="M17.0058746 2c.5522848 0 1 .44771525 1 1 0 .51283584-.3860402.93550716-.8833788.99327227l-.1166212.00672773H7
                    c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721L4 6v18c0 1.5976809 1.24891996 2.9036609 
                    2.82372721 2.9949073L7 27h18c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272L28 24v-9.9962769c0-.5522847.4477153-1 
                    1-1 .5128358 0 .9355072.3860402.9932723.8833789L30 14v9.9962769c0 2.6887547-2.1223067 4.8818181-4.7831104 
                    4.9953805L25 29H7c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104L2 24V6c0-2.6887547 
                    2.12230671-4.88181811 4.78311038-4.99538049L7 1h10.0058746zm11.6814522 1.99910108c1.1715728 
                    1.17157287 1.1715728 3.07106781 0 4.24264069l-9.6830326 9.68303263c-.5243715.5243714-1.1588178.9255367-1.8573747 
                    1.1744323l-3.6013076 1.2831446c-.5202485.1853643-1.0922608-.0861129-1.2776251-.6063614-.0795311-.2232142-.0772135-.4674177.0065399-.6890821l1.4674833-3.8838907c.2006363-.5310108.5119964-1.0132364.9133862-1.4146261l9.7892899-9.78928992c1.1715729-1.17157288 3.0710678-1.17157288 4.2426407 0zm-2.7412063 1.3365072-.0872209.07770636-9.7892899 
                    9.78928996c-.1605559.1605559-.2923023.3469792-.3899415.5510651l-.0667516.1562479-.7037369 
                    1.8639532 1.5664761-.5586506c.3492785-.1244478.6718442-.3123413.9517373-.553589l.1626875-.1510704 
                    9.6830326-9.6830326c.3905243-.39052429.3905243-1.02368927 0-1.41421356-.3626297-.3626297-.9344751-.38853182-1.3269927-.07770636z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
}

export const QrCodeIcon = ({ className }: { className?: string }) => {
    return (
        <svg 
            className={className || "w-6 h-6 text-gray-900/50"}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="3" width="5" height="5"/>
            <rect x="16" y="3" width="5" height="5"/>
            <rect x="3" y="16" width="5" height="5"/>
            <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
            <path d="M21 21v.01"/>
            <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
            <path d="M3 12h.01"/>
            <path d="M12 3h.01"/>
            <path d="M12 16v.01"/>
            <path d="M16 12h1"/>
        </svg>
    );
};

export const CloseTab = ({ className }: { className?: string; }) => {
    return (
        <svg className={className || "w-6 h-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export const Camera = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" className="w-8 h-8">
            <path d="M4,10a2,2,0,1,0,2,2A2,2,0,0,0,4,10Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,4,13Zm8.5-3A5.5,5.5,0,1,0,18,15.5,5.51,5.51,0,0,0,12.5,10Zm0,10A4.5,4.5,0,1,1,17,15.5,4.5,4.5,0,0,1,12.5,20Zm10-12H22V7.5A1.5,1.5,0,0,0,20.5,6h-1A1.5,1.5,0,0,0,18,7.5V8h-.78a.5.5,0,0,1-.47-.34L16.2,6a1.5,1.5,0,0,0-1.42-1H10.22A1.5,1.5,0,0,0,8.8,6L8.25,7.66A.5.5,0,0,1,7.78,8H7V7.5A1.5,1.5,0,0,0,5.5,6h-2A1.5,1.5,0,0,0,2,7.5V8H1.5A1.5,1.5,0,0,0,0,9.5v12A1.5,1.5,0,0,0,1.5,23h21A1.5,1.5,0,0,0,24,21.5V9.5A1.5,1.5,0,0,0,22.5,8ZM19,7.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5V8H19ZM3,7.5A.5.5,0,0,1,3.5,7h2a.5.5,0,0,1,.5.5V8H3Zm20,14a.5.5,0,0,1-.5.5H1.5a.5.5,0,0,1-.5-.5V9.5A.5.5,0,0,1,1.5,9H7.78A1.5,1.5,0,0,0,9.2,8l.54-1.63A.5.5,0,0,1,10.22,6h4.56a.5.5,0,0,1,.47.34L15.8,8a1.5,1.5,0,0,0,1.42,1H22.5a.5.5,0,0,1,.5.5ZM11.5,8h2a.5.5,0,0,0,0-1h-2a.5.5,0,0,0,0,1Zm1,4A3.5,3.5,0,1,0,16,15.5,3.5,3.5,0,0,0,12.5,12Zm0,6A2.5,2.5,0,1,1,15,15.5,2.5,2.5,0,0,1,12.5,18Zm7-8a.5.5,0,1,0,.5.5A.5.5,0,0,0,19.5,10Z"></path>
        </svg>
    );
};

export const Plus = () => {
    return (
        <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
        </svg>
    );
}