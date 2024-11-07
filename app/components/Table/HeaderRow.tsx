import React, { FC, ReactNode } from "react";
import TableHead from "./TableHead";
import Typography from "../text/Typography";

interface TableHeaderRowProps {
    headers: ReactNode[];
}

const TableHeaderRow: FC<TableHeaderRowProps> = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <TableHead key={index}>
                        <Typography variant="h4">
                            {header}
                        </Typography>
                    </TableHead>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeaderRow;