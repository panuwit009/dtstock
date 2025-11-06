export function Header () {
    return (
        <header 
            className="flex flex-col items-center
            space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-4"
        >
            <div
                className="
                text-3xl 2xl:text-4xl
                font-bold xl:font-extrabold
                text-transparent bg-clip-text
                bg-gradient-to-r from-sky-500
                via-sky-600 to-sky-500"
            >
                DTstock | Login
            </div>
            <div
                className="
                w-20 h-20 2xl:w-24 2xl:h-24
                rounded-full bg-cover bg-center transform transition duration-300 hover:rotate-6 hover:scale-110
                bg-[url('/img/logo.webp')]"
            />
            <div className="text-gray-600 text-sm">Use your Email and password to sign in.</div>
        </header>
    );
}