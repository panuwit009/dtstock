

export default function Header ({
  Title, 
  decription,
  Font="font-medium",
  decription2
}: Readonly<{
  decription: React.ReactNode;
  Title: React.ReactNode;
  Font?: React.ReactNode;
  decription2?: React.ReactNode;
}>) {
    return (
            <div className="flex items-center bg-gradient-to-br from-blue-600 via-sky-600 to-blue-700 px-8 py-7 gap-4 lg:rounded-t-xl">
                  <div className="bg-white/20 rounded-2xl p-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>             
                </div>
                <div>
                    <h2 className={`text-3xl text-white ${Font}`}>{Title}</h2>
                    <p className="text-white">{decription}</p>
                    {decription2 &&
                    <p className="text-white">{decription2}</p>
                    }
                </div>
            </div>
    )
}