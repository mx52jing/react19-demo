import { Link } from "react-router-dom"
const MenuPanel = () => {
    return (
        <div className="menu-panel" style={{ display: "grid", rowGap: "10px" }}>
            <Link to="/use">1.use</Link>
            <Link to="/suspense">2.suspense</Link>
            <Link to="/update_data">3.update data</Link>
            <Link to="/data_init_update">4.data init and update</Link>
            <Link to="/data_init_update_to_list">5.data init and update to list</Link>
        </div>
    )
}

export default MenuPanel