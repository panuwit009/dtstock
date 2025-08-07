export default function HeadLogin () {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500">
                DTstock Login
            </div>

             <div className="w-24 h-24 rounded-full bg-cover bg-center drop-shadow-sm/30 transform transition duration-300 hover:rotate-6 hover:scale-110"
                    style={{ backgroundImage: "url('/img/logo.webp')" }}>
            </div>
            
            <div className="text-gray-600 text-sm">Use your Gmail and password to sign in.</div>
          </div>
    )
}