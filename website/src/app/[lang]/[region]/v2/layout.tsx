import { DefaultLayoutProps } from '@/app/[lang]/[region]';
import Navbar from '@/components/navbar/navbar';
import { getMetadata } from '@/metadata';
import { PropsWithChildren } from 'react';

export async function generateMetadata({ params }: DefaultLayoutProps) {
	return getMetadata(params.lang, 'website-donate');
}

export default function Layout({ children, params: { lang, region } }: PropsWithChildren<DefaultLayoutProps>) {
	return (
		<div className="theme-v2 min-h-screen overflow-scroll">
			<Navbar lang={lang} region={region} v2 />
			<main>{children}</main>
		</div>
	);
}
