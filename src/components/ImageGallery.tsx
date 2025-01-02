
import React from "react";

// Updated media data with both images and videos
const mediaUrls = [
  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
  ],
  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      type: "image",
      url: "https://docs.material-tailwind.com/img/team-3.jpg",
    },
  ],
  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      type: "image",
      url: "https://docs.material-tailwind.com/img/team-3.jpg",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ],
  [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    },
  ],
];


// MediaItem component handles both images and videos
function MediaItem({
  type,
  src,
  alt,
  autoplay = false,
}: {
  type: "image" | "video";
  src: string;
  alt: string;
  autoplay: boolean;
}) {
  if (type === "video") {
    return (
      <video
        className="h-auto m-4 max-w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-200"
        controls={false}
        autoPlay={autoplay}
        muted={autoplay} // Ensures autoplay works in most browsers
        loop // Optionally loops the video
        playsInline // Prevents fullscreen behavior on mobile browsers
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <img
      className="h-auto m-4 max-w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-200"
      src={src}
      alt={alt}
    />
  );
}


// ImageGallery component renders the grid of media items
export function ImageGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {mediaUrls.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {column.map((media, index) => (
            <MediaItem
            autoplay
            
              key={index}
              type={media.type}
              src={media.url}
              alt={`gallery-media-${index}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
