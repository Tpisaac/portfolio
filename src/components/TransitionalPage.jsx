import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";

function TransitionalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <m.div
        transition={{ layout: { duration: 1 } }}
        Layout
        onClick={() => setIsOpen(!isOpen)}
        className="Card text-gray-800 cursor-pointer bg-red-500 shadow-lg"
        style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px(0,0,0, 0.5)" }}
      >
        <m.h2
          Layout="isOpen"
          className="text-gray-50 dark:text-gray-900  roboto font-semibold"
        >
          Page Transitions
        </m.h2>
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="expand text-white"
            >
              <p className=" dark:text-gray-900 raleway">
                Motion from Framer-motion was used to make the page
                transitional.
              </p>
              <p className=" dark:text-gray-900 raleway">
                The buttons below are snippets from the codebase that showcase
                some of the core functionality implemented in the project.
              </p>
              <div className="flex gap-3">
                <button>
                  <a
                    className=" bg-gray-900 raleway rounded-md dark:hover:bg-teal-400 dark:hover:border-white text-white dark:text-gray-50 border-2 px-8 py-1 mt-6 flex text-center"
                    href="https://tpisaac.com/t-page/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button>
                  <a
                    className=" bg-gray-900 raleway rounded-md dark:hover:bg-teal-400 dark:hover:border-white text-white dark:text-gray-50 border-2 px-8 py-1 mt-6 flex text-center"
                    href="https://github.com/Tpisaac/t-page"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </div>
  );
}

export default TransitionalPage;
