'use client';
import Quote from '../../components/text/Quote';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import PlainTextSection from '@/app/components/PlainTextSection/PlainTextSection';
import { useTranslations } from 'next-intl';
import { formatTranslation } from '@/app/utils/formatTranslation';

const Presenter = () => {
	const t = useTranslations('Proposals');

	return (
		<PageLayout title={t('title')} backgroundImageUrl="/shinjukuGyouenProposal1.jpg">
			<Quote>{formatTranslation(t('quote'))}</Quote>

			{/* Best Locations to Propose */}
			<PlainTextSection title={t('locations')} />
			<PlainTextSection
				title={t('tokyoTower')}
				titleVariant="h3"
				paragraphs={[t('tokyoTowerContent')]}
			/>
			<PlainTextSection
				title={t('shinjukuGyouen')}
				titleVariant="h3"
				paragraphs={[t('shinjukuGyouenContent')]}
			/>
			<PlainTextSection
				title={t('yoyogiPark')}
				titleVariant="h3"
				paragraphs={[t('yoyogiParkContent')]}
			/>
			<PlainTextSection title={t('feliceGarden')} titleVariant="h3">
				{formatTranslation(t('feliceGardenContent'))}
			</PlainTextSection>
			<PlainTextSection paragraphs={[t('otherLocations')]} />

			{/* What's Included */}
			<PlainTextSection
				title={t('service')}
				paragraphs={[
					t('serviceContent1'),
					t('serviceContent2'),
					t('servicecontent3'),
					t('serviceContent4'),
				]}
			/>

			{/* How to Plan the Perfect Surprise */}
			<PlainTextSection
				title={t('proposalFlow')}
				paragraphs={[t('proposalFlowContent1')]}
			/>

			{/* General Considerations */}
			<PlainTextSection
				title={t('generalConsiderations')}
				paragraphs={[
					t('generalConsiderationsContent'),
					t('generalConsiderationsContent2'),
				]}
			/>

			{/* Recommended Photographers */}
			<PlainTextSection title={t('photographers')} />

			{/* Weather */}
			<PlainTextSection title={t('weather')} paragraphs={[t('weatherContent')]} />

			{/* Payment */}
			<PlainTextSection title={t('payment')} paragraphs={[t('paymentContent')]} />
		</PageLayout>
	);
};

export default Presenter;
