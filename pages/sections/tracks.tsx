import Image from "next/image";
import NewFrontiers from '../../public/assets/newFrontiers.svg'
import studentCommunity from '../../public/assets/studentCommunity.svg'
import sustainability from '../../public/assets/sustainability.svg'

export default function Tracks() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 max-w-[72rem] justify-center items-center">
      <h1>Tracks</h1>
      <div className = "grid grid-cols-3 gap-20">
        <div><Image className = "h-screen" src = {NewFrontiers}/></div>
        <div><Image className = "h-screen" src = {studentCommunity}/></div>
        <div><Image className = "h-screen" src = {sustainability}/></div>
      </div>
    </section>
  );
}
