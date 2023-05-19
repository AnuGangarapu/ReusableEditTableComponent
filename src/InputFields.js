export const AddItemMastersImport = [

{
    type: "table",
    columnNames: [{ name: "S. No.", left: "0px", sticky: true, minWidth: 82 }, { name: "Licence Registration No", minWidth: 180,position:"sticky" }, { name: "Item Sr. No. In License", minWidth: 180,position:"sticky"  }, { name: "Licence Registration Date", minWidth: 195,position:"sticky"  }, { name: "RA/Licence Registration Port", minWidth: 180 ,position:"sticky" }, { name: "Actions", right: "0px", sticky: true }],
    columns: [
      { name: "eximSchemeLicenseRegNo", cellInputType: "textField", placeholder: "Licence Registration Number*", mandatory: true, length: 10, dataType: 'numbers' },
      { name: "eximSchemeItemSlNoInLicense", cellInputType: "textField", placeholder: "Item Sr. No. In License" },
      { name: "eximSchemeLicenseRegDate", cellInputType: "date", placeholder: "Licence Registration Date*", mandatory: true },
      { name: "eximSchemeRegPort", cellInputType: "dropDown", optionName: "CustomsHouseCode", placeholder: "RA/Licence Registration Port*", length: 6, dataType: 'characters' },
    ],
    name: "eximScheme", key: "manageDetails",
    label: "Add Scheme Code,Policy mutipleField,Policy Year,Licence Code,etc..",
    id: "eximScheme",
  }]


  // {
  //   fieldName: "EXIM Scheme",
  //   input: [
  //     { id: "eximSchemeCode", labelName: "Scheme Code", name: "eximSchemeCode", type: "dropDown", optionName: "SchemeCode", key: "manageDetails" },
  //     { id: "eximSchemePolicyPara", labelName: "Policy Para", type: "textField", name: "eximSchemePolicyPara", key: "manageDetails" },
  //     { id: "eximSchemePolicyYear", labelName: "Policy Year", type: "textField", name: "eximSchemePolicyYear", key: "manageDetails" },
  //     { id: "schemeCodeNtfnNo", labelName: "EXIM Scheme BCD Notification", type: "asyncAutocompleteNotif", name: "schemeCodeNtfnNo", apiDutyCode: "EXIM",notnSlNoVarName:"schemeCodeNtfnSlNo" },
  //     { id: "schemeCodeNtfnSlNo", labelName: "EXIM Scheme BCD Notification Sr. No.", type: "autocompleteNotifSlNo", notifName: "schemeCodeNtfnNo", name: "schemeCodeNtfnSlNo", apiDutyCode: "EXIM" },

  //     {
  //       type: "table",
  //       columnNames: [{ name: "S. No.", left: "0px", sticky: true, minWidth: 82 }, { name: "Licence Registration No", minWidth: 180,position:"sticky" }, { name: "Item Sr. No. In License", minWidth: 180,position:"sticky"  }, { name: "Licence Registration Date", minWidth: 195,position:"sticky"  }, { name: "RA/Licence Registration Port", minWidth: 180 ,position:"sticky" }, { name: "Actions", right: "0px", sticky: true }],
  //       columns: [
  //         { name: "eximSchemeLicenseRegNo", cellInputType: "textField", placeholder: "Licence Registration Number*", mandatory: true, length: 10, dataType: 'numbers' },
  //         { name: "eximSchemeItemSlNoInLicense", cellInputType: "textField", placeholder: "Item Sr. No. In License" },
  //         { name: "eximSchemeLicenseRegDate", cellInputType: "date", placeholder: "Licence Registration Date*", mandatory: true },
  //         { name: "eximSchemeRegPort", cellInputType: "dropDown", optionName: "CustomsHouseCode", placeholder: "RA/Licence Registration Port*", length: 6, dataType: 'characters' },
  //       ],
  //       name: "eximScheme", key: "manageDetails",
  //       label: "Add Scheme Code,Policy mutipleField,Policy Year,Licence Code,etc..",
  //     },
  //   ],
  //   id: "eximScheme",
  //   conditionalMandatoryField: { eximSchemeLicenseRegNo: true, eximSchemeLicenseRegDate: true, eximSchemeRegPort: true, schemeCodeNtfnNo: true, schemeCodeNtfnSlNo: true },
  //   conditionCheck: "SchemeCode",
  //   manadatoryField: "eximSchemeCode",
  //   conditionalId: "eximScheme"
  // },