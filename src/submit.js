// submit.js
import { SendHorizonal } from "lucide-react";
export const SubmitButton = () => {

    return (
        <div className="flex items-center justify-center min-h-screen">
      <button className="flex items-center gap-2 border-2 border-blue-500 px-6 py-2 rounded bg-white text-blue-600 font-semibold hover:bg-blue-50 transition">
        <span>Submit</span>
        <SendHorizonal size={20} />
      </button>
    </div>
    );
}
