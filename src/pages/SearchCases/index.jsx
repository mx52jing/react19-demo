import {Suspense, useState} from "react";
import {fetchUserWithCancel} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading";
import UserPanel from "@/components/UserPanel";

const SearchCases = () => {
    const [userPromise, setUserPromise] = useState(() => fetchUserWithCancel())
    const handleInputChange = (event) => {
        const value = event.target.value
        const len = value.length % 10
        userPromise.abort()
        setUserPromise(fetchUserWithCancel(len))
    }
    return (
        <div style={{ marginTop: "20px" }}>
            <h1>Search cases</h1>
            <input type="text" onChange={handleInputChange}/>
            <div style={{ marginTop: "20px" }}>
                <Suspense fallback={<LoadingPanel />}>
                    <UserPanel userPromise={userPromise} />
                </Suspense>
            </div>
        </div>
    )
}

export default SearchCases