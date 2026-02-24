import React from "react";

function TodoItem(props) {

  const handleDelete = (deleteid) => {
    const tempArr = props.activityArr.filter((item) => item.id !== deleteid);
    props.setActivityArr(tempArr);
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition">
      <p className="text-lg font-medium text-gray-800">
        {props.index + 1}. {props.activity}
      </p>

      <button
        onClick={() => handleDelete(props.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;