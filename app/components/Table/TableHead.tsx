import React, { FC, ReactNode } from "react";
import Typography from "../text/Typography";

interface TableHeadProps {
    children: ReactNode;
}

const TableHead: FC<TableHeadProps> = ({ children }) => {
    return (
        <th className="border-[3px] border-black px-4 py-2">
            <Typography variant="h4">{children}</Typography>
        </th>
    );
};

export default TableHead;