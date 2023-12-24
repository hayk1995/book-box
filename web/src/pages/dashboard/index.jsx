import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import ServiceManagement from "./ServiceManagement";


function Index() {
    return (
        <div>
          <Routes>
            <Route path='/' exact element={<ServiceManagement />} />
            <Route path='/services' exact element={<ServiceManagement />} />
          </Routes>
        </div>
    )
}

export default Index;

