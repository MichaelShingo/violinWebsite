import { useTranslations } from 'next-intl';

export type Composition = {
    title: string;
    ensemble: string[];
    description: string;
    videoLink: string;
    scoreLink: string;
};

const useCompositions = () => {
    const t = useTranslations('Composition');

    const instruments = {
        violin: t('violin'),
        violinDuo: t('violinDuo'),
        piano: t('piano'),
        cello: t('cello'),
        bassoon: t('bassoon'),
        flute: t('flute'),
        oboe: t('oboe'),
        clarinet: t('clarinet'),
        windQuintet: t('windQuintet'),
        soprano: t('soprano'),
        pianoTrio: t('pianoTrio'),
        viola: t('viola'),
        doubleBass: t('doubleBass'),
        trumpet: t('trumpet'),
        saxophone: t('saxophone'),
        trombone: t('trombone'),
        tuba: t('tuba'),
        brassQuintet: t('brassQuintet'),
        reedQuintet: t('reedQuintet'),
        bassClarinet: t('bassClarinet'),
        orchestra: t('orchestra'),
        frenchHorn: t('frenchHorn'),
        percussion: t('percussion'),
        percussionQuartet: t('percussionQuartet'),
        stringQuartet: t('stringQuartet')
    };

    const compositions: Composition[] = [
        {
            title: 'shinrin-yoku',
            ensemble: [instruments.violin, instruments.piano,],
            description: t('shinrinYoku'),
            videoLink: 'https://www.youtube.com/embed/MfpEscKzhZQ?si=jUjI500-bm1TW6rr',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4850-shinrin-yoku',
        },
        {
            title: 'Bicycle',
            ensemble: [instruments.bassoon, instruments.piano],
            description: t('bicycle'),
            videoLink: 'https://www.youtube.com/embed/r3M9Mg4XFWU?si=H8DQg511Mqvt8qXL',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4820-bicycle',
        },
        {
            title: 'Agnostic Symbol',
            ensemble: [instruments.windQuintet, instruments.flute, instruments.oboe, instruments.bassoon, instruments.clarinet, instruments.frenchHorn],
            description: t('agnosticSymbol'),
            videoLink: 'https://www.youtube.com/embed/jUhJbFW9Bs4?si=a9KJpdMdggDeJO0W',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/chamber-ensemble/4839-agnostic-symbol',
        },
        {
            title: 'Wistful Autumn Nights',
            ensemble: [instruments.violin, instruments.piano],
            description: t('wistfulAutumnNights'),
            videoLink: 'https://www.youtube.com/embed/lnPe6_CWr5E?si=YQnjeD05vvCdIW3d',
            scoreLink: 'https://www.babelscores.com/catalogs/vocal-music/4838-wistful-autumn-nights4838',
        },
        {
            title: 'Rainbow Chaser',
            ensemble: [instruments.violin, instruments.piano, instruments.cello],
            description: t('rainbowChaser'),
            videoLink: 'https://www.youtube.com/embed/dWx8ezGC2KU?si=WBYRgJVYFvb2O78m',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Blossoms in the Dead of Winter',
            ensemble: [instruments.pianoTrio, instruments.violin, instruments.piano, instruments.cello],
            description: t('blossoms'),
            videoLink: 'https://www.youtube.com/embed/4EeC3hvvrdo?si=lJyT7fARhLK5JeIl',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Parallax',
            ensemble: [instruments.piano],
            description: t('parallax'),
            videoLink: 'https://www.youtube.com/embed/xUZt4opz6pE?si=gTLB52xcJB-RzCEr',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4836-parallax4836',
        },
        {
            title: 'E-scape Party',
            ensemble: [instruments.violin],
            description: t('escapeParty'),
            videoLink: 'https://www.youtube.com/embed/qKHNnrByKD4?si=8qcDesatI_Pm8mht',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Peeck at the Kil',
            ensemble: [instruments.flute],
            description: t('peeck'),
            videoLink: 'https://www.youtube.com/embed/OyVg3Ry-Cc0?si=ND8Y4tL1XnpJ-Rij',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Love Mobile',
            ensemble: [instruments.violin],
            description: t('loveMobile'),
            videoLink: 'https://www.youtube.com/embed/0995PJmaOOA?si=To2vsv-MvMTc-RzN',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Derive III',
            ensemble: [instruments.flute, instruments.piano],
            description: t('deriveIII'),
            videoLink: 'https://www.youtube.com/embed/v7YlVjfV5Rs?si=Lm2JO0Zcbq-701RZ',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Portraits III',
            ensemble: [instruments.violin, instruments.viola, instruments.cello, instruments.violin, instruments.stringQuartet],
            description: t('portraitsIII'),
            videoLink: 'https://www.youtube.com/embed/bOntrQt2upQ?si=l4-kmxxOGM7QHMQ0',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Reconstructive Variations on Deep River',
            ensemble: [instruments.violin, instruments.piano, instruments.cello, instruments.flute, instruments.clarinet, instruments.percussion],
            description: t('deepRiver'),
            videoLink: 'https://www.youtube.com/embed/kF9gSq1Z19k?si=voAKU5ZTaihH4EGM',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'River Lights',
            ensemble: [instruments.violin],
            description: t('riverLights'),
            videoLink: 'https://www.youtube.com/embed/GRYBs3RJRf0?si=DpAiRem5CLlr_KRK',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Shrouded',
            ensemble: [instruments.reedQuintet, instruments.saxophone, instruments.bassClarinet, instruments.bassoon, instruments.clarinet, instruments.oboe],
            description: t('shrouded'),
            videoLink: 'https://www.youtube.com/embed/9BYfsLMxAH4?si=Z_99p6StB6cSzhnj',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Strolling Aroma',
            ensemble: [instruments.violin],
            description: t('strollingAroma'),
            videoLink: 'https://www.youtube.com/embed/C01AmFSMgbM?si=KM2TbF2rDes3Zrz7',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Sylvan Nights',
            ensemble: [instruments.percussion, instruments.percussionQuartet],
            description: t('sylvanNights'),
            videoLink: 'https://www.youtube.com/embed/TNDx3ZTFnoU?si=qGsx6udwLznt0E3x',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'teru teru bouzu',
            ensemble: [instruments.violin, instruments.piano, instruments.cello, instruments.soprano, instruments.flute, instruments.clarinet],
            description: t('teruTeruBouzu'),
            videoLink: 'https://www.youtube.com/embed/NG9Fa1rMe9I?si=4r8tqOA32HEOt1PN',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'mono no aware',
            ensemble: [instruments.violin, instruments.piano],
            description: t('monoNoAware'),
            videoLink: 'https://www.youtube.com/embed/uDLvWTB3kmc?si=GA5eyvA0JlGnIX06',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Following',
            ensemble: [instruments.trombone, instruments.piano],
            description: t('following'),
            videoLink: 'https://www.youtube.com/embed/EfHGyarJIyU?si=e9Pulzi2Nvnhgodm',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Einsteins Dreams',
            ensemble: [instruments.flute, instruments.bassoon, instruments.cello, instruments.percussion],
            description: t('einsteinsDreams'),
            videoLink: 'https://www.youtube.com/embed/7Iphno2yE4U?si=mxqh_dzKosbzcxun',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'Aberrant Bourree',
            ensemble: [instruments.violin, instruments.piano, instruments.cello],
            description: t('aberrantBourree'),
            videoLink: 'https://www.youtube.com/embed/sQq2-a7_ERU?si=Tqxn3wblPfw1ydOR',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
        {
            title: 'A Fantastical Flight',
            ensemble: [instruments.violinDuo, instruments.violin, instruments.violin],
            description: t('aFantasticalFlight'),
            videoLink: 'https://www.youtube.com/embed/LKzTdT0iSgQ?si=nBTlkmNoSZrtH7wa',
            scoreLink: 'https://www.babelscores.com/catalogs/instrumental/4870-blossoms-in-the-dead-of-winter',
        },
    ];

    return { instruments, compositions };
};

export default useCompositions;
