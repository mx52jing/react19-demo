import {Suspense, use, useState} from "react";
import {fetchUserList} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading.jsx";


const UserItem = props => {
    // eslint-disable-next-line react/prop-types
    const { userPromise } = props
    if(!userPromise) return null
    const { results } = use(userPromise)
    return (
        <div>
            {
                results.map(item => {
                    return (
                        <div key={item.email} style={{ display: "grid", gridTemplateColumns: "60px auto", gridTemplateRows: "repeat(2, 1fr)", columnGap: "20px", alignItems: "center", paddingBottom: "10px" }}>
                            <img style={{ width: "60px", height: "60px", gridRow: "1/3" }} src={item.picture.large} alt='' />
                            <span>{item.name.last}</span>
                            <span>{item.email}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

const LoadMoreData = () => {
    const [userPromises, setUserPromises] = useState(() => [fetchUserList(3)])
    const handleLoadMore = () => {
        setUserPromises([...userPromises, fetchUserList(3)])
    }
    return (
        <div>
            <h1>Load More Data</h1>
            {
                userPromises.map((item, index) => {
                    return (
                        <Suspense fallback={<LoadingPanel />} key={`__user_key__${index}`}>
                            <UserItem userPromise={item} key={index}/>
                        </Suspense>
                    )
                })
            }
            <button onClick={handleLoadMore}>加载更多</button>
        </div>
    )
}

export default LoadMoreData