import { useState } from 'react'
import { hours } from "../data"

export default function Main(props) {

    const [location,setLocation] = useState("");
    const [minCustPerHr,setMinCustPerHr] = useState("");
    const [maxCustPerHr,setMaxCustPerHr] = useState("");
    const [avgCookie,setAvgCookie] = useState("");
    const [report,setReport] = useState("");
    const [summation,setSummation] = useState("")

    function locHandler(event){
        setLocation(event.target.value);
    }
    function minHandler(event){
        setMinCustPerHr(event.target.value);
    }
    function maxHandler(event){
        setMaxCustPerHr(event.target.value);
    }
    function avgHandler(event){
        setAvgCookie(event.target.value);
    }

    function dataSum(){
        let cummulative = 0
        const result = []
        for(let i = 0; i < 14; i++){
            for(let j = 0; j < report.length; j++){
                cummulative += report[j].cookies[i]
            }
            result.push(cummulative)
            cummulative = 0
        }
        setSummation(
            result
        )
    }

    function onCreate(event){
        event.preventDefault();
        let custmer;
        let cookie;
        const data = {
            id:report.length + 1,
            location:location,
            cookies:[]
        }
        for (let i = 0; i < 14; i++){
            let rand  = Math.random()
            let sum = rand*(parseInt(maxCustPerHr)-parseInt(minCustPerHr)+1) 
            sum += parseInt(minCustPerHr)
            custmer = Math.floor(parseInt(sum))
            cookie = custmer*parseFloat(avgCookie)
            data.cookies.push(Math.floor(cookie))
        }
        for(let i = 0; i < 2; i++){
            if(i == 0)
            setReport(
                [...report,data]
            )
            else{
                dataSum();
            }
            console.log(report)
        }
      }

    return (
        <main className="container mx-auto">
            <form className="container mx-auto w-4/5 bg-green-300 pb-8 ... mb-8 ... pt-8 ... rounded-lg ..." onSubmit={onCreate}>
                <fieldset>
                    <div className="flex flex-col ...">
                        <div className="text-center ... text-xl my-1.5 pb-4">
                            {props.title}
                        </div>
                        <div>
                            <div className="container mx-auto w-11/12 my-1.5" >
                                <label className="mr-8 ..." for="location">location</label>
                                <input onChange={locHandler} className="w-4/5" type="text" name="location" />
                            </div>
                        </div>
                        <div className="container mx-auto w-11/12 my-1.5" >
                            <div className="flex space-x-6 ...">
                                <div className="flex flex-col ... w-1/4 text-xs text-center bg-green-100 p-2 rounded-lg">
                                    <label for="minCustPerHr">Minimum Customers per Hour</label>
                                    <input onChange={minHandler} type="number" name="minCustPerHr" />
                                </div>
                                <div className="flex flex-col ... w-1/4 text-xs text-center bg-green-100 p-2 rounded-lg">
                                    <label for="maxCustPerHr">Maximum Customers per Hour</label>
                                    <input onChange={maxHandler} type="number" name="maxCustPerHr" />
                                </div>
                                <div className="flex flex-col ... w-1/4 text-xs text-center bg-green-100 p-2 rounded-lg">
                                    <label for="avgCookie">Average Cookies per Sale</label>
                                    <input onChange={avgHandler} type="number" step="0.01" name="avgCookie" />
                                </div>
                                <button className="bg-green-500 w-1/4 rounded-lg">Create</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
            <div className="flex flex-col ... text-center ... mb-8 ... container mx-auto w-4/5">
                {(report.length == 0) ? 
                <placeholder>No Cookie Stands Available</placeholder> :
                <table>
                    <thead>
                        <tr key="0">
                            <th>
                                Location
                            </th>
                            {hours.map(hour => (<th>{hour}</th>))}
                            <th>
                                Totals
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.map(data => (
                            <tr key={data.id}>
                                <td>{data.location}</td>
                                {data.cookies.map(cookie => (<td>{cookie}</td>))}
                                <td>{data.cookies.reduce((acc, curr) => {acc = acc+curr; return acc},0)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr key={report.length + 1}>
                            <td>Totals</td>
                            {summation.map(sum => (<td>{sum}</td>))}
                        </tr>
                    </tfoot>
                </table>
                }  
            </div>
        </main>
    )
}


