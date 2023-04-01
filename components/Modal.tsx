import React, { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { BiX } from 'react-icons/bi';

interface Props {
  /** Decides whether to show the modal. */
  show: boolean;
  /** Toggles the visibility of the modal. */
  handler: (arg0: boolean) => void;
  /** Heading at the top of the modal. */
  title: string;
  /** Short description below the heading. */
  description: string;
  /** Other content in the modal (e.g. input fields, buttons, etc.). */
  children: React.ReactNode | React.ReactNode[];
}

export default function Modal({
  show,
  handler,
  title,
  description,
  children
}: Props) {
  const [targetElement, setTargetElement] = useState(null);

  useEffect(() => {
    setTargetElement(document.querySelector('#modal'));
    if (targetElement) {
      if (show) {
        document.body.style.paddingRight =
          window.innerWidth - document.body.clientWidth + 'px'; // pad the width of scrollbar
        disableBodyScroll(targetElement);
      } else {
        document.body.style.paddingRight = '';
        enableBodyScroll(targetElement);
      }
    }
  }, [targetElement, show]);

  return (
    <>
      <div
        id="modal"
        className={
          'fixed top-1/2 left-1/2 w-11/12 sm:w-[32rem] p-4 rounded bg-purple transform -translate-x-1/2 -translate-y-1/2 transform-gpu transition-opacity duration-150 ' +
          (show ? 'z-[1100] visible opacity-100' : 'z-0 invisible opacity-0')
        }
      >
        <div className="relative flex flex-col gap-4 items-center w-full mb-4">
          <div className=" absolute self-end text-white">
            <BiX
              className="text-3xl hover:text-red-500 cursor-pointer"
              onClick={() => handler(false)}
            />
          </div>
          <h3 className="mt-6 text-center w-full max-w-sm md:max-w-md text-white font-bold">
            {title}
          </h3>
          <p className="text-center w-full max-w-sm md:max-w-md text-white">
            {description}
          </p>
          <div className="w-full max-w-sm md:max-w-md">{children}</div>
        </div>
      </div>
      <div
        id="modalBackground"
        className={
          'fixed top-0 left-0 w-full h-full bg-black transform-gpu transition-opacity transition-z duration-150 z-[1000] ' +
          (show
            ? 'pointer-events-auto opacity-30'
            : 'pointer-events-none opacity-0') // pointer-events-none makes clicking events pass through it (and still have the fade out)
        }
        onClick={() => {
          handler(false);
          const modalBg = document.querySelector('#modalBackground');
          const VISIBLE = 'visible';
          const INVISIBLE = 'invisible';
          modalBg.classList.remove(VISIBLE, INVISIBLE);
          if (show) {
            // either show it immediately
            modalBg.classList.add(VISIBLE);
          } else {
            // or hide it (delayed) so the fade out occurs, and cypress doesnt get angery
            setTimeout(() => modalBg.classList.add(INVISIBLE), 150);
          }
        }}
      />
    </>
  );
}
