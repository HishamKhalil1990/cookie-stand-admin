import Link from 'next/link'

export default function Header(props) {

    function reloadPage(){
        window.location.reload();
    }

    return (
        <header className="bg-green-300 text-2xl mb-8 ... pt-6 ... pb-8 ... flex flex-row justify-around">
            <h1 className="ml-4 ... font-bold">{props.header}</h1>
            <div className="flex flex-row justify-center">
                <Link href="">
                    <a className="bg-green-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-xl" >{props.username}</a>
                </Link>
                <button onClick={reloadPage} className="bg-green-600 text-gray-100 rounded-lg mr-4 pb-1 pl-1 pr-1 text-xl" >Sign Out</button>
                <Link href={props.path}>
                    <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-xl" >{props.page}</a>
                </Link>
            </div>
        </header>
    )
}