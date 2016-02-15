import React from "react";
import GriddleWithCallback from "griddle-react";
import Griddle from "griddle-react";

class GriddleTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {results:[], currentpage: 0};
        this.setPage = this.setPage.bind(this);
    }
    //what page is currently viewed
    setPage(index) {
        var results = this.state.results;
        
        for (let i = 0; i < 50; i++)
            results.push({country:"WEE", id:i});
        this.setState({results:results,currentpage:index+1});
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

export default GriddleTest;