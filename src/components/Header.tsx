// export default function Header() {
//     return (
//       <header className="w-full bg-white border-b shadow-sm">
//         <div className="w-full flex flex-col items-center px-4 pt-4 pb-8">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/320px-SpaceX-Logo.svg.png"
//             alt="SpaceX Logo"
//             className="h-10 "
//           />
//         </div>
//       </header>
//     );
//   }
export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-1200 shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto px-20">
        <div className="flex justify-center pt-10 pb-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/320px-SpaceX-Logo.svg.png"
            alt="SpaceX Logo"
            className="h-8"
          />
        </div>
      </div>
    </header>
  );
}

  