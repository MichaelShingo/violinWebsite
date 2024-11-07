import { FC, ReactNode } from "react";

interface TableProps {
    children: ReactNode;
}

const Table: FC<TableProps> = ({ children }) => {
    return (
        <table className="table-fixed border-[3px] border-black px-4 py-2">
            {children}
        </table>
    );
};

export default Table;