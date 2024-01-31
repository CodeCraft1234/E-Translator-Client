import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";


const DashboardRoot = () => {
    return (
        <div className="flex gap-48">
            <div className="grid grid-cols-1 top-0 gap-4 lg:grid-cols-3 lg:gap-8">
                <Dashboard></Dashboard>
                </div>
  <div className="h-32 ml-30 rounded-lg flex-1 lg:col-span-2">
      <Outlet></Outlet>
  </div>
</div>
       
    );
};

export default DashboardRoot;