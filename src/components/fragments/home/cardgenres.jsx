
function CardGenres({ item,index }) {
    const handleColor=(index)=>{
        if(index%4===0){
            return "text-amber-600"
        }
        if(index%4===1){
            return "text-red-600"
        }

        if(index%4===2){
            return "text-purple-500"
        }

        else{
            return "text-slate-200"
        }
    }
  return (
    <div className={`w-auto shadow-lg h-[40px] relative flex rounded-xl ${handleColor(index)} capitalize px-5 text-sm overflow-hidden bg-slate-700 z-10`}>
        <h1 className="m-auto z-20">{item.name}</h1>
    </div>
  );
}

export default CardGenres;
