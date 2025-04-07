"use client";

interface PopupProps {
    visible: boolean;
    message: string;
    isError: boolean;
    onClose: () => void;
}

export default function Popup({ visible, message, isError, onClose }: PopupProps) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className={`p-6 bg-white rounded shadow-md ${isError ? "border-red-500" : "border-green-500"} border`}>
                <p className="text-lg">{message}</p>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}
