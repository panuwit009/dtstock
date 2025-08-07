export default function HeadLogin () {
    return (
        <div className="flex flex-col items-center space-y-4">
          <div className="text-3xl font-bold text-sky-600">DTstock Login</div>
            <div className="w-24 h-24 rounded-full bg-gray-100 bg-cover bg-center drop-shadow-sm/30"
                    style={{ backgroundImage: "url('/img/logo.webp')" }}>
            </div>
            <div className="text-gray-600 text-sm">Use your Gmail and password to sign in.</div>
          </div>
    )
}