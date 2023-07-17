import { Table } from "@devexpress/dx-react-grid-material-ui";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { SortableElement } from "react-sortable-hoc";

// ----------------------------------------------------------------------

Row.propTypes = {
  props: PropTypes.object,
  rows: PropTypes.array,
};

export default function Row({ rows, props }) {
  const { row, ...others } = props;

  const id = rows.map((o) => o.id);
  console.log(id);
  return <Table.Row {...others} index={id} />;
}
