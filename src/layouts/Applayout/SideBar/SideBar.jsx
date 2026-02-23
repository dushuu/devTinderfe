import React, { useState } from 'react';
import { Heart, MessageCircle, Flame, User, Settings, LogOut } from 'lucide-react';

export default function SideBar() {
    const [activeItem, setActiveItem] = useState('discover');

    const menuItems = [
        { id: 'discover', icon: Flame, label: 'Discover', route: '/' },
        { id: 'likes', icon: Heart, label: 'Likes', route: '/likes' },
        { id: 'messages', icon: MessageCircle, label: 'Messages', route: '/messages' },
        { id: 'profile', icon: User, label: 'Profile', route: '/profile' },
        { id: 'settings', icon: Settings, label: 'Settings', route: '/settings' },
    ];

    return (
        <div className="w-64 h-screen bg-gradient-to-b from-rose-50 to-white border-r border-rose-100 shadow-lg flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-rose-100">
                <div className="flex items-center gap-2">
                    <Flame className="w-8 h-8 text-rose-500" />
                    <span className="text-2xl font-bold text-rose-500">Tinder</span>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => setActiveItem(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                        activeItem === item.id
                                            ? 'bg-rose-500 text-white shadow-md'
                                            : 'text-gray-700 hover:bg-rose-100'
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-rose-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-all duration-200">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}