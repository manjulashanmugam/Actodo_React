import TodoItem from "./TodoItem";

function TodoList({ activityArr, setActivityArr }) {
    return (
        <div className="flex-1 bg-[#8272DA] p-5 rounded-md text-white">
            <h1 className="text-xl font-semibold mb-4">
                Today's Activity
            </h1>

            {activityArr.length === 0 && (
                <p className="bg-white text-black p-3 rounded-md">
                    You haven't added anything yet
                </p>
            )}

            {activityArr.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center bg-white text-black p-3 rounded-md mb-3">
                    <p>
                        {index + 1}. {item}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;