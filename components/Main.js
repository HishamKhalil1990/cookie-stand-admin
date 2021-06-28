export default function Main(props) {
    const jsonObj = {
        "location": props.location,
        "minCustomers": props.minCustPerHr,
        'maxCustomers': props.maxCustPerHr,
        'avgCookies': props.avgCookie,
    }
    const data = JSON.stringify(jsonObj)
    return (
        <main className="container mx-auto">
            <form className="container mx-auto w-4/5 bg-green-300 pb-8 ... mb-8 ... pt-8 ... rounded-lg ..." onSubmit={props.handler}>
                <fieldset>
                    <div className="flex flex-col ...">
                        <div className="text-center ... text-xl my-1.5">
                            {props.title}
                        </div>
                        <div>
                            <div className="container mx-auto w-11/12 my-1.5" >
                                <label class="mr-8 ..." for="location">location</label>
                                <input className="w-4/5" type="text" name="location" />
                            </div>
                        </div>
                        <div className="container mx-auto w-11/12 my-1.5" >
                            <div className="flex space-x-6 ...">
                                <div className="flex flex-col ... w-1/4 text-xs text-center">
                                    <label for="minCustPerHr">Minimum Customers per Hour</label>
                                    <input type="number" name="minCustPerHr" />
                                </div>
                                <div className="flex flex-col ... w-1/4 text-xs text-center">
                                    <label for="maxCustPerHr">Maximum Customers per Hour</label>
                                    <input type="number" name="maxCustPerHr" />
                                </div>
                                <div className="flex flex-col ... w-1/4 text-xs text-center">
                                    <label for="avgCookie">Average Cookies per Sale</label>
                                    <input type="number" step="0.01" name="avgCookie" />
                                </div>
                                <button className="bg-green-500 w-1/4">Create</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
            <div className="flex flex-col ... text-center ... mb-8 ...">
                <placeholder className="mb-8 ...">Report Table Coming Soon...</placeholder>
                <placeholder>{data}</placeholder>
            </div>
        </main>
    )
}

{/* <form onSubmit={props.handler}>
    <fieldset>
        {props.title}
        <label for="location">location</label>
        <input type="text" name="location" />
        <label for="minCustPerHr">Minimum Customers per Hour</label>
        <input type="number" name="minCustPerHr" />
        <label for="maxCustPerHr">Maximum Customers per Hour</label>
        <input type="number" name="maxCustPerHr" />
        <label for="avgCookie">Average Cookies per Sale</label>
        <input type="number" step="0.01" name="avgCookie" />
        <button className="btn btn-green">Create</button>
    </fieldset>
</form> */}