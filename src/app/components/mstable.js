import Griddle from "griddle-react";
import React from "react";
class MSTable extends React.Component {
  constructor(params) {
    super(params);
    this.props.getMethod = params.getMethod;
  }
    //what page is currently viewed
    setPage(index) {
        this.props.getMethod(index+1,(data) =>{
          this.setState(state => {
            state.data.push(data);
            state.currentpage = index+1;
          });
        });
    }
    //this will handle how the data is sorted
    sortData(sort, sortAscending, data){
    }
    //this changes whether data is sorted in ascending or descending order
    changeSort(sort, sortAscending){
    }
    //this method handles the filtering of the data
    setFilter(filter){
    }
    //this method handles determining the page size
    setPageSize(size){
    }
    componentWillMount(){
        this.setPage(0);
    }
    render(){
        return <Griddle useExternal={true} externalSetPage={this.setPage}
        externalChangeSort={this.changeSort} externalSetFilter={this.setFilter}
        externalSetPageSize={this.setPageSize} externalMaxPage={20}
        externalCurrentPage={this.state.currentpage} results={this.state.results}
        resultsPerPage={50}
        externalSortColumn={this.state.externalSortColumn}
        externalSortAscending={this.state.externalSortAscending}
        showFilter={true} showSettings={true} enableInfiniteScroll={true} bodyHeight={400} />;
    }
}

export default MSTable;
