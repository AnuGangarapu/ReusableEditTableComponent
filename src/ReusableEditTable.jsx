import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import DoneIcon from '@mui/icons-material/Done';

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from '@mui/system';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import AutoComplete from './Autocomplete';


// const useStyles = makeStyles((theme) => ({
//   emptyTable1: {
//     position: "sticky",
//     left: "44.5vw",
//     padding: "11vh 0vw",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   noDataLable1: {
//     position: "absolute",
//     width: "55rem",
//     // top: "22%",
//     marginTop: "-2rem",
//     display: "flex",
//     justifyContent: "center",
//   },
//   addDataButton1: {
//     position: "absolute",
//     width: "55rem",
//     top: "60%",
//     display: "flex",
//     justifyContent: "center",
//   },
//   margin: {
//     boxShadow: 'none'
//   },
//   box: {
//     height: '50px',
//     width: '114.1%',
//     color: theme.palette.common.Blue,
//     //border: "1.5px solid" + theme.palette.common.tableBorderColor,
//     marginLeft: "1.3rem",
//     display: 'flex',
//     alignItems: 'center',
//   },
//   container1: {
//     marginLeft: '1rem',
//     display: 'flex',
//     cursor: "pointer",
//   },
//   root: {
//     // overflowX:"scroll",
//     width: "101%",
//     // position:"sticky"
//     '& .MuiTableCell-stickyHeader': {
//       //color: theme.palette.common.shadeGray,
//       fontWeight: 'bold',
//       fontSize: "14px",
//       textAlign: "left",
//       whiteSpace: "nowrap",
//       //position: "sticky"
//     },
//     '& .MuiTableCell-alignCenter': {
//       textAlign: "center",
//     },
//   },
//   container: {
//     maxHeight: "300px",
//     width: "114%",
//     // width: "12",
//     // // width: "1519pxgit ",
//     marginLeft: "1.35rem",
//    // border: "1px solid " + theme.palette.common.tableBorderColor,
//     position: "sticky",
//   },
//   tableHeaderCell: {
//     //color: theme.palette.common.shadeGray,
//     fontWeight: 'bold',
//     fontSize: "14px",
//     position: "sticky",
//     left: '1px',
//     height: "51px",
//     zIndex: 50,
//     position: "relative !important"
//   },
//   stickyHeaderTabcell: {
//  //   color: theme.palette.common.shadeGray,
//     fontWeight: 'bold',
//     fontSize: "14px",
//     position: "sticky",
//     zIndex: 100,
//   //  boxShadow: "15px -1px 12px 0px " + theme.palette.common.backButtonGreyColour
//   },
//   tableRowData: {
//     height: "20px"
//   },
//   stickyBodyTabcell: {
//     position: "sticky",
//     zIndex: 30,
//     backgroundColor: "#FFFFFF",
//     //boxShadow: "15px -1px 12px 0px " + theme.palette.common.backButtonGreyColour
//   },
// }));
const useStyles = makeStyles({
    emptyTable1: {
        position: "sticky",
        left: "44.5vw",
        padding: "11vh 0vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      noDataLable1: {
        position: "absolute",
        width: "55rem",
        // top: "22%",
        marginTop: "-2rem",
        display: "flex",
        justifyContent: "center",
      },
      addDataButton1: {
        position: "absolute",
        width: "55rem",
        top: "60%",
        display: "flex",
        justifyContent: "center",
      },
      margin: {
        boxShadow: 'none'
      },
      box: {
       color: '#075779',
        width: '100%',
        border: '1.5px solid #E7E7E7',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1.35rem',
        marginBottom: '20px',
      
      },
      container1: {
        marginLeft: '1rem',
        display: 'flex',
        cursor: "pointer",
      },
      root: {
        // overflowX:"scroll",
        width: "101%",
        // position:"sticky"
        '& .MuiTableCell-head': {
          //color: theme.palette.common.shadeGray,
          color: '#888888',
          fontWeight: 'bold',
          fontSize: "14px",
          textAlign: "left",
          whiteSpace: "nowrap",
          //position: "sticky"
        },
        '& .MuiTableCell-alignCenter': {
          textAlign: "center",
        },
      },
      container: {
        maxHeight: "300px",
        width: "114%",
        // width: "12",
        // // width: "1519pxgit ",
        marginLeft: "1.35rem",
        border:'1px solid #E7E7E7',
       // border: "1px solid " + theme.palette.common.tableBorderColor,
        position: "sticky",
      },
      tableHeaderCell: {
        //color: theme.palette.common.shadeGray,
        fontWeight: 'bold',
        fontSize: "14px",
        position: "sticky",
        left: '1px',
        height: "51px",
        zIndex: 50,
        position: "relative !important"
      },
      stickyHeaderTabcell: {
     //   color: theme.palette.common.shadeGray,
        fontWeight: 'bold',
        fontSize: "14px",
        position: "sticky",
        zIndex: 100,
        boxShadow: '15px -1px 12px 0px #f0f0f0',
        backgroundColor: '#fafafa'
      //  boxShadow: "15px -1px 12px 0px " + theme.palette.common.backButtonGreyColour
      },
      tableRow: {
        height: "20px",
        width: "100%",
        backgroundColor: '#f8f8f8',
        // position:"sticky"
      },
      tableRowData: {
        height: "20px"
      },
      stickyBodyTabcell: {
        position: "sticky",
        zIndex: 30,
        backgroundColor: "#FFFFFF",
        //boxShadow: "15px -1px 12px 0px " + theme.palette.common.backButtonGreyColour
      },
      selectTableCell: {
        maxwidth:"120px",
        minWidth: "120px",
        position: "sticky",
        zIndex: 13,
        right: "0px",
        backgroundColor: "#FFFFFF",
        boxShadow: "-15px 0px 13px 0px #f0f0f0"
      },
})
const option=['1','2','3','4','5','6']

const CustomTableCell = ({ row,name,cellInputType,left,fNamesid,index,onRowsChange,sticky}) => {
  
  const classes = useStyles();
  
  let value = row[name]
  const { isEditMode, isAddMode } = row;
  const handleChange = (name, e) => {
   
   onRowsChange(e, name, fNamesid,index)// Name should also send as prop
  }
 
  return (
         
              <TableCell align="left" style={{ left }}  className={sticky ? classes.stickyBodyTabcell: classes.tableCell}>
                {isEditMode || isAddMode ? (
                  cellInputType === "textField" || cellInputType === "date" ? (
                    <div style={{ position: "relative", left: "16px" }}>{value}</div>
                  ) : cellInputType === "dropDown" ? (
                    <div>
                      <AutoComplete
                        value={value}
                        name={name}
                        variant="standard"
                        option={option}
                        handledata={handleChange}
                      />
                    </div>
                  ) : null
                ) : value}
              </TableCell>

         
  );
  
};


export default function ReusableTable(props) {

    const {rows,fNames,name,onEditMode,onDeleteMode,onEdit,onRowsChange}=props
    //console.log("props",props)
   
    const classes = useStyles();


  return (
    <div  className={classes.root}>
    <TableContainer  className={classes.container}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableRow}>
          {props.columnNames.map((value, index) => {
        return (
    <TableCell align={(value.name === "S. No." || value.name === "Actions") ? "center" : "left"} key={index} style={{ left: value.left, right: value.right, minWidth: value.minWidth, position: value.position, width: value.width }} className={value.sticky ? classes.stickyHeaderTabcell : classes.tableHeaderCell} >
    <span style={{ position: 'relative', left: value.sticky ? "" : "16px" }}> {value.name} </span>
    </TableCell>
    )
  })}
          </TableRow>
        </TableHead>
        {rows.length === 0 ? (
  <TableBody>
    <TableRow >
      <div className={classes.emptyTable1}>
        <h3 className={classes.noDataLable1}>No Data Available</h3>
        <div className={ classes.addDataButton1}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={()=>onEdit(fNames,name)}

          >
            Add data
          </Button>
        </div>
      </div>
    </TableRow>
  </TableBody>
) :             <TableBody>
{rows.map((row, index) =>(


  <TableRow className={classes.tableRowData} key={row.id}>
    <TableCell align="center" style={{ left: "0px" }} className={classes.stickyBodyTabcell} stickyHeader aria-label="sticky table">
      {index + 1}
    </TableCell>
    {props.columns.map((column) => {
       let columnName = column.name
    
   
      return <CustomTableCell name={columnName} row={row} cellInputType={column.cellInputType} left={column.left} fNamesid={fNames} index={index} onRowsChange={onRowsChange} sticky={column.sticky}
      />
    }
    )}

    
    <TableCell align="center" className={classes.selectTableCell}>
  {row.isEditMode ? (
    <>
      <IconButton
        aria-label="done"
        onClick={()=>onEditMode(fNames,name,row,index)}
    
      >
        <DoneIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="revert"
        onClick={()=>onEditMode(fNames,name,row,index)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  ) : (
    <>
      <IconButton
        aria-label="edit"
       
        onClick={()=>onEditMode(fNames,name,row,index)}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={()=>onDeleteMode(fNames,index,name)}
     
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </>
  )}


                        
                        
                        
                        
                        
                        
                         
    </TableCell>

    
  </TableRow>
))}
</TableBody>}

       
      </Table>

    </TableContainer>
     {rows.length > 0 ? <Box className={classes.box}>  <div className={classes.container1}   onClick={()=>onEdit(fNames,name)}  role="button" tabIndex="0"><AddCircleOutlinedIcon fontSize="small" />&nbsp;Add Info </div></Box> : null}
     
     
 </div>
  
  );
}



 