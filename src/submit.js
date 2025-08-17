import { SendHorizonal } from "lucide-react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

export const SubmitButton = ({ nodes, edges }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const { width, height } = useWindowSize();
  const [nodeCount,setNodeCount] = useState("")
  const [edgecount,setEdgeCount] = useState("")

  const handlesubmit = async () => {
    setShowWarning(false);
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nodes: nodes.map(n => ({ id: n.id })),
        edges: edges.map(e => ({ source: e.source, target: e.target })),
      })
    });
    const data = await response.json();
    setNodeCount(data.nodeCount)
    setEdgeCount(data.edgeCount)
    if (data.isDAG) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } else {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 4000);
    }
  };

  return (
    <>
      {/* Full-screen overlay for confetti and success message */}
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Confetti width={width} height={height} />
          <div
            style={{
              background: "white",
              padding: "2rem 3rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
              textAlign: "center"
            }}
          >
            <div className="text-3xl font-bold text-green-600 mb-2">🎉 Success!</div>
            <div className="text-lg text-gray-700">You have created your workflow!</div>
            <div className="mt-2 text-gray-800">
              <span className="font-semibold">Nodes:</span> {nodeCount} &nbsp;
              <span className="font-semibold">Edges:</span> {edgecount}
            </div>
          </div>
        </div>
      )}

      {/* Full-screen overlay for warning */}
      {showWarning && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2rem 3rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
              textAlign: "center"
            }}
          >
            <div className="text-3xl font-bold text-yellow-600 mb-2">⚠️ Warning</div>
            <div className="text-lg text-gray-700">The workflow is <span className="font-bold text-red-600">NOT</span> valid</div>
          </div>
        </div>
      )}

      <div
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <button
          className="
            flex items-center gap-2
            px-6 py-3
            rounded-full
            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white font-bold
            shadow-lg
            hover:from-blue-600 hover:to-indigo-600
            hover:scale-105
            transition-all duration-200
            border-none
            focus:outline-none
            focus:ring-2 focus:ring-blue-300
          "
          onClick={handlesubmit}
        >
          <span>Submit</span>
          <SendHorizonal size={22} />
        </button>
      </div>
    </>
  );
};