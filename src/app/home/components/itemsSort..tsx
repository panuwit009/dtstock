export default function ItemsSort (
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
            เรียงลำดับจากจำนวน:

            <button
            className={`p-2 cursor-pointer ${sort === "desc" ? 'underline' : null}`}
            onClick={()=> toggleSort("desc")}>
                มาก
            </button>

            <button
            className={`p-2 cursor-pointer ${sort === "asc" ? 'underline' : null}`}
            onClick={()=> toggleSort("asc")}>
                น้อย
            </button>
        </>
    );
}