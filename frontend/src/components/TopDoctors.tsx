import doc1 from "../assets/images/doc1.png";
import doc2 from "../assets/images/doc2.png";
import doc3 from "../assets/images/doc3.png";
import doc4 from "../assets/images/doc4.png";
import doc5 from "../assets/images/doc5.png";
import doc6 from "../assets/images/doc6.png";
import doc7 from "../assets/images/doc7.png";
import doc8 from "../assets/images/doc8.png";
import doc9 from "../assets/images/doc9.png";
import doc10 from "../assets/images/doc10.png";
import doc11 from "../assets/images/doc11.png";
import doc12 from "../assets/images/doc12.png";
import doc13 from "../assets/images/doc13.png";
import doc14 from "../assets/images/doc14.png";
import doc15 from "../assets/images/doc15.png";
import { useNavigate } from "react-router-dom";

export default function TopDoctors() {
  const navigate = useNavigate();

  const doctorsdata = [
    {
      _id: "doc1",
      name: "Dr. Richard James",
      image: doc1,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc2",
      name: "Dr. Emily Larson",
      image: doc2,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc3",
      name: "Dr. Sarah Patel",
      image: doc3,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc4",
      name: "Dr. Christopher Lee",
      image: doc4,
      speciality: "Pediatricians",
      degree: "MBBS",
      experience: "2 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 40,
      address: {
        line1: "47th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc5",
      name: "Dr. Jennifer Garcia",
      image: doc5,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc6",
      name: "Dr. Andrew Williams",
      image: doc6,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc7",
      name: "Dr. Christopher Davis",
      image: doc7,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc8",
      name: "Dr. Timothy White",
      image: doc8,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc9",
      name: "Dr. Ava Mitchell",
      image: doc9,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc10",
      name: "Dr. Jeffrey King",
      image: doc10,
      speciality: "Pediatricians",
      degree: "MBBS",
      experience: "2 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 40,
      address: {
        line1: "47th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc11",
      name: "Dr. Zoe Kelly",
      image: doc11,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc12",
      name: "Dr. Patrick Harris",
      image: doc12,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc13",
      name: "Dr. Chloe Evans",
      image: doc13,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc14",
      name: "Dr. Ryan Martinez",
      image: doc14,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc15",
      name: "Dr. Amelia Hill",
      image: doc15,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {doctorsdata.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appoinment/ ${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={item.image} alt="" className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-lg font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="px-12 py-3 mt-10 text-gray-600 rounded-full bg-blue-50">
        more
      </button>
    </div>
  );
}
