export default function Input ({
  label="โปรดกรอกชื่อ",
  placeholder="...",
  bg="bg-red-400",
  colspan="lg:col-span-4",
}: Readonly<{
  label?: React.ReactNode;
  placeholder?: string;
  bg?: React.ReactNode;
  colspan?: React.ReactNode;
}>) {
    return (
        <div className={`${colspan} space-y-3`}>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${bg}`}></span>
                <span className="font-semibold text-gray-700 text-lg">{label}</span>
            </div>

            <input className="bg-gray-100/30 border-2 border-gray-300 rounded-2xl w-full p-4 
                                placeholder:font-semibold placeholder:text-gray-400
                              focus:border-black focus:ring-0 outline-none
                                transition-all duration-300" 
                      type="text" 
                      name="" 
                      id="" 
                      placeholder={placeholder}
            />
        </div>
    )

}