import { motion } from "framer-motion";
import Button from "../components/Button";
import { Card, CardContent } from "../components/ui/card";
import { MessageCircle, X } from "lucide-react";
import React, { useState, lazy, Suspense } from "react";
// const Chatbot = lazy(() => import("../components/Chatbot"));

const AIService = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">

            {/* ✅ Header Section */}
            <header className="relative text-center py-16 px-6">
                <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
                    AI Consulting & AI-as-a-Service
                </h1>
                <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-300">
                    Unlock AI-driven innovation with <strong>Foundation Models, Multi-Modal AI, and Hyper-Personalized Automation</strong> tailored for your enterprise.
                </p>
                <Button className="mt-8 px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg">
                    Get a Free Consultation
                </Button>

                {/* 3D AI Head Model */}
                {/* <Canvas className="h-80 mt-10">
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="blue" wireframe />
          </mesh>
        </Canvas> */}
            </header>

            {/* Our AI Expertise Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-center text-blue-400">Our AI Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {services.map((service, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex">
                            <Card className="bg-gray-800 p-6 text-center shadow-xl border border-blue-500 rounded-lg hover:shadow-blue-500 flex-1">
                                <CardContent>
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                                    <p className="text-gray-400">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* AI Success Stories Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-center text-green-400">AI Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {caseStudies.map((caseStudy, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} onClick={() => { setSelectedCase(caseStudy); setShowModal(true); }} className="flex">
                            <Card className="bg-gray-800 p-6 shadow-xl border border-green-500 cursor-pointer hover:shadow-green-500 flex-1">
                                <CardContent>
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{caseStudy.title}</h3>
                                    <p className="text-gray-400">{caseStudy.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/*  What Our Clients Say Section (Restored) */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-center text-yellow-400">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex">
                            <Card className="bg-gray-800 p-6 shadow-xl border border-yellow-500 rounded-lg hover:shadow-yellow-500 flex-1">
                                <CardContent>
                                    <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
                                    <h4 className="mt-4 text-lg font-semibold text-white">{testimonial.client}</h4>
                                    <p className="text-gray-400">{testimonial.company}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/*Modal for AI Success Stories */}
            {showModal && selectedCase && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg w-1/2 text-white">
                        <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
                        <p className="mt-4">{selectedCase.details}</p>
                        <button className="mt-6 bg-red-500 px-4 py-2 rounded" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {/* Chatbot */}
            {/* {showChatbot && (
        <Suspense fallback={<div>Loading Chatbot...</div>}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            className="fixed bottom-20 right-6 bg-gray-900 text-white shadow-lg rounded-lg w-80 overflow-hidden"
          >
            <div className="flex justify-between items-center bg-blue-600 p-4">
              <h2 className="text-lg font-semibold">Chatbot</h2>
              <button onClick={() => setShowChatbot(false)} className="text-white hover:text-gray-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <Chatbot onClose={() => setShowChatbot(false)} />
          </motion.div>
        </Suspense>
      )} */}

            {/* ✅ Floating Chat Button */}
            <div className="fixed bottom-6 right-6">
                <button
                    className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700"
                    onClick={() => setShowChatbot(!showChatbot)}
                >
                    <MessageCircle className="text-white w-6 h-6" />
                </button>
            </div>

            {/* ✅ Lead Capture Form */}
            {/* <LeadCaptureForm /> */}
        </div>
    );
}

// ✅ AI Services and Case Studies Data
const services = [
    { title: "Generative AI & Foundation Models", description: "Fine-tuned LLMs (GPT-4, LLaMA, Claude), Diffusion Models, and AI-driven personalization." },
    { title: "Autonomous AI & Decision Intelligence", description: "AI-driven process automation, Reinforcement Learning, and AI-enhanced predictive analytics." },
    { title: "Computer Vision & Multi-Modal AI", description: "AI for real-time object detection, OCR, 3D reconstruction, and video analytics." }
];

const caseStudies = [
    { title: "AI-Powered Fraud Detection", description: "How our AI helped a bank reduce fraud losses by 40%.", details: "Implemented real-time fraud analytics using machine learning models trained on historical transaction data." },
    { title: "Smart Manufacturing AI", description: "AI-driven defect detection improved production efficiency by 30%.", details: "Utilized deep learning for real-time visual inspections, reducing manual errors." }
];

const testimonials = [
    { client: "John Doe", company: "XYZ Bank", feedback: "The AI-powered fraud detection system reduced our losses by 40%. Highly recommended!" },
    { client: "Sarah Johnson", company: "ABC Manufacturing", feedback: "AI-driven defect detection increased our production efficiency by 30%. Excellent work!" }
];

export default AIService;