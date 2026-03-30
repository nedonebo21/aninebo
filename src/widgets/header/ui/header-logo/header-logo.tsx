import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/shared/assets/images/logo.png'

export const HeaderLogo = () => {
  return (
    <Link href={'/'} className={'flex items-center gap-1'}>
      <Image className={'w-[131px] h-[80px]'} src={Logo} alt={'Logo'} />
      <div className={'flex flex-col gap-1'}>
        <span className={'text-sm text-gray-400 leading-3'}>by nebonebo21</span>
      </div>
    </Link>
  )
}
