import { useRouteError } from "react-router-dom";


const Error = () =>{
const err = useRouteError();

    return (
        <div>
            <h2>Opps !!!</h2>
            <h5>Somthing Went wrong !!!!</h5>
            <h5>{err.status} : {err.statusText}</h5>
        </div>
    )
}

export default Error ;