import { Link } from "react-router-dom";
import branchImg from "../../assets/CardImg.webp";

export default function BranchCard({ id, name, feature, img, price, style}) {
  const features = feature.split(",").map((label) => ({
    label: label.trim(),
    available: true, // or false depending on your data
  }));

  return (
    <div className="flex m-5 flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img src={img} alt="Hot Desk" className="w-auto h-130 object-cover" />
        <div className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
          {price + " " + style}
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <ul className="space-y-2 mb-6">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span
                  className={`${
                    f.available ? "text-green-500" : "text-red-500"
                  } text-lg`}
                >
                  {f.available ? "✔" : "✖"}
                </span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom section */}
        <div className="flex gap-8 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-medium">{"Rs: "+price}</span>
            </div>
          </div>
        <div>
          <button 
          
          className="px-6 py-2 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition">
            <Link to={`/branch/${id}`} > Book Now → </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
