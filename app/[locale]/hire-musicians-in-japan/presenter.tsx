'use client';

import Button from '@/app/components/Button/Button';
import ImageSection from '@/app/components/ImageSection/ImageSection';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import PlainTextSection from '@/app/components/PlainTextSection/PlainTextSection';
import { urls } from '@/app/constants/urls';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const Presenter = () => {
	const t = useTranslations('HireMusicians');
	const router = useRouter();

	return (
		<PageLayout title={t('heroTitle')} backgroundImageUrl="/cocktailHour.jpg">
			<PlainTextSection paragraphs={[t('intro')]} />

			<PlainTextSection
				title={t('bridgeH2')}
				paragraphs={[t('bridgeP1'), t('bridgeP2')]}
			/>

			<ImageSection src="/alexTranProposal3.jpg" alt={t('imageSection1Alt')} />

			<PlainTextSection title={t('bespokeH3')} titleVariant="h3" />
			<PlainTextSection
				paragraphs={[
					t('bespokeIntro'),
					t('bespokeWeddings'),
					t('bespokeProposals'),
					t('bespokeCorporate'),
					t('bespokeConcerts'),
				]}
			/>

			<ImageSection src="/churchWedding3.jpg" alt={t('imageSection2Alt')} />

			<PlainTextSection
				title={t('arrangementsH3')}
				titleVariant="h3"
				paragraphs={[t('arrangementsP1'), t('arrangementsP2')]}
			/>

			<PlainTextSection title={t('ensembleH2')} titleVariant="h3" />
			<PlainTextSection
				paragraphs={[
					t('ensembleIntro'),
					t('ensembleSolo'),
					t('ensembleDuo'),
					t('ensemblePiano'),
					t('ensembleStrings'),
					t('ensembleCustom'),
				]}
			/>

			<ImageSection src="/parkerWedding.jpg" alt={t('imageSection3Alt')} />

			<PlainTextSection
				title={t('aboutH4')}
				titleVariant="h4"
				paragraphs={[t('aboutP')]}
			/>

			<PlainTextSection title={t('contactH2')} paragraphs={[t('contactP')]} />

			<section className="flex flex-col items-center justify-center px-12 pb-12">
				<Button variant="primary" size="medium" onClick={() => router.push(urls.contact)}>
					{t('inquireButton')}
				</Button>
			</section>
		</PageLayout>
	);
};

export default Presenter;
