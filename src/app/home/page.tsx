import Footer from './Footer'

export default async function Home() {
  return (
    <>
      <main className="grow p-4">
        <div className="grid h-full grid-cols-9 grid-rows-8 gap-4">
          <div className="col-span-8 row-span-3 rounded-md bg-primary-900 p-4 shadow">
            <h1 className="text-lg font-medium">Overview</h1>
          </div>

          <div className="col-span-1 row-span-3 rounded-md bg-primary-900 p-4 shadow">
            <h1 className="text-lg font-medium">Missing</h1>
          </div>

          <div className="col-span-9 row-span-5 grid grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <h1 className="text-lg font-medium">Carbon</h1>
            </div>

            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <h1 className="text-lg font-medium">Renewable Energy</h1>
            </div>

            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <h1 className="text-lg font-medium">Electricity</h1>
            </div>

            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <h1 className="text-lg font-medium">Water</h1>
            </div>

            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <h1 className="text-lg font-medium">Unit Electricity</h1>
            </div>

            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <h1 className="text-lg font-medium">Waste</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
