import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { MdDelete, MdMarkEmailUnread } from "react-icons/md";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const fetchNotifications = async (axiosPublic, type, userEmail) => {
    const { data } = await axiosPublic.get(`/notifications?email=${userEmail}`);
    const allNotifications = Array.isArray(data) ? data : [];

    // Filter notifications based on type if the type is not "All"
    if (type !== "All") {
        return allNotifications.filter((notification) => notification.type === type);
    }

    return allNotifications;
};

const NotificationPage = () => {
    const { user } = useSelector((state) => state.auth);
    const userEmail = user?.email;

    const [filterType, setFilterType] = useState("All");
    const queryClient = useQueryClient();
    const axiosPublic = useAxiosPublic();



    const { data: notifications = [], isLoading } = useQuery({
        queryKey: ["notifications", filterType, userEmail],
        queryFn: () => fetchNotifications(axiosPublic, filterType, userEmail),
        refetchInterval: 10000,
        enabled: !!userEmail,
    });

    const markAsRead = async (id) => {
        await axiosPublic.patch(`/notifications/${id}`, { isRead: true });
    };

    const mutation = useMutation({
        mutationFn: markAsRead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notifications", filterType, userEmail] });
        },
    });

    const deleteNotification = async (id) => {
        try {
            await axiosPublic.delete(`/notifications/${id}`);
            queryClient.invalidateQueries({ queryKey: ["notifications", filterType, userEmail] });
        } catch (error) {
            console.error("Failed to delete notification:", error);
        }
    };


    const handleMarkAllAsRead = async () => {
        try {
            await Promise.all(
                notifications
                    .filter((n) => !n.isRead) // only unread notifications
                    .map((notification) => markAsRead(notification._id))
            );
            queryClient.invalidateQueries({ queryKey: ["notifications", filterType, userEmail] });
        } catch (error) {
            console.error("Failed to mark all as read:", error);
        }
    };


    if (!userEmail) {
        return <p>Please log in to view notifications.</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-full h-full bg-gray-100 py-10">
            <div className="lg:w-[70%] sm:w-[80%] w-[90%] mx-auto flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-3xl font-semibold text-gray-800">Notifications</h2>
                    <button
                        onClick={handleMarkAllAsRead}
                        className="bg-Primary hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg text-sm"
                    >
                        Read All
                    </button>
                </div>

                <div className="flex sm:flex-row flex-col gap-6">
                    <div className="sm:w-1/3 flex flex-col gap-2">
                        {["All", "order_status", "payment"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`w-full text-left py-3 px-4 rounded-lg font-medium ${filterType === type
                                    ? "bg-Primary text-white"
                                    : "bg-white hover:bg-sky-100 text-gray-700"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="w-full flex flex-col gap-6">
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <div
                                    key={notification._id}
                                    className={`relative w-full flex flex-col gap-3 p-6 rounded-xl shadow-md transition-all ${notification.isRead
                                        ? "bg-gray-200 border-l-4 border-gray-400"
                                        : "bg-sky-50 border-l-4 border-Primary"
                                        }`}
                                >
                                    {/* 🗑️ Delete Button */}
                                    <button
                                        onClick={() => deleteNotification(notification._id)}
                                        className="absolute top-4 right-4 text-sky-500 hover:text-sky-700"
                                        title="Delete notification"
                                    >
                                        <MdDelete />
                                    </button>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                                            {notification.name}
                                        </h3>
                                        <p className="text-gray-600">{notification.message}</p>
                                        <div className="text-sm text-gray-400 flex gap-2 flex-wrap">
                                            <span>#notification</span>
                                            <span>#update</span>
                                        </div>
                                    </div>

                                    <hr className="border-gray-200" />

                                    {/* Bottom actions */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                                            <button className="flex items-center gap-1 hover:text-sky-600">
                                                <FaHeart /> Like
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-sky-600">
                                                <FaBookmark />
                                                Save
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                                            <span>{new Date(notification.createdAt).toLocaleString()}</span>
                                            {!notification.isRead && (
                                                <button
                                                    onClick={() => mutation.mutate(notification._id)}
                                                    className="flex items-center gap-1 text-sky-600 font-semibold hover:text-Primary"
                                                >
                                                    <MdMarkEmailUnread className="text-[20px]" /> Read Me
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <p className="text-gray-600 text-center">No notifications found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
