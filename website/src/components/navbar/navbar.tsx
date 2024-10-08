import { DefaultParams } from '@/app/[lang]/[region]';
import { NavbarClient } from '@/components/navbar/navbar-client';
import { NavbarClientV2 } from '@/components/navbar/navbar-client-v2';
import { mainWebsiteLanguages, websiteCurrencies, websiteRegions } from '@/i18n';
import { Translator } from '@socialincome/shared/src/utils/i18n';

type NavbarProps = {
	showNavigation?: boolean;
	v2?: boolean;
} & DefaultParams;

export default async function Navbar({ lang, region, showNavigation = true, v2 }: NavbarProps) {
	const translator = await Translator.getInstance({
		language: lang,
		namespaces: ['common', 'website-common', 'website-me'],
	});

	if (v2) {
		return (
			<NavbarClientV2
				lang={lang}
				region={region}
				showNavigation={showNavigation}
				translations={{
					language: translator.t('language'),
					region: translator.t('region'),
					currency: translator.t('currency'),
					myProfile: translator.t('navigation.my-profile'),
					contactDetails: translator.t('tabs.contact-details'),
					payments: translator.t('tabs.contributions'),
					signOut: translator.t('sign-out'),
				}}
				languages={mainWebsiteLanguages.map((lang) => ({
					code: lang,
					translation: translator.t(`languages.${lang}`),
				}))}
				regions={websiteRegions.map((region) => ({
					code: region,
					translation: translator.t(`regions.${region}`),
				}))}
				currencies={websiteCurrencies.map((currency) => ({
					code: currency,
					translation: translator.t(`currencies.${currency}`),
				}))}
				navigation={[
					{
						id: 'our-work',
						title: translator.t('navigation.our-work'),
						href: `/${lang}/${region}/v2/our-work`,
						links: [
							{ title: 'Mission', href: `/${lang}/${region}/v2/about-us` },
							{ title: 'People', href: `/${lang}/${region}/v2/about-us` },
							{ title: 'Technology', href: `/${lang}/${region}/v2/about-us` },
							{ title: 'Contact', href: `/${lang}/${region}/v2/about-us` },
						],
					},
					{
						id: 'about-us',
						title: translator.t('navigation.about-us'),
						href: `/${lang}/${region}/v2/about-us`,
						links: [
							{ title: 'Fight Poverty', href: '/v2' },
							{ title: 'Cash Transfers', href: '/v2' },
							{ title: 'Basic Income', href: '/v2' },
							{ title: 'Programs', href: '/v2' },
						],
					},
					{
						id: 'transparency',
						href: `/${lang}/${region}/transparency`,
						title: translator.t('navigation.transparency'),
						links: [
							{
								title: translator.t('navigation.finances'),
								href: `/${lang}/${region}/transparency/finances`,
							},
							{
								title: translator.t('navigation.recipient-selection'),
								href: `/${lang}/${region}/transparency/recipient-selection`,
							},
							{
								title: translator.t('navigation.faq'),
								href: `/${lang}/${region}/faq`,
							},
							{
								title: translator.t('navigation.evidence'),
								href: `/${lang}/${region}/transparency/evidence`,
							},
							{
								title: translator.t('navigation.reporting'),
								href: `/${lang}/${region}/transparency/reporting`,
							},
						],
					},
				]}
			/>
		);
	}

	return (
		<NavbarClient
			lang={lang}
			region={region}
			showNavigation={showNavigation}
			translations={{
				language: translator.t('language'),
				region: translator.t('region'),
				currency: translator.t('currency'),
				myProfile: translator.t('navigation.my-profile'),
				contactDetails: translator.t('tabs.contact-details'),
				payments: translator.t('tabs.contributions'),
				signOut: translator.t('sign-out'),
			}}
			languages={mainWebsiteLanguages.map((lang) => ({
				code: lang,
				translation: translator.t(`languages.${lang}`),
			}))}
			regions={websiteRegions.map((region) => ({
				code: region,
				translation: translator.t(`regions.${region}`),
			}))}
			currencies={websiteCurrencies.map((currency) => ({
				code: currency,
				translation: translator.t(`currencies.${currency}`),
			}))}
			navigation={[
				{
					title: translator.t('navigation.our-work'),
					href: `/${lang}/${region}/our-work`,
				},
				{
					title: translator.t('navigation.about-us'),
					href: `/${lang}/${region}/about-us`,
				},
				{
					title: translator.t('navigation.transparency'),
					links: [
						{
							title: translator.t('navigation.finances'),
							href: `/${lang}/${region}/transparency/finances`,
						},
						{
							title: translator.t('navigation.recipient-selection'),
							href: `/${lang}/${region}/transparency/recipient-selection`,
						},
						{
							title: translator.t('navigation.faq'),
							href: `/${lang}/${region}/faq`,
						},
						{
							title: translator.t('navigation.evidence'),
							href: `/${lang}/${region}/transparency/evidence`,
						},
						{
							title: translator.t('navigation.reporting'),
							href: `/${lang}/${region}/transparency/reporting`,
						},
					],
				},
			]}
		/>
	);
}
