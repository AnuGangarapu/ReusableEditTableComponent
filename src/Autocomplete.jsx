    import React, { useEffect } from "react";
    import { TextField } from "@mui/material";
    import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
    import { makeStyles } from "@mui/styles";
  
  const filter = createFilterOptions();
  
  const useStyles = makeStyles({
    optionContainer:{
      
      '&::-webkit-scrollbar': {
        width: '0px'
      },
    
    },
    noOption:{
      color:'red !important',
     },
   
  
    dropdown: {
          width: (props) => props?.dropDownStyle?.width || 'auto',
          border: (props) => props?.dropDownStyle?.border || 'none',
        },
  
  });
  
  const AutoComplete = (props) => {
    const classes = useStyles(props);
    const { label, option, variant, placeholder, add ,dropDownStyle,name} = props;
    const [data, setData] = React.useState(props.multiple ? [] : '');
   
  

   useEffect(() => {
    setData(props.value);
  }, [props.value]);
   
    const handleChange = (event, value) => {
      
      if (props.multiple ) {
       
       
       let optionsSet=value.map((option)=>{
        if(typeof option==="string"){
         
          return {
            title: option
          };
        
        
        }
        else if(option && option.inputValue ){
          return {title: option.inputValue}
  
        }
        else{
        
          return option
        }
      
       })
    
       setData(optionsSet)
      
      
      } 
      
      else {
     
        if (value === null) {
          setData(value);
          props.handledata(name, value)
        } else if (typeof value === "string") {
          setData({
            title: value
          });

          props.handledata(name, value)
        } else if (value && value.inputValue) {
          setData({
            title: value.inputValue
          });
          props.handledata(name, value.inputValue);
        } else {
          setData(value);
          props.handledata(name, value.inputValue);
        }
      }




    };
  
   
    return (
      <Autocomplete
        style={{...props.classProperties}}
        multiple={props.multiple}
        options={option}
        onChange={(event, value) => handleChange(event, value)}
        classes={{
          listbox:props.scrollVisible === undefined || props.scrollVisible?null:classes.optionContainer,
     
         paper: props.dropDownStyle ? classes.dropdown: null,//working
         noOptions:classes.noOption
       
        }}
        paperprops={{
          style:  {...dropDownStyle}
        }}
        //disabled={true}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
        
          if (params.inputValue !== "" && add === true ) {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`
            });
          } 
         
        
          return filtered.slice(0, 200);
        }}
        
        
        getOptionLabel={(option) => {
        
           
          
          if (typeof option === "string") {
          
            return option;
          }
          if (option.title) {
             return option.title;
           }
           if (option.inputValue) {
            return option.inputValue;
          }
          return "";
     
        
         
        }}
     
       isOptionEqualToValue={(option, value) => (props.multiple ? option === value || option === value.title || option === value.inputValue : option === value.title || option !== value.title )}//Main
       value={data ? data : null}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              size="small"
              label={label}
              style={{ width: "100%" }}
              placeholder={placeholder}
              variant={variant}
            />
          );
        }}
      />
    );
  };
  
  export default AutoComplete;
  