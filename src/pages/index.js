
import Title from '@/components/title/Title'
import GroupingBox from '@/components/groupingBox/GroupingBox'

import { TbMoodKid, TbTeapot } from "react-icons/tb"
import { PiTelevisionSimple } from "react-icons/pi"
import { HiOutlineLightBulb } from "react-icons/hi"

import OffBox from '@/components/offBox/OffBox'
import NewProduct from '@/components/newProducts/NewProduct'
import PopularProducts from '@/components/popularProducts/PopularProducts'
import OtherProducts from '@/components/otherProducts/OtherProducts'


export default function Home() {

  return (
    <>
      <div className='mt-24'>
        <div className='flex items-cente sm:flex-col'>
          <Title title="دسته بندی مورد نظر خود را انتخاب کنید" />
          <p className='text-gray-500'>
            شما میتوانید دسته بندی مورد نظر خود را انتخاب کنید و سپس با توجه به دسته بندی انتخابی کالا های مورد نظر خود را برسی
            و با توجه به نیاز ان ها را خریداری نمایید
          </p>
        </div>
        <div className='flex items-center justify-between mt-8 sm:grid sm:grid-cols-2 sm:gap-2  md:grid md:grid-cols-3 md:gap-2 '>
          <GroupingBox icon={<TbMoodKid />} des="کودک و نوزاد" />
          <GroupingBox icon={<TbTeapot />} des="سرو و پذیرایی" />
          <GroupingBox icon={<PiTelevisionSimple />} des="صوتی تصویری" />
          <GroupingBox icon={<HiOutlineLightBulb />} des="نور و روشنایی" />
          <GroupingBox icon={<TbTeapot />} des="سرو و پذیرایی" />
          <GroupingBox icon={<PiTelevisionSimple />} des="صوتی تصویری" />
          <GroupingBox icon={<HiOutlineLightBulb />} des="نور و روشنایی" />
        </div>
        <OffBox />
      </div>
        <NewProduct/>
        <PopularProducts/>
        <OtherProducts/>
    </>
  )
}
