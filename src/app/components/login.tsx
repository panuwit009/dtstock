export default function Login () {
    return (
        <div className="bg-sky-500 h-1000 w-1000">
            <div className="bg-lime-500 h-500 w-500">
                <div className="text-black text-lg font-bold">Gmail</div>
                <input className="px-2 py-1 rounded-lg bg-white border-2 border-gray-200 
                focus:border-blue-400 hover:border-blue-500 outline-none text-black" type="text"/>
                <div className="text-black text-lg font-bold">Password</div>
                <input className="px-2 py-1 rounded-lg bg-white border-2 border-gray-200 
                focus:border-blue-400 hover:border-blue-500 outline-none text-black" type="password"></input>
                <br></br>
                <button className="bg-black text-white w-52 px-6 py-3 rounded-lg mt-2 font-bold 
                transition duration-500 hover:scale-95 hover:bg-gradient-to-b from-black/50 to-gray-500/40">Login</button>             
            </div>
        </div>
    );
}