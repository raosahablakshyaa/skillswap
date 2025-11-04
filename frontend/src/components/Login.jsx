import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('https://skillswap-52nn.onrender.com/api/auth/login', formData)
      onLogin(response.data.token)
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-6">
        <h1 className="text-xl font-semibold mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          
          <div>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <input
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button type="submit" className="w-full py-2 bg-black text-white rounded">
            Login
          </button>

          <div className="text-center text-sm">
            <Link to="/signup" className="text-gray-600">Create account</Link>
          </div>

          <div className="text-center mt-4">
            <a 
              href="https://skillswap-52nn.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Wake up server
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login