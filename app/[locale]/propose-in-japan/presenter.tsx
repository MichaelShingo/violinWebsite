'use client';
import Quote from '../../components/text/Quote';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import PlainTextSection from '@/app/components/PlainTextSection/PlainTextSection';
import { useTranslations } from 'next-intl';
import { formatTranslation } from '@/app/utils/formatTranslation';
import ImageSection from '@/app/components/ImageSection/ImageSection';

const Presenter = () => {
	const t = useTranslations('Proposals');

	return (
		<PageLayout title={t('title')} backgroundImageUrl="/shinjukuGyouenProposal1.jpg">
			<PlainTextSection
				paragraphs={[t('overview1'), t('overview2'), t('overview3'), t('overview4')]}
			/>
			{/* Best Locations to Propose */}
			<PlainTextSection title={t('locations')} />
			<PlainTextSection
				title={t('tokyoTower')}
				titleVariant="h3"
				paragraphs={[t('tokyoTowerContent')]}
			/>
			<PlainTextSection
				title={t('greenWay')}
				titleVariant="h3"
				paragraphs={[t('greenWayContent')]}
			/>
			<PlainTextSection
				title={t('showaKinen')}
				titleVariant="h3"
				paragraphs={[t('showaKinenContent')]}
			/>
			<PlainTextSection
				title={t('yoyogiPark')}
				titleVariant="h3"
				paragraphs={[t('yoyogiParkContent')]}
			/>
			<PlainTextSection
				title={t('shinjukuGyouen')}
				titleVariant="h3"
				paragraphs={[t('shinjukuGyouenContent')]}
			/>
			<PlainTextSection
				title={t('fuji')}
				titleVariant="h3"
				paragraphs={[t('fujiContent')]}
			/>
			<PlainTextSection
				title={t('yoyogiPark')}
				titleVariant="h3"
				paragraphs={[t('yoyogiParkContent')]}
			/>
			<PlainTextSection title={t('feliceGarden')} titleVariant="h3">
				{formatTranslation(t('feliceGardenContent'))}
			</PlainTextSection>
			<PlainTextSection title={t('otherLocations')} titleVariant="h3">
				{formatTranslation(t('otherLocationsContent'))}
			</PlainTextSection>
			<ImageSection
				src="/shinjukuGyouenProposal2.jpg"
				alt={t(
					'Violinist in Tokyo, Japan performing at a proposal event in Shinjuku Gyouen'
				)}
			/>
			{/* What's Included */}
			<PlainTextSection
				title={t('service')}
				paragraphs={[
					t('serviceContent1'),
					t('serviceContent2'),
					formatTranslation(t('servicecontent3')) as string,
					t('serviceContent4'),
				]}
			/>

			{/* How to Plan the Perfect Surprise */}
			<PlainTextSection
				title={t('proposalFlow')}
				paragraphs={[t('proposalFlowContent1')]}
			/>
			<PlainTextSection title={t('scenarios')} titleVariant="h3" />
			<PlainTextSection title={t('scenario1')} titleVariant="h4">
				{t('scenarioContent1')}
			</PlainTextSection>
			<PlainTextSection title={t('scenario2')} titleVariant="h4">
				{t('scenarioContent2')}
			</PlainTextSection>
			<PlainTextSection title={t('scenario3')} titleVariant="h4">
				{t('scenarioContent3')}
			</PlainTextSection>

			<ImageSection
				src="/alexTranProposal3.jpg"
				alt={t('Violinist in Tokyo, Japan performing at a proposal event in the city')}
			/>
			{/* General Considerations */}
			<PlainTextSection title={t('generalConsiderations')}>
				{formatTranslation(t('generalConsiderationsContent'))}
			</PlainTextSection>

			{/* Recommended Photographers */}
			<PlainTextSection title={t('vendors')} titleVariant="h3">
				{formatTranslation(t('vendorsContent'))}
			</PlainTextSection>
			{/* Weather */}
			<PlainTextSection
				title={t('weather')}
				titleVariant="h3"
				paragraphs={[t('weatherContent')]}
			/>

			{/* Payment */}
			<PlainTextSection
				title={t('payment')}
				titleVariant="h3"
				paragraphs={[t('paymentContent')]}
			/>
		</PageLayout>
	);
};

export default Presenter;
