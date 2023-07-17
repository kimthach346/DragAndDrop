import PropTypes from "prop-types";
import { Table } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";
import { SortableContainer, arrayMove } from "react-sortable-hoc";

// ----------------------------------------------------------------------

Body.propTypes = {
  children: PropTypes.array,
};

export default function Body(props) {
  const { children } = props;

  const rows = children.map((child) => child.props.row.row);

  const [data, setData] = useState(rows);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setData(arrayMove(data, oldIndex, newIndex));
  };
  // const GridBody = SortableContainer(Table.TableBody);
  return <Table.TableBody {...props} onSortEnd={onSortEnd} useDragHandle />;
}
