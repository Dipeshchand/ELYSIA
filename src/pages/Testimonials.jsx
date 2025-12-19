import { useState } from "react";
import videoFile from "../assets/videos/new.mp4";

export default function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-16 px-4 bg-[#F6F3EC]">
      <div className="max-w-6xl mx-auto mt-30">
        
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-12">
          Our Events in Motion
        </h2>

        <div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => setPlay(true)}
        >
          {!play ? (
            <>
              {/* Video thumbnail frame */}
              <video
                src={videoFile}
                muted
                preload="metadata"
                className="w-full h-[260px] sm:h-[360px] md:h-[460px] object-cover"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="bg-white/70 backdrop-blur-xl p-5 rounded-full shadow-xl hover:scale-110 transition">
                  <svg
                    className="w-10 h-10 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <video
              src={videoFile}
              controls
              autoPlay
              playsInline
              className="w-full h-[260px] sm:h-[360px] md:h-[460px] object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
