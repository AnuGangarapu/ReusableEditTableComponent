import * as React from 'react';
import { AddItemMastersImport } from "./InputFields";
import ReusableTable from "./ReusableEditTable";
import { makeStyles } from "@mui/styles";

//const eximSchemeFields=[]
const eximSchemeFields=[{eximSchemeDebitValue: "",
eximSchemeItemSlNoInLicense:"1",
eximSchemeLicId:"5s_4YrasZMCCAcJgWUvtr",
eximSchemeLicenseRegDate: "15/05/2023",
eximSchemeLicenseRegNo: "LIC_TEST_AA_QE",
eximSchemeRegPort: '1',
isEditMode: false},   {eximSchemeDebitValue: "",
eximSchemeItemSlNoInLicense:"5",
eximSchemeLicId:"5s_4YrasZMCCAcJgWUvtr",
eximSchemeLicenseRegDate: "15/05/2023",
eximSchemeLicenseRegNo: "LIC_TEST_AA_QE",
eximSchemeRegPort: '5',
isEditMode: false}        
 ]
 const useStyles = makeStyles({
    
  table: {
    width: "77%",
    marginLeft: '0.5rem'

  },

 })

 const EditTable = (props) => {
  const classes = useStyles();
  const [rowInfo, setRowInfo] = React.useState(eximSchemeFields);

  const onEditMode = (id, name, row, index) => {
    let newData = rowInfo.map((obj, i) => {
      if (index === i) {
        console.log("obj.isEditMode", obj.isEditMode);
        return { ...obj, isEditMode: !obj.isEditMode };
      }
      return obj;
    });

    setRowInfo(newData);
  };

  const onDeleteMode = (id, removeRow, name) => {
    const filteredRow = rowInfo.filter((item, i) => i !== removeRow);
    setRowInfo(filteredRow);
  };

  const onEdit = (id, name) => {
    let newObj = { isEditMode: true };
    setRowInfo([...rowInfo, newObj]);
  };

  const onRowsChange = (Value, name, id, index) => {
    console.log(Value, name, id, index);

    const newRows = rowInfo.map((row, i) => {
      if (index === i) {
        return { ...row, [name]: Value };
      }
      return row;
    });

    setRowInfo([...newRows]);
  };

  return (
    <div className={classes.table}>
      <ReusableTable
        columnNames={AddItemMastersImport[0].columnNames}
        columns={AddItemMastersImport[0].columns}
        rows={rowInfo}
        fNames={AddItemMastersImport[0].id}
        name={AddItemMastersImport[0].name}
        onEditMode={onEditMode}
        onDeleteMode={onDeleteMode}
        onEdit={onEdit}
        onRowsChange={onRowsChange}
      />
    </div>
  );
};

export default EditTable;
