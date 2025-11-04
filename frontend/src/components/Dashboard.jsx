const Dashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="font-semibold">SkillSwap</h1>
          <button onClick={onLogout} className="text-sm text-gray-600">
            Logout
          </button>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border rounded p-4">
            <div className="text-sm text-gray-600">Skills Offered</div>
            <div className="text-2xl font-semibold mt-1">0</div>
          </div>

          <div className="border rounded p-4">
            <div className="text-sm text-gray-600">Active Trades</div>
            <div className="text-2xl font-semibold mt-1">0</div>
          </div>

          <div className="border rounded p-4">
            <div className="text-sm text-gray-600">Credits</div>
            <div className="text-2xl font-semibold mt-1">100</div>
          </div>
        </div>

        <div className="border rounded p-8 text-center">
          <h2 className="text-lg font-semibold mb-2">Welcome to SkillSwap</h2>
          <p className="text-gray-600 text-sm">Start trading your skills</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard