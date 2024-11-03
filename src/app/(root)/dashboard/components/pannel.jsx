import Card from "./card"
import { Inter } from "next/font/google";

const inter = Inter(
    {subsets: ['latin']},
    {weight: '400, 500, 600, 700'}
)
  

const Pannel = ({title, cardsMap, dataColor}) => {
    return(
        <>
            <h2 className={`${inter.className} mb-4 text-secondary-blue text-xl font-medium`}>{title}</h2>
            <div className={`${inter.className} grid grid-cols-3 gap-8 mx-4 w-3/4 mb-8`}>
                {Array.from(cardsMap.entries()).map(([key, value]) => (
                    <Card key={key} title={key} data={value} dataColor={dataColor}/>
                ))}
            </div>
        </>
    )
}

export default Pannel