import "@/app/ui/styles/globals.scss";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 dark:text-white">
      <div className="col-span-1 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="font-bold mb-2">Recent Calls</h2>
        {/* Replace this with your list of recent calls */}
        <ul>
          <li>Call 1</li>
          <li>Call 2</li>
          <li>Call 3</li>
        </ul>
      </div>
      <div className="col-span-2 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="font-bold mb-2">Map</h2>
        {/* Replace this with your map */}
        <div>Map goes here</div>
      </div>
      <div className="col-span-3 bg-white dark:bg-gray-800 p-4 rounded shadow mt-4">
        <h2 className="font-bold mb-2">Active Employees</h2>
        {/* Replace this with your row of active employees */}
        <div className="flex space-x-2">
          <img
            src="employee1.jpg"
            alt="Employee 1"
            className="w-16 h-16 rounded-full"
          />
          <img
            src="employee2.jpg"
            alt="Employee 2"
            className="w-16 h-16 rounded-full"
          />
          <img
            src="employee3.jpg"
            alt="Employee 3"
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
