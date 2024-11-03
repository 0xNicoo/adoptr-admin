const Card = ({title, data, dataColor = 'text-green-600'}) => {
    return(
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <span className="text-md">{title}</span>
            <span className={`${dataColor} text-4xl font-bold`}>{data}</span>
        </div>
    )
}

export default Card