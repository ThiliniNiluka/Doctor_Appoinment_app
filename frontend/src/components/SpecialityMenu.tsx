import { Link } from "react-router-dom";
import Dermatologist from "../assets/icons/Dermatologist.svg";
import Gastroenterologist from "../assets/icons/Gastroenterologist.svg";
import General_physician from "../assets/icons/General_physician.svg";
import Gynecologist from "../assets/icons/Gynecologist.svg";
import Neurologist from "../assets/icons/Neurologist.svg";
import Pediatricians from "../assets/icons/Pediatricians.svg";

export default function SpecialityMenu() {
  const specialityData = [
    {
      speciality: "General physician",
      image: General_physician,
    },
    {
      speciality: "Gynecologist",
      image: Gynecologist,
    },
    {
      speciality: "Dermatologist",
      image: Dermatologist,
    },
    {
      speciality: "Pediatricians",
      image: Pediatricians,
    },
    {
      speciality: "Neurologist",
      image: Neurologist,
    },
    {
      speciality: "Gastroenterologist",
      image: Gastroenterologist,
    },
  ];

  return (
    <div>
      <div
        id="#speciality"
        className="flex flex-col items-center gap-4 py-16 text-gray-800"
      >
        <h1 className="text-3xl font-medium">Find by Speciality </h1>
        <p className="text-sm text-center sm:w-1/3">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div className="flex w-full gap-4 pt-5 overflow-scroll sm:justify-center">
          {specialityData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
              key={index}
              to={`/doctors/ ${item.speciality}`}
            >
              <img src={item.image} alt="" className="w-16 mb-2 sm:w-24" />
              <p>{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
