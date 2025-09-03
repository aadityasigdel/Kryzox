import React, { useState } from "react";
import Button from "../../ui/shared/Button";

const defaultForm = {
    name: "",
    mobileNo: "",
    email: "",
    password: "",
    otp: "",
};

const requiredFields = ["name", "mobileNo", "email", "password", "otp"];

export default function AddUsers({ open, setOpen, onCreate }) {
    const [formData, setFormData] = useState(defaultForm);
    const [feedback, setFeedback] = useState({ type: "", message: "" });

    if (!open) return null;

    const inputClass =
        "w-full p-3 rounded-lg bg-[#1c1c1c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#B05BDB] placeholder:text-gray-400";

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        setFeedback({ type: "", message: "" });
    };

    const handleSubmit = () => {
        for (let field of requiredFields) {
            if (!formData[field]) {
                setFeedback({ type: "error", message: `Please fill ${field}` });
                return;
            }
        }

    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="w-[500px] max-h-[90vh] p-6 rounded-2xl bg-[#111] text-white overflow-y-auto shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-[#B05BDB] flex items-center gap-2">
                    👤 Add New User
                </h2>
                <p className="text-gray-400 mb-6">
                    Fill in the details below to add a new user to the
                    community.
                </p>

                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange("name")}
                        className={inputClass}
                    />
                    <input
                        type="text"
                        placeholder="Mobile Number *"
                        value={formData.mobileNo}
                        onChange={handleChange("mobileNo")}
                        className={inputClass}
                    />
                    <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange("email")}
                        className={inputClass}
                    />
                    <input
                        type="password"
                        placeholder="Password *"
                        value={formData.password}
                        onChange={handleChange("password")}
                        className={inputClass}
                    />
                    <input
                        type="text"
                        placeholder="OTP *"
                        value={formData.otp}
                        onChange={handleChange("otp")}
                        className={inputClass}
                    />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <Button func={() => setOpen(false)}>Cancel</Button>
                    <Button func={handleSubmit}>+ Add User</Button>
                </div>

                {feedback.message && (
                    <p
                        className={`text-sm mt-3 ${
                            feedback.type === "error"
                                ? "text-red-400"
                                : "text-green-400"
                        }`}
                    >
                        {feedback.message}
                    </p>
                )}
            </div>
        </div>
    );
}
