export default function Dashboard() {
  return <main className="bg-green-100 min-h-screen">
    <div className="bg-green-200 p-5 ">
      <div className="flex items-center justify-center gap-5">
        <input className="h-16 rounded-full text-center" type="text" placeholder="search" />
        <div className="bg-white rounded-full aspect-square w-[60px]"></div>
      </div>
    </div>
  </main>;
}
