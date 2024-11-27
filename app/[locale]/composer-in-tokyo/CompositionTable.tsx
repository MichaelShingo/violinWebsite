import ReadMore from '@/app/components/ReadMore/ReadMore';
import TableHeaderRow from '@/app/components/Table/HeaderRow';
import Table from '@/app/components/Table/Table';
import TableData from '@/app/components/Table/TableData';
import { Composition } from '@/app/constants/compositions';
import { Link } from '@/i18n/routing';
import { openVideoModal } from '@/redux/features/locationSlice';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useDispatch } from 'react-redux';

const CompositionsTable = ({ compositions }) => {
    const dispatch = useDispatch();
    const t = useTranslations('Composition');
    return (
        <Table>
            <TableHeaderRow
                headers={[t('tableTitle'), t('tableEnsemble'), t('tableDescription'), t('tableVideo'), t('tableScore')]}
                cellWidths={['w-1/5', 'w-1/5', 'w-2/5', 'w-1/10', 'w-1/10']}
            />
            <tbody>
                {compositions.map((composition: Composition, index: number) => (
                    <tr key={index}>
                        <TableData>
                            {composition.title}
                        </TableData>
                        <TableData>
                            <div className="flex flex-row flex-wrap">
                                {composition.ensemble.map((ensemble, index) => (
                                    <div className="text-bold m-1 w-fit text-nowrap rounded-full bg-black px-4 py-1 text-center text-base text-white hover:text-accent md:text-2xl" key={index}>
                                        {ensemble}
                                    </div>
                                ))}
                            </div>
                        </TableData>
                        <TableData>
                            <ReadMore content={composition.description} />
                        </TableData>
                        <TableData>
                            <button
                                onClick={() => dispatch(openVideoModal(composition.videoLink))}>
                                {t('watchVideo')}
                            </button>
                        </TableData>
                        <TableData>
                            <Link
                                href={composition.scoreLink}>
                                {t('score')}
                            </Link>
                        </TableData>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CompositionsTable;;;