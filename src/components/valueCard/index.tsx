
interface IProps{
    data:{
        text: string;
        percent:number;
        value:number;
    }
}

const ValueCard = ({data}:IProps) => {
    const lineConvert = () => {
        if(data.percent < 25 && data.percent > 0){
            return "../../../src/assets/vector4.png"
        }
        else if(data.percent < 0){
            return "../../../src/assets/vector5.png"
        }
        else{
            return "../../../src/assets/vector6.png"
        }
    }
    const colorConvert = () => {
        if(data.percent < 25 && data.percent > 0){
            return "#FF8901"
        }
        else if(data.percent < 0){
            return "#FF392B"
        }
        else{
            return "#279F51"
        }
    }
    return (
        <div className="bg-white rounded-md px-1 font-inter hover:scale-110">
            <div className="flex flex-row">
                <div className="basis-1/2 m-5 text-lm font-medium leading-6" style={{color:"#8E95A9"}}>{data.text}</div>
                <div className="basis-1/2 m-5 text-lm font-bold leading-6" style={{color:`${colorConvert()}`}}>{
                    (data.percent > 0) ? <>+</>:<></>
                } {data.percent} %</div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 m-5 text-2xl font-semibold leading-10">${data.value}</div>
                <div className="basis-1/2 m-5">
                    <img src={lineConvert()} alt="line" />
                </div>
            </div>
        </div>
    )
}

export default ValueCard