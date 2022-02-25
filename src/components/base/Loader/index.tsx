const Loader = () => {
  let circleCommonClasses = 'h-2.5 w-2.5 bg-cyan-900 rounded-full'

  return (
    <div className="space-x-2 justify-center items-center flex h-screen">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  )
}

export default Loader
