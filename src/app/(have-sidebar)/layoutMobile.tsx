export default function LayoutMobile ({ children }: { children: React.ReactNode; }) {
    return (
        <div 
            className={`flex flex-col w-dvw h-dvh bg-yellow-100`}
        >
            <header className="flex shrink-0 bg-red-100 h-20">
                123
            </header>
            <main className="flex-1 overflow-auto px-4">
                { children }
            </main>
            <nav
                className="h-15 flex shrink-0 justify-center items-center bg-green-100 rounded-t-4xl"
            >
                asd
            </nav>
        </div>
    );
}