import { Line, LineConfig } from "@ant-design/plots";
import ValueCard from "../../valueCard"

const TrafficGraphModal = () => {
    const data = [
        {
            "name": "Data",
            "day": "16",
            "gdp": 1211346869605.24
        },
        {
            "name": "Data",
            "day": "18",
            "gdp": 1339395718865.3
        },
        {
            "name": "Data",
            "day": "20",
            "gdp": 1470550015081.55
        },
        {
            "name": "Data",
            "day": "24",
            "gdp": 1660287965662.68
        },
        {
            "name": "Data",
            "day": "26",
            "gdp": 1211346869605.24
        },
        {
            "name": "Data",
            "day": "28",
            "gdp": 1339395718865.3
        },
        {
            "name": "Data",
            "day": "30",
            "gdp": 1470550015081.55
        },
        
    ]
    const config: LineConfig = {
        data,
        xField: 'day',
        yField: 'gdp',
        seriesField: 'name',
        color:["#FF8901","#FF392B","#2F80ED"],
        scrollbar: {
            type: 'horizontal',
          },
        yAxis: {
            label: {
                formatter: (v: any) => ``,
            },
        },
        legend: false,
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };
    const percentsData = [
        {
            text: "Store Visists",
            percent: 22,
            value: 8950,
            isPercent: false,
            isPrice: false
        },
        {
            text: "Vistors",
            percent: -25,
            value: 1520,
            isPercent: false,
            isPrice: false
        },
    ]
    return (
        <div className="px-5 py-5">
            <div className="flex justify-around">
                <div className="text-xl font-medium m-5 leading-8">
                    Traffic
                </div>
                <button className='flex flex-row m-5'>
                    <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{ color: "#555F7E" }}>More </div>
                    <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
            </div>
            <div className="flex justify-around">
                {percentsData.map((item: any, key: number) => {
                    return (
                        <div key={key} className=" m-5">
                            <ValueCard data={item} />
                        </div>
                    )
                })}
            </div>
            <div style={{ color: "#8E95A9" }} className="font-medium text-sm">
                Jan 16 - Jan 30 store visits chart
            </div>
            <div style={{ color: "#8E95A9" }} className="font-medium text-sm">
                <Line {...config} />
            </div>
        </div>
    )
}

export default TrafficGraphModal