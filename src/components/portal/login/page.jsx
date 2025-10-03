'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext'
import toast from 'react-hot-toast'
import { apiRequest } from "@/utils/csrfHandler";
import { API_URL } from "@/config";

export default function Page() {
  const router = useRouter()
  const { setUser } = useUser()

  // form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Load remembered email on mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('pbsPortalRememberedEmail')
    if (rememberedEmail) {
      setEmail(rememberedEmail)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await apiRequest('post', `/user/login`, { email, password });
      const data = await res.data
      if (!res.status == 200 || data?.token == undefined || !data?.token) {
        return toast.error('Login failed');
      }
      
      // Handle Remember Me functionality
      if (rememberMe) {
        localStorage.setItem('pbsPortalRememberedEmail', email)
      } else {
        localStorage.removeItem('pbsPortalRememberedEmail')
      }
      
      toast.success('Logged in successfully!')
      localStorage.setItem('pbsPortalToken', data.token)
      localStorage.setItem('pbsPortalUser', JSON.stringify({ ...data.user, memberuser: data.memberuser }));
      setUser({ ...data.user, memberuser: data.memberuser })
      
      if (data.memberuser)
        router.push('/portal/dashboard')
      else window.location.href = `${API_URL}/portal/subscribe`
    } catch (err) {
      setError(err.message)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-[#37403D] overflow-x-hidden py-10 md:py-16 pt-24 md:pt-16"
      style={{
        backgroundImage: `url('/pics/login/login-bg.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-stretch justify-center">
          <div className="w-full lg:w-2/5 rounded-[30px] lg:translate-x-5 translate-x-0 bg-[url('/pics/login/login-main.png')] bg-cover bg-center flex flex-col justify-center gap-20 min-h-[40vh] lg:min-h-0">

            <img src="/pics/LOGO.png"
              alt="logo"
              className="w-16 md:w-24 xl:w-36 h-16 md:h-24 xl:h-36 mx-auto" />
            <p className="font-conthrax text-5xl xl:text-6xl text-center font-semibold text-[#DCE2E2]">
              PORTAL LOGIN
            </p>

          </div>
          <div className='w-full lg:w-3/5 -translate-y-12 lg:translate-y-0 translate-x-0 lg:-translate-x-5'>

            <form onSubmit={handleSubmit}
              className="flex flex-col gap-3 w-full rounded-[30px] bg-[#1E2322] p-6 lg:p-10" suppressHydrationWarning>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex flex-col gap-1">
                <label htmlFor="email"
                  className="text-white text-lg font-semibold xl:text-xl">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="bg-[#37403D] rounded-[8px] focus:bg-white placeholder:text-opacity-40 p-2" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password"
                  className="text-white text-lg font-semibold xl:text-xl">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="bg-[#37403D] rounded-[8px] focus:bg-white placeholder:text-opacity-40 p-2" />
              </div>


              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8AD5B7] text-[#1E1E1E] rounded-[8px] font-semibold text-lg xl:text-xl py-2 hover:bg-[#6CBF9A] transition-all duration-300 ease-in-out disabled:opacity-50 mt-2"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-[#8AD5B7] cursor-pointer"
                />
                <label htmlFor="rememberMe" className="text-white text-sm xl:text-base cursor-pointer select-none">
                  Remember Me
                </label>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a href={`${API_URL}/portal/password/reset`} className="underline text-white hover:text-[#8BD5B7] font-semibold cursor-pointer">
                  Forgot Password?
                </a>
                <a href={`${API_URL}/portal/register`} className="underline text-white hover:text-[#8BD5B7] font-semibold cursor-pointer">
                  Register
                </a>
              </div>

              <div className="flex justify-end cursor-pointer">
                <a href={`${API_URL}/alerts#alert`} className="underline underline-offset-2  transition-transform duration-300 hover:scale-110 decoration-[#8BD5B7] font-semibold">
                  <span className="text-white">New Member?</span>&nbsp;
                  <span className="text-[#8BD5B7] ">Register Here</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}