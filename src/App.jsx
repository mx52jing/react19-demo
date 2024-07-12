import { Routes, Route } from "react-router-dom"
import UsePage from "@/pages/usePage";
import SuspensePage from "@/pages/SuspensePage";
import MenuPanel from "@/pages/MenuPanel";
import UpdateData from "@/pages/UpdateData";
import DataInitAndUpdate from "@/pages/DataInitAndUpdate";
import DataInitAndUpdateToList from "@/pages/DataInitAndUpdateToList";
import LoadMoreData from "@/pages/LoadMoreData";

function App() {
  return (
      <>
          <MenuPanel />
          <Routes>
              <Route path="/use" element={<UsePage />} />
              <Route path="/suspense" element={<SuspensePage />} />
              <Route path="/update_data" element={<UpdateData />} />
              <Route path="/data_init_update" element={<DataInitAndUpdate />} />
              <Route path="/data_init_update_to_list" element={<DataInitAndUpdateToList />} />
              <Route path="/load_more_data" element={<LoadMoreData />} />
              <Route path="*" element={<UsePage />} />
          </Routes>
      </>
  )
}

export default App
