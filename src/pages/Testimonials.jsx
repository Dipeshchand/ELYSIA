// import { useState } from "react";
// import videoFile from "../assets/videos/new.mp4";
// import colour from "../assets/videos/colour.mp4"; 
// import entrence from "../assets/videos/entrence.mp4";
// import high from "../assets/videos/high.mp4";
// import propose from "../assets/videos/propose.mp4";
// import team from "../assets/videos/team.mp4";


// export default function VideoSection() {
//   const [play, setPlay] = useState(false);

//   return (
//     <section className="py-16 px-4 bg-[#F6F3EC]">
//       <div className="max-w-6xl mx-auto mt-30">
        
//         <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-12">
//           Our Events in Motion
//         </h2>

//         <div
//           className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer"
//           onClick={() => setPlay(true)}
//         >
//           {!play ? (
//             <>
//               {/* Video thumbnail frame */}
//               <video
//                 src={videoFile}
//                 muted
//                 preload="metadata"
//                 className="w-full h-[260px] sm:h-[360px] md:h-[460px] object-cover"
//               />

//               {/* Play Button */}
//               <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                 <div className="bg-white/70 backdrop-blur-xl p-5 rounded-full shadow-xl hover:scale-110 transition">
//                   <svg
//                     className="w-10 h-10 text-gray-900"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <video
//               src={videoFile}
//               controls
//               autoPlay
//               playsInline
//               className="w-full h-[260px] sm:h-[360px] md:h-[460px] object-cover"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

import video1 from "../assets/videos/new.mp4";
import video2 from "../assets/videos/colour.mp4";
import video3 from "../assets/videos/entrence.mp4";
import video4 from "../assets/videos/high.mp4";
import video5 from "../assets/videos/propose.mp4";
import video6 from "../assets/videos/team.mp4";

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-16 px-4 bg-[#F6F3EC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mt-50 mb-12">
          Our Events in Motion
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setActiveVideo(index)}
            >
              {activeVideo === index ? (
                <video
                  src={video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-[520px] md:h-[260px] object-cover"
                />
              ) : (
                <>
                  <video
                    src={video}
                    muted
                    preload="metadata"
                    className="w-full h-[520px] md:h-[260px] object-cover"
                  />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white/70 backdrop-blur-xl p-4 rounded-full shadow-xl group-hover:scale-110 transition">
                      <svg
                        className="w-8 h-8 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
