import React,{ useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    // Auto-scroll to latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle sending messages
    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");

            setTimeout(() => {
                setMessages((prev) => [...prev, { text: "Hello! How can I assist you?", sender: "bot" }]);
            }, 1000);
        }
    };

    // Send message on pressing "Enter"
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            className="fixed bottom-16 right-6 w-80 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden"
        >
            {/* ✅ Chat Header */}
            <div className="flex justify-between items-center bg-blue-600 p-4">
                <h2 className="text-lg font-semibold">Chatbot</h2>
                <button onClick={onClose} className="text-white hover:text-gray-300">
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* ✅ Chat Messages */}
            <div className="h-60 overflow-y-auto p-3 space-y-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <span className={`px-3 py-2 rounded-lg text-sm max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>

            {/* ✅ Chat Input */}
            <div className="flex p-3 bg-gray-800">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 p-2 rounded-l bg-gray-700 text-white focus:outline-none"
                    placeholder="Type a message..."
                />
                <button 
                    onClick={handleSend} 
                    className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </motion.div>
    );
};

export default Chatbot;
