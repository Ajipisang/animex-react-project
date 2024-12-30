function YearContent() {
  return (
    <>
      <div className="w-full items-center mt-2 flex h-[60px]  gap-1">
        <div className="w-[90px] h-full rounded-lg p-2 border-[2px] border-black/50">
          <input
          type="text"
            className="w-full placeholder:text-lg text-center h-full text-black text-lg bg-transparent outline-none"
            placeholder="ex : 2020"
          ></input>
        </div>

        <div className="w-[24px] rounded-lg h-[3px] bg-black/40"></div>

        <div className="w-[90px] h-full rounded-lg p-2 border-[2px] border-black/50">
          <input
           type="text"
            className="w-full placeholder:text-lg text-center h-full text-black text-lg bg-transparent outline-none"
            placeholder="ex : 2022"
          ></input>
        </div>
      </div>
    </>
  );
}
export default YearContent;
