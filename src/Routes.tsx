import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom"
import Main from "./components/main";
import { DashboardPage } from "./pages/dashboard";
import Login from "./pages/login";
import { ProfilePage } from "./pages/profile";
import { ProtectedRoutes, PublicRoutes } from "./utils/route";

const MainRoutes = () => (
    <Routes>
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Main />}>
                <Route path="/" element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="dashboard/profile" element={<ProfilePage />} />
                {/* <Route path="tabs" element={<Tabs props={{ userName: "Bikash web" }} />}>
                    <Route path="/tabs" element={<Navigate replace to="tab1" />} />
                    <Route path="tab1" element={<Tab1 />} />
                    <Route path="tab2" element={<ProtectedRoutes roleRequired="USER" />}>
                        <Route path="/tabs/tab2" element={<Tab2 />} />
                    </Route>
                    <Route path="tab3" element={<Tab3 />} />
                </Route> */}
            </Route>
        </Route>

        {/** Public Routes */}
        {/** Wrap all Route under PublicRoutes element */}
        <Route path="login" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
        </Route>

        {/** Permission denied route */}
        {/* <Route path="/denied" element={<PermissionDenied />} /> */}
    </Routes>
)

export default MainRoutes