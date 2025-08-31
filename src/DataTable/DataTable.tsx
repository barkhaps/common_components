import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TableFooter,
  TablePagination,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Toolbar, { ToolbarProps } from "../Toolbar/Toolbar";

export interface TableHeader {
  key: string;
  displayText: string;
  width?: string | number;
  align?: "left" | "right" | "center";
}

export interface DataTableProps {
  headers: TableHeader[];
  data?: Record<string, React.ReactNode>[];
  pageSize?: number;
  rowSize?: "small" | "medium" | "large";
  toolbarProps?: ToolbarProps;
  onPageChange: (page: number) => void;
  page: number;
  totalCount: number;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data = [],
  pageSize = 5,
  rowSize = "medium",
  toolbarProps,
  onPageChange,
  page,
  totalCount,
}) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* Toolbar */}
      {toolbarProps && <Toolbar {...toolbarProps} />}

      {/* Table */}
      <TableContainer>
        <Table size={rowSize}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header.key}
                  align={header.align ?? "left"}
                  style={{ width: header.width }}
                >
                  {header.displayText}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={headers.length} align="center">
                  <Typography variant="body2" color="textSecondary">
                    No rows
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {headers.map((header) => (
                    <TableCell
                      key={header.key}
                      align={header.align ?? "left"}
                    >
                      {row[header.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>

          {/* Footer with pagination */}
          <TableFooter>
            <TableRow>
              <TablePagination
                count={totalCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={pageSize}
                rowsPerPageOptions={[pageSize]}
                ActionsComponent={({ page, onPageChange }) => (
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={(e) => onPageChange(e, page - 1)}
                      disabled={page === 0}
                    >
                      <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                      onClick={(e) => onPageChange(e, page + 1)}
                      disabled={(page + 1) * pageSize >= totalCount}
                    >
                      <KeyboardArrowRight />
                    </IconButton>
                  </Box>
                )}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
