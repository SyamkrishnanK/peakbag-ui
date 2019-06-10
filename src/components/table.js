import React, { useEffect } from "react";
// import ReactTable from "react-table";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import "react-table/react-table.css";

import { fetchData } from "./../config/action";
import { connect } from "react-redux";

const { SearchBar } = Search;

const Table = props => {
  useEffect(() => {
    fetchData();
  }, []);
  const { hikes } = props;

  return (
    <ToolkitProvider
      keyField="name"
      data={hikes}
      columns={[
        {
          text: "Name",
          dataField: "name"
        },
        {
          text: "Elevation",
          dataField: "elevation"
        },
        {
          text: "Date",
          dataField: "date"
        },
        { text: "Success", dataField: "success" },
        { text: "Distance", dataField: "distance" },
        { text: "Gain", dataField: "gain" },
        { text: "Notes", dataField: "notes" }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
      search
      //   SubComponent={row => {
      //     return (
      //       <div style={{ padding: "20px" }}>
      //         <em>Sub Component!</em>
      //       </div>
      //     );
      //   }}
    >
      {props => (
        <div>
          <SearchBar {...props.searchProps} />
          <hr />
          <BootstrapTable
            {...props.baseProps}
            pagination={paginationFactory()}
            striped
            hover
            condensed
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

const mapStateToProps = state => ({
  hikes: state.state.hikes || []
});

export default connect(mapStateToProps)(Table);
