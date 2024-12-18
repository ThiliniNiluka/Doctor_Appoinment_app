import { useNavigate } from "react-router-dom";
import AppoinmentIcon from "../assets/images/appointment_img.png";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex px-6 my-20 rounded-lg bg-primary sm:px-10 md:px-14 lg:px-12 md:mx-10">
        {/* left side */}
        <div className="flex-1 y-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
          <div className="font-semibold text-white text-x sm:text-2xl md:text-3xl lg:text-5xl">
            <p>Book Appointment</p>
            <p className="mt-4">With 100+ Trusted Doctors</p>
          </div>

          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="px-8 py-3 mt-6 text-sm text-gray-600 transition-all bg-white rounded-full sm:text-base hover:scale-105"
          >
            Create account
          </button>
        </div>

        {/* right side */}
        <div className="relative md:w-1/2 hidden md:block lg:w-[370px]">
          <img
            src={AppoinmentIcon}
            alt=""
            className="absolute bottom-0 right-0 w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
