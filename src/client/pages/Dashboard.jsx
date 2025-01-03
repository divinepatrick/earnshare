import React, { useState } from 'react';
import {
    FaChartBar,
    FaUsers,
    FaClipboardList,
    FaCogs,
    FaTools,
    FaArrowCircleLeft,
    FaArrowCircleRight,
} from 'react-icons/fa';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('Overview');

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderContent = () => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-lg font-semibold">Total Earnings</h3>
                                <p className="text-xl font-bold">$5,340.00</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-lg font-semibold">Clicks</h3>
                                <p className="text-xl font-bold">12,340</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-lg font-semibold">Impressions</h3>
                                <p className="text-xl font-bold">50,230</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-lg font-semibold">Conversion Rate</h3>
                                <p className="text-xl font-bold">4.2%</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-4">Performance Charts</h3>
                            <div className="bg-white p-6 rounded shadow">
                                <p>Chart Placeholder</p>
                            </div>
                        </div>
                    </div>
                );
            case 'Accounts':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Accounts</h2>
                        <p>List of integrated affiliate platforms will be displayed here.</p>
                    </div>
                );
            case 'Campaigns':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
                        <p>Manage and track your campaigns here.</p>
                    </div>
                );
            case 'AI Tools':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">AI Tools</h2>
                        <p>Links to AI tools will be available here.</p>
                    </div>
                );
            case 'Settings':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Settings</h2>
                        <p>Profile settings and preferences can be managed here.</p>
                    </div>
                );
            default:
                return <div className="p-6">Select a tab to view content.</div>;
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside
                className={`${
                    isSidebarOpen ? 'w-64' : 'w-16'
                } bg-gray-800 text-white flex flex-col transition-all duration-300`}
            >
                <div className="flex items-center justify-between p-4">
                    <h1 className={`text-xl font-bold transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                        Dashboard
                    </h1>
                    <button onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
                    </button>
                </div>
                <nav className="mt-4 flex-grow">
                    <ul>
                        <li
                            className={`p-4 cursor-pointer hover:bg-gray-700 transition-all ${
                                activeTab === 'Overview' ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setActiveTab('Overview')}
                        >
                            <FaChartBar className="inline-block mr-2" />
                            {isSidebarOpen && 'Overview'}
                        </li>
                        <li
                            className={`p-4 cursor-pointer hover:bg-gray-700 transition-all ${
                                activeTab === 'Accounts' ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setActiveTab('Accounts')}
                        >
                            <FaUsers className="inline-block mr-2" />
                            {isSidebarOpen && 'Accounts'}
                        </li>
                        <li
                            className={`p-4 cursor-pointer hover:bg-gray-700 transition-all ${
                                activeTab === 'Campaigns' ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setActiveTab('Campaigns')}
                        >
                            <FaClipboardList className="inline-block mr-2" />
                            {isSidebarOpen && 'Campaigns'}
                        </li>
                        <li
                            className={`p-4 cursor-pointer hover:bg-gray-700 transition-all ${
                                activeTab === 'AI Tools' ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setActiveTab('AI Tools')}
                        >
                            <FaTools className="inline-block mr-2" />
                            {isSidebarOpen && 'AI Tools'}
                        </li>
                        <li
                            className={`p-4 cursor-pointer hover:bg-gray-700 transition-all ${
                                activeTab === 'Settings' ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setActiveTab('Settings')}
                        >
                            <FaCogs className="inline-block mr-2" />
                            {isSidebarOpen && 'Settings'}
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-grow bg-gray-100 p-4">{renderContent()}</main>
        </div>
    );
};

export default Dashboard;
