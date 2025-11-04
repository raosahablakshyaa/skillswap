import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    phone: '', 
    location: '', 
    bio: '', 
    skills: '', 
    interests: '' 
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('https://skillswap-52nn.onrender.com/api/auth/signup', formData)
      onLogin(response.data.token)
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          
          <input
            type="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Location (optional)"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none"
            placeholder="Bio (optional)"
            rows="2"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
          
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Skills you offer (optional)"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          />
          
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Skills you want (optional)"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
          />

          <button type="submit" className="w-full py-2 bg-black text-white rounded">
            Sign Up
          </button>

          <div className="text-center text-sm">
            <Link to="/login" className="text-gray-600">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup