/* eslint-disable no-eval */
import { Table } from "@devexpress/dx-react-grid-material-ui";
import PropTypes from "prop-types";
import { useMemo } from "react";

// ----------------------------------------------------------------------

Cell.propTypes = {
  value: PropTypes.any,
  style: PropTypes.object,
  column: PropTypes.object,
  row: PropTypes.object,
};

export default function Cell(props) {
  const { style, column, value, row } = props;

  const backgroundColor = useMemo(() => {
    const script = column.backgroundColor_Web_V2?.v;
    if (script) return eval(script);
    return null;
  }, [column]);

  if (!backgroundColor)
    return (
      <Table.Cell {...props}>
        {column.name === "dragHandle" ? (
          <span style={{ ...style, ...{ cursor: "move" } }}>::::</span>
        ) : (
          <span>{value}</span>
        )}
      </Table.Cell>
    );

  return (
    <Table.Cell
      {...props}
      style={{
        backgroundColor,
        ...style,
      }}
    >
      {column.name === "dragHandle" ? (
        <span style={{ ...style, ...{ cursor: "move" } }}>::::</span>
      ) : (
        <span>{value}</span>
      )}
    </Table.Cell>
  );
}

// ----------------------------------------------------------------------

// const exampleScript1 = `
//     column.Name?.v === 'Active' ? 'blue' : undefined
//   `;

// const exampleScript2 = `
//     row['ID_khach-hang-3x393435gsg']?.v === '1' ? 'blue' : 'red'
//   `;
