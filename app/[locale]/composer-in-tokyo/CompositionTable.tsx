import ReadMore from '@/app/components/ReadMore/ReadMore';
import TableHeaderRow from '@/app/components/Table/HeaderRow';
import Table from '@/app/components/Table/Table';
import TableData from '@/app/components/Table/TableData';
import { Composition } from '@/app/constants/compositions';
import { setCurrentVideo, setIsModalOpen } from '@/redux/features/locationSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const CompositionsTable = ({ compositions }) => {
    const dispatch = useDispatch();

    const handleVideoClick = (link: string) => {
        dispatch(setCurrentVideo(link));
        dispatch(setIsModalOpen(true));
    };
    return (
        <Table>
            <TableHeaderRow
                headers={['Title', 'Ensemble', 'Description', 'Video', 'Score']}
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
                                    <div className="text-bold m-1 w-fit text-nowrap rounded-full bg-black px-4 py-1 text-center text-2xl text-white hover:text-accent" key={index}>
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
                                // variant="secondary"
                                //  size="medium" 
                                //  className="w-fit !min-w-0" 
                                onClick={() => handleVideoClick(composition.videoLink)}>
                                Watch Video
                            </button>
                        </TableData>
                        <TableData>
                            {'score'}
                        </TableData>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CompositionsTable;;;