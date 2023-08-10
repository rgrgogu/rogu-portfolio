import { useProjectsContext } from "../../../hooks/useProjectsContext";
import { useInquirysContext } from "../../../hooks/useInquiriesContext";

const AdminStats = () => {
  const { count: project } = useProjectsContext();
  const { count: inquiry } = useInquirysContext();

  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-row justify-center items-center">
        {/* Grid */}
        <div className=" grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 text-center">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">
              Today is
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              {new Date().toLocaleDateString()}
            </p>
            <p className="mt-1 text-gray-500">Good day, Kingsmen!</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">
              Number of Portfolios
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              {project}
            </p>
            <p className="mt-1 text-gray-500">Great Job!</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800   ">
              Number of Inquiries
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              {inquiry}
            </p>
            <p className="mt-1 text-gray-500">Keep Going!</p>
          </div>
          {/* End Stats */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
};

export default AdminStats;
