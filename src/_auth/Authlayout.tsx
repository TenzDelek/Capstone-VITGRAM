import { Outlet,Navigate } from "react-router-dom"

const Authlayout = () => {
  const isauthenticated=false;
  return (
    <>
    {isauthenticated ?( 
      <Navigate to="/" />
    ) : (
      <>
        <section className=" flex flex-1 justify-center flex-col items-center py-10">
          <Outlet/>
        </section>
        <img src="/assets/images/side-img.svg" alt="logo"
        className=" hidden xl:block  h-screen bg-no-repeat w-1/2  object-cover"/>
      </>
    )}
    </>
  )
}

export default Authlayout