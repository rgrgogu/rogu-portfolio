const ViewForm = ({ form }) => {
  return (
    <table className="text-white table-auto">
      <tbody className="p-5">
        <tr className="">
          <td className="px-6 py-2 font-medium">
            Project Title:{" "}
          </td>
          <td className="pr-6 py-2 font-medium">
            {form.title || ""}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 font-medium">
            Category: {" "}
          </td>
          <td className="pr-6 py-2 font-medium">
            {form.category || ""}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 font-medium">Description: </td>
          <td className="pr-6 py-2 font-medium">{form.description || ""}</td>
        </tr>
        <tr>
          <td className="px-6 py-2 font-medium">Date Created: </td>
          <td className="pr-6 py-2 font-medium">{new Date(form.date).toLocaleDateString() || ""}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewForm;
