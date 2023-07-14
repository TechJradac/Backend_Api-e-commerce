import ItemCard from "./ItemCard"
import Title from "./Title"


const PopularSales = ({value:{title, items}}) => {
    return (
        <div className={`relative container px-[3rem]  max-md:text-center max-md:px-[15px] m-auto `}>
            <Title title={title}/>
            
            <div className={!popularsales ? ` grid grid-cols-4 gap-9 lg:grid-cols-3  md:grid-cols-2 max-md:grid-cols-1  `: `grid grid-cols-3 gap-7 lg:grid-cols-3 md:gap-x-[5rem] md:grid-cols-2 max-md:grid-cols-1`}>
                {
                    items.map((item, index)=>(
                        <ItemCard key={index} values={item} popularsales={popularsales}/>
                    ))
                }
            </div>
        </div>
      )
}

export default PopularSales