import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

import CustomLink from "@/components/links/CustomLink";
import Seo from "@/components/Seo";

export default function NotFoundPage() {
   React.useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
         const eyes = document.querySelector(".box__ghost-eyes") as HTMLElement;
         if (!eyes) return;

         const eyesRect = eyes.getBoundingClientRect();
         const eyesCenterX = eyesRect.left + eyesRect.width / 2;
         const eyesCenterY = eyesRect.top + eyesRect.height / 2;

         // Calculate angle between mouse and eyes center
         const angle = Math.atan2(
            event.clientY - eyesCenterY,
            event.clientX - eyesCenterX
         );

         // Limit the eye movement range
         const maxDistance = 8;
         const xMove = Math.cos(angle) * maxDistance;
         const yMove = Math.sin(angle) * maxDistance;

         // Combine the centering transform with the mouse movement
         eyes.style.transform = `translate(calc(-50% + ${xMove}px), calc(-50% + ${yMove}px))`;
      };

      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
   }, []);

   return (
      <>
         <Seo templateTitle="Not Found" />

         <main>
            <section className="bg-dark">
               <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-white">
                  <div className="flex flex-col items-center gap-4">
                     <div className="symbol opacity-20 animate-[shine_4s_ease-in-out_3s_infinite]"></div>

                     <div className="relative">
                        <div className="box__ghost-container bg-white w-[100px] h-[100px] rounded-t-full relative mx-auto animate-[upndown_3s_ease-in-out_infinite]">
                           <div className="box__ghost-eyes absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[12px] w-[55px]">
                              <div className="box__eye-left w-[12px] h-[12px] bg-violet-600 rounded-full absolute left-0"></div>
                              <div className="box__eye-right w-[12px] h-[12px] bg-violet-600 rounded-full absolute right-0"></div>
                           </div>
                           <div className="box__ghost-bottom flex absolute top-full left-0 right-0">
                              {[...Array(5)].map((_, i) => (
                                 <div
                                    key={i}
                                    className={`flex-grow relative ${
                                       i % 2
                                          ? "top-[-12px] border-t-[15px] border-violet-900 bg-transparent"
                                          : "top-[-10px] h-[20px] bg-white"
                                    } rounded-full`}
                                 ></div>
                              ))}
                           </div>
                        </div>
                        <div className="box__ghost-shadow h-[20px] shadow-[0_50px_15px_5px_theme(colors.violet.800)] rounded-full mx-auto animate-[smallnbig_3s_ease-in-out_infinite]"></div>
                     </div>

                     <div className="box__description-container text-primary text-center w-2/3 text-base mx-auto mt-8">
                        <div className="box__description-title text-2xl font-bold tracking-[0.5px] mt-8">
                           Whoops.. 404!
                        </div>
                        <div className="box__description-text text-primary mt-5">
                           It seems like we couldn&apos;t find the page you were
                           looking for...
                        </div>

                        <CustomLink className="mt-8 inline-block" href="/">
                           Back to Home
                        </CustomLink>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
}
