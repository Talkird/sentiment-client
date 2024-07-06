import selenium from '../../assets/selenium.png'

function Selenium() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="text-md text-indigo-950 font-semibold">Data scraped with </p>
      <img src={selenium} alt="selenium" className="rounded-sm w-6 h-6 relative" />
    </div>
  )
}

export default Selenium
