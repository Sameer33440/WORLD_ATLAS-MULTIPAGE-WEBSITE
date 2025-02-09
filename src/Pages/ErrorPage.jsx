import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage=()=>
{const error=useRouteError();
    console.log(error)

    return (
        <div> 
            <h1> Oops Error Occurued</h1>
            {error && <p> {error.status},
                {error.data}</p>}
                <NavLink to="/"><button> GO BACK
                    </button></NavLink>

        </div>
    )
}