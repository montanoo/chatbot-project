import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef, useState } from "react";
import Loader from "@/components/loader/loader";
import Response from "@/components/response/response";

export default function Home() {
  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY || "AIzaSyAJehGHTKrFKzpXoWRIgdQ6Ognm0B3k0Z8"
  );
  const inputRef = useRef(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const onSubmit = async () => {
    if (!inputRef) return;
    setLoading(true);
    const result = await model.generateContent(inputRef.current.value);

    setResponse(result.response.candidates[0].content.parts[0].text);
    inputRef.current.value = "";
    setLoading(false);
  };
  return (
    <div className="min-h-full flex gap-2 flex-col">
      <Link className="text-2xl cursor-pointer" href="/">
        chatbot
      </Link>
      <section className="md:w-[500px] lg:w-[800px] mx-auto relative flex-1">
        <div className="mb-4 flex gap-4">
          <div className="min-w-[40px] h-[40px] mt-1 bg-[#424242] border-[#171717] transition-all rounded-full" />
          {loading ? <Loader /> : <Response content={response} />}
        </div>
        <div className="absolute bottom-0 py-4 grid grid-cols-12 w-full gap-4 bg-[#171717] rounded-lg px-4">
          <input
            className="col-span-9 bg-[#171717] border-0 outline-none"
            placeholder="Enter your prompt here..."
            ref={inputRef}
          />
          <div className="col-span-3 flex justify-end ">
            <button type="button" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
