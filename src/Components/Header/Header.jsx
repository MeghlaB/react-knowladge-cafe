import profile from '../../assets/images/profile.png';

export default function Header() {
  return (
    <div className= 'container mx-auto md:flex justify-between items-center p-5  border-b-2'>
         <h1 className='text-4xl font-bold'>Knowladage Cafe</h1>
         <img src={profile} alt="" />
    </div>
  )
}
