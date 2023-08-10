const AdminEditModalForm = ({
  form,
  image,
  handleImageChange,
  handleChange,
  emptyFields,
}) => {
  return (
    <form>
      <div className="grid gap-y-8">
        {/* File Image */}
        <div className="flex items-center justify-center flex-col space-y-5">
          <img
            id="editImg"
            className={
              emptyFields.includes("image")
                ? "bg-gray-400 w-11/12 h-[200px] object-cover flex items-center justify-center text-gray-700 border-4 border-red-600 border-dashed"
                : "bg-gray-400 w-11/12 h-[200px] object-cover flex items-center justify-center text-gray-700 border-4 border-gray-700 border-dashed"
            }
            srcSet=""
            alt="Insert Image here"
          />
          <label htmlFor="file-input" className="sr-only">
            Choose file
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            name="image"
            accept="image/*"
            value={!image ? "" : image.originalname}
            id="file-input"
            className={
              emptyFields.includes("image")
                ? "block w-11/12 border text-white border-red-600 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4"
                : "block w-11/12 border text-white border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4"
            }
          />
        </div>
        {/* End File Image */}
        {/* Form Group */}
        <div className="space-y-5 border-t-2 border-white pt-6">
          <div className="">
            <label
              htmlFor="hs-feedback-post-comment-name-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Portfolio Title
            </label>
            <input
              type="text"
              onChange={handleChange}
              id="hs-feedback-post-comment-name-1"
              name="title"
              value={form.title}
              className={
                emptyFields.includes("title")
                  ? "py-3 px-4 block w-full border text-white border-red-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
                  : "py-3 px-4 block w-full border text-white border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
              }
              placeholder="Enter Portfolio Title"
            />
          </div>
          <div className="">
            <label
              htmlFor="hs-feedback-post-comment-email-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.category}
              id="hs-feedback-post-comment-email-1"
              name="category"
              className={
                emptyFields.includes("category")
                  ? "py-3 px-4 block w-full border text-white border-red-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
                  : "py-3 px-4 block w-full border text-white border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
              }
              placeholder="Enter Category"
            />
          </div>
          <div className="">
            <label
              htmlFor="hs-feedback-post-comment-email-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={form.date}
              id="hs-feedback-post-comment-email-1"
              className={
                emptyFields.includes("date")
                  ? "py-3 px-4 block w-full border text-white border-red-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
                  : "py-3 px-4 block w-full border text-white border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
              }
              placeholder="Enter Date"
            />
          </div>
          <div>
            <label
              htmlFor="hs-feedback-post-comment-textarea-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                name="description"
                onChange={handleChange}
                id="hs-feedback-post-comment-textarea-1"
                rows={3}
                className={
                  emptyFields.includes("description")
                    ? "py-3 px-4 block w-full border text-white border-red-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
                    : "py-3 px-4 block w-full border text-white border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
                }
                placeholder="Leave your description here..."
                value={form.description}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="hs-feedback-post-comment-email-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Link
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.link}
              id="hs-feedback-post-comment-email-1"
              name="link"
              className={
                emptyFields.includes("link")
                  ? "py-3 px-4 block w-full border text-white border-red-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
                  : "py-3 px-4 block w-full border text-white border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-transparent"
              }
              placeholder="Enter Link"
            />
          </div>
        </div>
        {/* End Form Group */}
      </div>
    </form>
  );
};

export default AdminEditModalForm