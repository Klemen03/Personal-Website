'use client';

import Link from 'next/link';
import React from 'react';
import { DarkModeBtn } from './DarkModeBtn';

const navbarItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Projects', link: '/projects' },
  { label: 'Contact', link: '/contact' },
];

function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-6 text-xl border-b border-gray-300 shadow-md">
        <div className="font-bold">
          <Link href={'/'}>Klemen.dev</Link>
        </div>
        <div>
          {navbarItems.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              className="px-2 font-medium hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <DarkModeBtn />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// 'use client';
// import React, { useState } from 'react';

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// import { Button, buttonVariants } from './ui/button';

// import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
// import { Menu } from 'lucide-react';
// import { DarkModeBtn } from './DarkModeBtn';
// import { cn } from '@/lib/utils';

// function Navbar() {
//   return (
//     <>
//       <DesktopNavbar />
//       <MobileNavbar />
//     </>
//   );
// }

// const navbarItems = [
//   { label: 'Home', link: '/' },
//   { label: 'About', link: '/about' },
//   { label: 'Projects', link: '/projects' },
//   { label: 'Contact', link: '/contact' },
// ];

// function MobileNavbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="block border-separate bg-background md:hidden">
//       <nav className="container flex items-center justify-between px-8">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" size="icon">
//               <Menu />
//             </Button>
//           </SheetTrigger>
//           <SheetContent className="w-[400px] sm:w-[540px]" side="left">
//             <Link href={'/'}>Klemen.dev</Link>

//             <div className="flex flex-col gap-1 pt-4">
//               {navbarItems.map((item) => (
//                 <NavbarItem
//                   key={item.label}
//                   link={item.link}
//                   label={item.label}
//                   clickCallBack={() => setIsOpen(!isOpen)}
//                 />
//               ))}
//             </div>
//           </SheetContent>
//         </Sheet>
//         <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
//           <Link href={'/'}>Klemen.dev</Link>
//         </div>
//         <div className="flex items-center gap-2">
//           <DarkModeBtn />
//         </div>
//       </nav>
//     </div>
//   );
// }

// function DesktopNavbar() {
//   return (
//     <div className="hidden border-separate  bg-background md:block">
//       <nav className="container flex items-center justify-between px-8">
//         <Link className="font-bold text-xl" href={'/'}>
//           Klemen.dev
//         </Link>
//         <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
//           <div className="flex h-full">
//             {navbarItems.map((item) => (
//               <NavbarItem
//                 key={item.label}
//                 link={item.link}
//                 label={item.label}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <DarkModeBtn />
//         </div>
//       </nav>
//     </div>
//   );
// }

// function NavbarItem({ link, label, clickCallBack }) {
//   const pathname = usePathname();
//   const isActive = pathname === link;

//   return (
//     <div className="relative flex items-center">
//       <Link
//         href={link}
//         className={cn(
//           buttonVariants({ variant: 'ghost' }),
//           'w-full justify-start text-lg text-muted-foreground hover:text-foreground',
//           isActive && 'text-foreground'
//         )}
//         onClick={() => {
//           if (clickCallBack) clickCallBack();
//         }}
//       >
//         {label}
//       </Link>
//       {isActive && (
//         <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
