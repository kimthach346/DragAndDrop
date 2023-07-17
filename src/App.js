import React, { useState } from "react";
import { render } from "react-dom";
import {
  Table,
  Grid,
  TableHeaderRow,
  VirtualTable,
} from "@devexpress/dx-react-grid-material-ui";
import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import Cell from "./components/Cell";
import Row from "./components/Row";
import Body from "./components/Body";

const columns = [
  { name: "id", title: "ID" },
  { name: "product", title: "Product" },
  { name: "owner", title: "Owner" },
];
const rows = [
  { id: 0, product: "DevExtreme", owner: "DevExpress" },
  { id: 1, product: "DevExtreme Reactive", owner: "DevExpress" },
  { id: 2, product: "Reactive", owner: "DevExpress" },
  { id: 3, product: "Dev", owner: "DevExpress" },
];

function App() {
  const [data, setData] = useState(rows);

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setData(arrayMove(data, oldIndex, newIndex));

  return (
    <Grid rows={rows} columns={[{ name: "dragHandle", title: "" }, ...columns]}>
      <Table />
      <VirtualTable
        // cellComponent={(props) => console.log(props)}
        bodyComponent={SortableContainer(Body)}
        // rowComponent={SortableElement((props) => (
        //   <Row props={props} rows={rows} />
        // ))}
        cellComponent={({ value, ...restProps }) => {
          return (
            <Table.Cell {...restProps}>
              {restProps.column.name === "dragHandle" ? (
                <span style={{ ...{ cursor: "move" } }}>::::</span>
              ) : (
                <span>{value}</span>
              )}
            </Table.Cell>
          );
        }}
        // bodyComponent={({ row, ...restProps }) => {
        //   const TableBody = SortableContainer(Table.TableBody);
        //   return (
        //     <TableBody {...restProps} onSortEnd={onSortEnd} useDragHandle />
        //   );
        // }}
        rowComponent={({ row, ...restProps }) => {
          console.log("row", row);
          console.log("restProps", restProps);
          const TableRow = SortableElement(Table.Row);
          return <TableRow {...restProps} index={rows.indexOf(row)} />;
        }}
      />
      <TableHeaderRow />
    </Grid>
  );
}

export default App;
