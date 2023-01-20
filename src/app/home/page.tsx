import Footer from './Footer'

export default async function Home() {
  return (
    <>
      <main className="grow p-4">
        <div className="grid h-full grid-cols-9 grid-rows-8 gap-4">
          <div className="col-span-8 row-span-3 rounded-md bg-primary-900 p-4 shadow">
            <p className="text-lg font-medium">Overview</p>
          </div>
          <div className="col-span-1 row-span-3 rounded-md bg-primary-900 p-4 shadow">
            <p className="text-lg font-medium">Missing</p>
          </div>
          <div className="col-span-9 row-span-5 grid grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <p className="text-lg font-medium">Carbon</p>
            </div>
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <p className="text-lg font-medium">Renewable Energy</p>
            </div>
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <p className="text-lg font-medium">Electricity</p>
            </div>
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <p className="text-lg font-medium">Water</p>
            </div>
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <p className="text-lg font-medium">Unit Electricity</p>
            </div>
            <div className="col-span-1 row-span-1 rounded-md bg-primary-900 p-4">
              <p className="text-lg font-medium">Waste</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
