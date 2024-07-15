import { Link } from "react-router-dom"
const MenuPanel = () => {
    return (
        <div className="menu-panel" style={{ display: "grid", rowGap: "10px" }}>
            <Link to="/use">1.use</Link>
            <Link to="/suspense">2.suspense</Link>
            <Link to="/update_data">3.update data</Link>
            <Link to="/data_init_update">4.data init and update</Link>
            <Link to="/data_init_update_to_list">5.data init and update to list</Link>
            <Link to="/load_more_data">6.load more data</Link>
            <Link to="/search_case">7.search cases</Link>
            <Link to="/nested_suspense">8.nested suspense</Link>
            <Link to="/ref_usage">9.ref usage</Link>
        </div>
    )
}

export default MenuPanel