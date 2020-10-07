import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "./actions/actions";
import AppProps from './config/Props';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { ArrowRight } from '@material-ui/icons';





const StyledTableCell = withStyles((theme: Theme) =>
createStyles({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    alignItems:'center'
  },
}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}),
)(TableRow);

class App extends React.Component<AppProps>{
  
  constructor(props: AppProps)
  {
    super(props)
  }
     
  componentDidMount(){
    this.props.fetchRecords();
};
      
  render(){
    return(
      <div> 
           <Typography variant="h4"  gutterBottom align="center">
        Employee Details
      </Typography>

      

           <Table style={{margin:'auto',  width: '40%',marginTop:'10px'}}  >
           
        <TableHead style={{alignItems: 'center'}}>
          <TableRow >
            <StyledTableCell>SNO</StyledTableCell>
            <StyledTableCell >ID</StyledTableCell>
            <StyledTableCell >NAME</StyledTableCell>
            <StyledTableCell >SALARY</StyledTableCell>
            <StyledTableCell >Designation</StyledTableCell>
            <StyledTableCell >DOB</StyledTableCell>
            <StyledTableCell >Contact</StyledTableCell>
            <StyledTableCell >Habits</StyledTableCell>
            <StyledTableCell >Dept</StyledTableCell>
            <StyledTableCell >Gender</StyledTableCell>
            <StyledTableCell >EDIT</StyledTableCell>
            <StyledTableCell >DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.data.map((element,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell >
                {index}
              </StyledTableCell>
              <StyledTableCell >{element.e_id}</StyledTableCell>
              <StyledTableCell >{element.e_name}</StyledTableCell>
              <StyledTableCell >{element.e_sal}</StyledTableCell>
              <StyledTableCell >{element.e_designation}</StyledTableCell>
              <StyledTableCell >{element.dob}</StyledTableCell>
              <StyledTableCell >{element.contact}</StyledTableCell>
              <StyledTableCell >{element.e_habits}</StyledTableCell>
              <StyledTableCell >{element.e_dept}</StyledTableCell>
              <StyledTableCell >{element.gender}</StyledTableCell>

              <StyledTableCell ><Button variant="outlined"> <EditIcon/>
                                             </Button>   </StyledTableCell>
              <StyledTableCell ><Button variant="outlined">   <DeleteForeverIcon /> </Button>   </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      </div>
    )
  }}

 

 const receive =(state:any)=>{
  return{
    data : state.data,
    
  }
};

const send = (dispatch:any)=>{
  return{
    fetchRecords: ()=>{ dispatch(actions.GetEmployes()); },
    
  }

}
export default connect(receive,send)(App);

