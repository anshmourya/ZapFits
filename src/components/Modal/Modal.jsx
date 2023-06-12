import { useContext } from "react";
import { CartData } from "../../hooks/CartHook";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Modal = () => {
  const { openModal, setopenModal } = useContext(CartData);

  const handleClose = () => {
    setopenModal(false);
  };

  return (
    <>
      {openModal && (
        <div
          className="relative z-10 transition-all"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <TiTickOutline className="text-lg text-green-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Item Added To Cart
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam excepturi dolor corrupti tenetur impedit
                          inventore, iure ex sed laborum veritatis praesentium
                          nobis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <Link to={"/cart"}>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white transition-all bg-orange-500 rounded-md shadow-sm hover:bg-orange-600 sm:ml-3 sm:w-auto"
                      onClick={handleClose}
                    >
                      Go To Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
