import Navbar from '@renderer/navbar/Navbar'
import GraficoArea from '@renderer/components/GraficoArea'

function Dashboard(): JSX.Element {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#B7D3F3] to-[#FCF7E1]">
      <Navbar />
      <div className="flex-grow bg-white m-7 rounded-lg shadow-2xl p-5 flex justify-center items-center">
        <GraficoArea />
        <div className="w-full h-full"></div>
      </div>
    </div>
  )
}

export default Dashboard
