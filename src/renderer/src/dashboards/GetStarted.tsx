import img from './sidebar.png'

function GetStarted() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6">
      <h1 className="text-center text-4xl text-black/70 bg-primary/15 px-10 py-5 rounded-3xl shadow-md">
        Get started by creating <br /> a new search using the Sidebar{' '}
      </h1>
      <div className="bg-white rounded-xl p-5 mb-20 shadow-sm">
        <img src={img} alt="sidebarimg" />
      </div>
    </div>
  )
}

export default GetStarted
