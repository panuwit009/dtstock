export default function ItemSort (
    {sort, setSort}: {
        sort: "asc" | "desc" | null
        setSort: React.Dispatch<React.SetStateAction<"asc" | "desc" | null>>
    }
) {
    const toggleSort = (sortType: "asc" | "desc" | null): void => {
        if (sortType === sort) {
            setSort(null);
        } else {
            setSort(sortType);
        }
    }
    return (
        <>
        <div className="flex gap-2">
            <span>เรียงลำดับจากจำนวน :</span>
            <button
                className={`cursor-pointer ${sort === "desc" ? 'text-gray-900 underline font-semibold' : null}`}
                onClick={()=> toggleSort("desc")}
            >
                มาก
            </button>

            <button
                className={`cursor-pointer ${sort === "asc" ? 'text-gray-900 underline font-semibold' : null}`}
                onClick={()=> toggleSort("asc")}
            >
                น้อย
            </button>
        </div>
        </>
    );
}