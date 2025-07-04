import DashBoardNav from "./dashboardNav/DashBoardNav";

export default function DashboardLayout({ children }) {
    return (
        <div className="pt-16 min-h-screen bg-gray-50 dark:bg-white">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full bg-white ">

                {/* Sidebar */}
                <aside className="w-full lg:w-64 bg-base-100 dark:bg-white border-b lg:border-b-0 lg:border-r border-black dark:border-black px-4 py-6">
                    <DashBoardNav />
                </aside>

                {/* Main content */}
                <main className="w-full lg:flex-1 px-10 py-6 bg-white">
                    <div className="w-full">
                        {children}
                    </div>
                </main>

            </div>
        </div>


    );
}
