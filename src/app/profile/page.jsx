'use client'

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const [loading, setLoading] = useState(false);

    if (isPending) return <div className="flex justify-center mt-20"><span className="loading loading-spinner loading-lg text-[#00d1b2]"></span></div>;
    if (!session) return <div className="text-center mt-20">Please log in to view your profile.</div>;

    const { user } = session;

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const image = formData.get('image');

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        setLoading(false);
        if (!error) {
            const modal = document.getElementById('update-modal');
            if (modal) modal.checked = false;
        } else {
            console.error("Update failed:", error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-100">
                <div className="card-body items-center text-center">
                    <div className="avatar mb-4">
                        <div className="w-24 rounded-full ring ring-[#00d1b2] ring-offset-base-100 ring-offset-2">
                            <img src={user?.image || "https://ui-avatars.com/api/?name=" + user?.name} alt="Profile" />
                        </div>
                    </div>

                    <h2 className="card-title text-2xl font-bold text-gray-800">{user?.name}</h2>
                    <p className="text-gray-500 mb-6">{user?.email}</p>

                    <div className="card-actions">
                        <label htmlFor="update-modal" className="btn border-none bg-[#00d1b2] hover:bg-[#00bfa5] text-white normal-case px-8">
                            Update Profile
                        </label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                    <h3 className="text-lg font-bold mb-4">Edit Profile Info</h3>
                    
                    <form onSubmit={handleUpdate}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">New Name</span>
                            </label>
                            <input 
                                name="name"
                                type="text" 
                                className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" 
                                required
                            />
                        </div>

                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">New Image URL</span>
                            </label>
                            <input 
                                name="image"
                                type="url" 
                                className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" 
                                required
                            />
                        </div>

                        <div className="modal-action mt-8">
                            <label htmlFor="update-modal" className="btn btn-ghost">Cancel</label>
                            <button 
                                type="submit" 
                                className="btn border-none bg-[#00d1b2] hover:bg-[#00bfa5] text-white"
                                disabled={loading}
                            >
                                {loading ? "Updating..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;