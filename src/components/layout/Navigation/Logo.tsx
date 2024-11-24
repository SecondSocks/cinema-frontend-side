import logoImage from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
const Logo: FC = () => {
	return (
		<div>
			<Link href="/">
				<div className="px-layout mb-10 block">
					<Image
						src={logoImage}
						width={247}
						height={34}
						alt="Logo"
						draggable={false}
					/>
				</div>
			</Link>
		</div>
	)
}

export default Logo
