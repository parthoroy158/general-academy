import AllCoursesNav from "./components/AllcoursesNav";


export default function DashboardLayout({ children }) {
    return (
        <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-50">
            <div className="max-w-7xl mx-auto bg-gray-50 ">
                {/* Sidebar */}
                <aside >
                    <AllCoursesNav></AllCoursesNav>
                </aside>

                {/* Main content */}
                <main className="w-full px-10 py-6 bg-gray-50 mt-14">
                    <div className="w-full">
                        {children}
                    </div>
                </main>

            </div>
        </div>


    );
}
