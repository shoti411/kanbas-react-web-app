// component going to fetch user and store it

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import setCurrentUser from "./reducer";

function CurrentUser({children}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const fetchUser = async () => {
        try {
            const user = await clientInformation.account();
            setUser(user);
            dispatch(setCurrentUser(user));
            setLoading(false);
        } catch (error) {}
    };
    
    useEffect(() => {
        fetchUser();
    })
    return ( 
        <>
            <h1>Logged In as {JSON.stringify(user, null, 2)}
            {!loading && children}
            </h1>
        </>
     );
}

export default CurrentUser;