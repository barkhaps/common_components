import React, { useState, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Checkbox,
  Paper,
} from "@mui/material";
import { ResizableBox } from "react-resizable";
import Toolbar from "../Toolbar/Toolbar";
import "react-resizable/css/styles.css";

export interface DataTableHeader {
  key: string;
  displayText: string;
  align?: "left" | "right" | "center";
  width?: number; // Initial width
  style?: React.CSSProperties;
}

export type SelectionMode = "none" | "single" | "multiple";

export interface DataTableProps {
  headers: DataTableHeader[];
  data: Record<string, React.ReactNode>[];
  page: number;
  pageSize: number;
  totalCount: number;
  rowSize?: "small" | "medium" | "large";
  selectionMode?: SelectionMode;
  onPageChange: (page: number) => void;
  onSelectionChange?: (selected: string[] | string | null) => void;
  rowKey?: string;
  toolbarProps?: React.ComponentProps<typeof Toolbar>;
  dropdownOptions?: { label: string; onClick: () => void }[];
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  page,
  pageSize,
  totalCount,
  rowSize = "medium",
  selectionMode = "none",
  onPageChange,
  onSelectionChange,
  rowKey = "id",
  toolbarProps,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [columnWidths, setColumnWidths] = useState<number[]>(headers.map((h) => h.width || 150));

  const handleRowClick = (id: string) => {
    if (selectionMode === "none") return;

    if (selectionMode === "single") {
      const newSelection = selected[0] === id ? [] : [id];
      setSelected(newSelection);
      onSelectionChange?.(newSelection.length ? newSelection[0] : null);
    }

    if (selectionMode === "multiple") {
      let newSelection = [...selected];
      if (newSelection.includes(id)) {
        newSelection = newSelection.filter((x) => x !== id);
      } else {
        newSelection.push(id);
      }
      setSelected(newSelection);
      onSelectionChange?.(newSelection);
    }
  };

  const isSelected = (id: string) => selected.includes(id);

  const handleResize = (index: number, newWidth: number) => {
    const newWidths = [...columnWidths];
    newWidths[index] = newWidth;
    setColumnWidths(newWidths);
  };

  return (
    <Paper>
      {toolbarProps && <Toolbar {...toolbarProps} />}
      <TableContainer>
        <Table
          size={rowSize === "small" || rowSize === "medium" ? rowSize : "medium"}
          sx={{ borderRadius: (theme) => theme.typography.pxToRem(20) }}
        >
          <TableHead sx={{ backgroundColor: "#f5f5f5", height: (theme) => theme.typography.pxToRem(56) }}>
            <TableRow>
              {selectionMode === "multiple" && <TableCell padding="checkbox" />}
              {headers.map((h, index) => (
                <TableCell
                  key={h.key}
                  align={h.align || "left"}
                  sx={{
                    color: "#393643",
                    fontFamily: "sans-serif",
                    fontWeight: 600,
                    padding: 0,
                    ...h.style,
                  }}
                >
                  <ResizableBox
                    width={columnWidths[index]}
                    height={40}
                    axis="x"
                    resizeHandles={["e"]}
                    onResizeStop={(_, { size }) => handleResize(index, size.width)}
                    minConstraints={[50, 40]}
                    maxConstraints={[500, 40]}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 8,
                        boxSizing: "border-box",
                      }}
                    >
                      {h.displayText}
                    </div>
                  </ResizableBox>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, idx) => {
                const id = (row[rowKey] as string) || `row-${idx}`;
                return (
                  <TableRow
                    key={id}
                    hover
                    selected={isSelected(id)}
                    onClick={() => handleRowClick(id)}
                  >
                    {selectionMode === "multiple" && (
                      <TableCell padding="checkbox" sx={{ color: "rgba(125, 131, 152, 0.3)" }}>
                        <Checkbox checked={isSelected(id)} sx={{ color: "rgba(125, 131, 152, 0.3)" }} />
                      </TableCell>
                    )}
                    {headers.map((h, index) => (
                      <TableCell
                        key={h.key}
                        align={h.align || "left"}
                        sx={{
                          width: columnWidths[index],
                          maxWidth: columnWidths[index],
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: "#393643",
                          fontFamily: "sans-serif",
                          fontSize: (theme) => theme.typography.pxToRem(14),
                          ...h.style,
                        }}
                      >
                        {row[h.key] || "-"}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={headers.length + 1} align="center">
                  No rows
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={totalCount}
                page={page}
                rowsPerPage={pageSize}
                onPageChange={(_, newPage) => onPageChange(newPage)}
                rowsPerPageOptions={[pageSize]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
