const AdminInquiryFormModal = ({ form }) => {
  return (
    <table className="text-white table-auto">
      <tbody className="p-5">
        <tr className="">
          <td className="px-6 py-2 whitespace-nowrap font-medium">
            First Name:{" "}
          </td>
          <td className="pr-6 py-2 whitespace-nowrap font-medium">
            {form.firstName}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 whitespace-nowrap font-medium">
            Last Name:{" "}
          </td>
          <td className="pr-6 py-2 whitespace-nowrap font-medium">
            {form.lastName}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 font-medium">Company: </td>
          <td className="pr-6 py-2 font-medium">
            {form.company}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 font-medium">Website: </td>
          <td className="pr-6 py-2 font-medium">
            {form.website}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 whitespace-nowrap font-medium">Details: </td>
          <td className="pr-6 py-2  font-medium">
            {form.details}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-2 whitespace-nowrap font-medium">
            Submitted on:{" "}
          </td>
          <td className="pr-6 py-2 whitespace-nowrap font-medium">
            {new Date(form.createdAt).toLocaleDateString()}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminInquiryFormModal;
